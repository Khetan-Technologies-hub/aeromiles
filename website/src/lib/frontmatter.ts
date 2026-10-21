import { parse } from "yaml";

type FrontmatterResult = {
  data: Record<string, unknown>;
  content: string;
};

const FRONTMATTER_RE = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/;

export function parseFrontmatter(source: string): FrontmatterResult {
  const match = source.match(FRONTMATTER_RE);
  if (!match) {
    return { data: {}, content: source };
  }

  const frontmatter = parse(match[1]);
  if (frontmatter !== null && typeof frontmatter !== "object") {
    throw new Error("Frontmatter must be a YAML object.");
  }

  return {
    data: (frontmatter ?? {}) as Record<string, unknown>,
    content: source.slice(match[0].length),
  };
}
