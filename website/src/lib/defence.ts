import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const DefenceContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  hero_title: z.string().optional(),
  hero_subtitle: z.string().optional(),
  icon: z.string().optional(),
  summary: z.string().optional(),
});

export async function getDefencePageData() {
  const filePath = path.join(process.cwd(), "content/defence/index.mdx");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    metadata: DefenceContentSchema.parse(data),
    content,
  };
}

export async function getDefenceCapabilities() {
  const dirPath = path.join(process.cwd(), "content/defence");
  const files = fs.readdirSync(dirPath).filter(file => file !== "index.mdx" && file.endsWith(".mdx"));

  const capabilities = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        metadata: DefenceContentSchema.parse(data),
        content,
      };
    })
  );

  return capabilities;
}
