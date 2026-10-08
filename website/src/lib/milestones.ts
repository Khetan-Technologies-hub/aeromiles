import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const MilestoneSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string().optional(),
});

export async function getMilestones() {
  const dirPath = path.join(process.cwd(), "content/milestones");
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter(file => file.endsWith(".mdx"));

  const milestones = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        metadata: MilestoneSchema.parse(data),
      };
    })
  );

  // Sort chronologically by date
  return milestones.sort((a, b) =>
    a.metadata.date.localeCompare(b.metadata.date)
  );
}
