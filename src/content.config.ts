import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      heroImage: image().or(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = { blog };
