import { z } from "zod";
import fs from "fs";
import path from "path";
import { parseFrontmatter } from "./frontmatter";

export const DefenceContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  hero_title: z.string().optional(),
  hero_subtitle: z.string().optional(),
  icon: z.string().optional(),
  summary: z.string().optional(),
});

export type DefenceMetadata = z.infer<typeof DefenceContentSchema>;

export type DefencePageData = {
  metadata: DefenceMetadata;
  content: string;
};

export type DefenceCapability = {
  slug: string;
  metadata: DefenceMetadata;
  content: string;
};

export async function getDefencePageData(): Promise<DefencePageData> {
  const filePath = path.join(process.cwd(), "content/defence/index.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = parseFrontmatter(fileContent);

  return {
    metadata: DefenceContentSchema.parse(data),
    content,
  };
}

export async function getDefenceCapabilities(): Promise<DefenceCapability[]> {
  const dirPath = path.join(process.cwd(), "content/defence");
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file !== "index.mdx" && file.endsWith(".mdx"));

  const capabilities = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = parseFrontmatter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        metadata: DefenceContentSchema.parse(data),
        content,
      };
    })
  );

  return capabilities;
}
