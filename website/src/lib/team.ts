import { z } from "zod";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string(),
  linkedin: z.string().url().optional(),
});

export async function getTeamMembers() {
  const dirPath = path.join(process.cwd(), "content/team");
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter(file => file.endsWith(".mdx"));

  const members = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        metadata: TeamMemberSchema.parse(data),
      };
    })
  );

  return members;
}
