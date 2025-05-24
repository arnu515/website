import { routeLoader$ } from "@builder.io/qwik-city";
import * as path from "node:path";

export type PostFrontmatter = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  suggested: boolean;
  created: Date;
  edited: Date | null;
};

function parseDate(v: any) {
  if (typeof v !== "string" && typeof v !== "number") return null;
  const date = new Date(v);
  return isNaN(date.getTime()) ? null : date;
}

export function normalizeFrontmatter(
  frontmatter: Record<string, unknown> | null | undefined,
): PostFrontmatter | null {
  if (!frontmatter?.title) return null;
  return {
    slug:
      typeof frontmatter.slug === "string" ? frontmatter.slug : "unknown-slug",
    title:
      typeof frontmatter.title === "string"
        ? frontmatter.title
        : "Unknown title",
    description:
      typeof frontmatter.description === "string"
        ? frontmatter.description
        : "Unknown description",
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    suggested:
      typeof frontmatter.suggested === "boolean"
        ? frontmatter.suggested
        : false,
    created: parseDate(frontmatter.created) ?? new Date(),
    edited: parseDate(frontmatter.edited),
  };
}

const getAllPosts = () =>
  Object.entries(
    import.meta.glob("../routes/posts/**/*.mdx", {
      import: "frontmatter",
      eager: true,
    }),
  )
    .map(
      ([k, v]) =>
        normalizeFrontmatter({
          ...(v as any),
          slug: path.dirname(k).replace("routes/", ""),
        })!,
    )
    .sort((a, b) => b.created.getTime() - a.created.getTime());

// eslint-disable-next-line qwik/loader-location
export const getSuggestedPosts = routeLoader$(async () =>
  getAllPosts().filter((i) => i.suggested),
);

// eslint-disable-next-line qwik/loader-location
export const getPosts = routeLoader$(async () => getAllPosts());
