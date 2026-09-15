import "server-only";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { z } from "zod";

/**
 * Content engine: reads Markdown files with typed frontmatter from `content/`,
 * validates them with zod at build time, and returns typed data to pages.
 *
 * Server-only (uses the filesystem). Loaders run during `next build` — content
 * is baked into the static export. Invalid frontmatter throws, failing the build
 * with an error that names the offending file. See content/README.md for fields.
 */

const CONTENT_DIR = join(process.cwd(), "content");

/* ------------------------------- schemas ------------------------------- */

const specSchema = z.object({ label: z.string(), value: z.string() });

export const productSchema = z.object({
  title: z.string(),
  category: z.enum(["plane", "drone", "defence"]),
  categoryLabel: z.string(),
  summary: z.string(),
  specs: z.array(specSchema).default([]),
  image: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
});

export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  photo: z.string().optional(),
  order: z.number().default(0),
});

export const labProgramSchema = z.object({
  title: z.string(),
  audience: z.enum(["k12", "college"]),
  summary: z.string(),
  equipment: z.array(z.string()).default([]),
  benefits: z.array(z.string()).default([]),
  order: z.number().default(0),
});

export const defenceCapabilitySchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().default(""),
  order: z.number().default(0),
});

export const testimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  org: z.string().optional(),
  order: z.number().default(0),
});

/* --------------------------- inferred types ---------------------------- */

type WithSlug<T> = T & { slug: string };

export type Product = WithSlug<z.infer<typeof productSchema>>;
export type TeamMember = WithSlug<z.infer<typeof teamMemberSchema>>;
export type LabProgram = WithSlug<z.infer<typeof labProgramSchema>>;
export type DefenceCapability = WithSlug<
  z.infer<typeof defenceCapabilitySchema>
>;
export type Testimonial = WithSlug<z.infer<typeof testimonialSchema>>;
export type ProductCategory = Product["category"];

/* ------------------------------ loader --------------------------------- */

/**
 * Read + validate every `.md` file in `content/<dir>`. Slug = filename.
 * Throws (failing the build) with a file-named message on invalid frontmatter.
 */
function loadCollection<S extends z.ZodType>(
  dir: string,
  schema: S,
): WithSlug<z.infer<S>>[] {
  const folder = join(CONTENT_DIR, dir);

  let files: string[];
  try {
    files = readdirSync(folder).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  return files.map((file) => {
    const raw = readFileSync(join(folder, file), "utf8");
    const { data } = matter(raw);
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
        .join("\n");
      throw new Error(
        `Invalid frontmatter in content/${dir}/${file}:\n${issues}`,
      );
    }
    const slug = file.replace(/\.md$/, "");
    return { ...(parsed.data as object), slug } as WithSlug<z.infer<S>>;
  });
}

const byOrder = (a: { order: number }, b: { order: number }) =>
  a.order - b.order;

/* ------------------------------ products ------------------------------- */

export function getProducts(): Product[] {
  return loadCollection("products", productSchema).sort(byOrder);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return getProducts().filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter((p) => p.featured);
}

/* -------------------------- other collections -------------------------- */

export function getTeam(): TeamMember[] {
  return loadCollection("team", teamMemberSchema).sort(byOrder);
}

export function getLabPrograms(): LabProgram[] {
  return loadCollection("labs", labProgramSchema).sort(byOrder);
}

export function getDefenceCapabilities(): DefenceCapability[] {
  return loadCollection("defence", defenceCapabilitySchema).sort(byOrder);
}

export function getTestimonials(): Testimonial[] {
  return loadCollection("testimonials", testimonialSchema).sort(byOrder);
}
