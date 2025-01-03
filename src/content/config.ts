import { defineCollection, z } from "astro:content";

import { tags, type ValidTags } from "../utils/blogTags";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().refine((str) => str.length <= 60, {
        message: "Title must be less than 60 characters long!",
      }),
      description: z.string().refine(
        (desc) => desc.length >= 25 && desc.length <= 160,
        (desc) => ({
          message: `Description must be between 25 and 160 characters long! Currently ${desc.length} characters long.`,
        })
      ),
      publishDate: z.string().transform((str) => new Date(str)),
      updateDate: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      draft: z.boolean(),
      tags: z.array(
        z.string().refine((tag) => tags.includes(tag as ValidTags), {
          message: `Invalid tag! Please choose from the following: ${tags.join(
            ", "
          )}`,
        })
      ),
    }),
});

export const collections = {
  blog: blogCollection,
};
