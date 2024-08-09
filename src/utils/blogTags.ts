export const tags = [
  "coffee",
  "frontend",
  "backend",
  "systems",
  "hobby",
  "typescript",
  "raycast",
  "software",
  "learning",
  "travel"
] as const;

export type TagItem = {
  href: string;
};

export type ValidTags = (typeof tags)[number];

type TagMap = {
  [key in ValidTags]: TagItem;
};

export const tagMap: TagMap = {
  coffee: {
    href: "/blog/tags/coffee",
  },
  frontend: {
    href: "/blog/tags/frontend",
  },
  backend: {
    href: "/blog/tags/backend",
  },
  systems: {
    href: "/blog/tags/systems",
  },
  hobby: {
    href: "/blog/tags/hobby",
  },
  typescript: {
    href: "/blog/tags/typescript",
  },
  raycast: {
    href: "/blog/tags/raycast",
  },
  software: {
    href: "/blog/tags/software",
  },
  learning: {
    href: "/blog/tags/learning",
  },
  travel: {
    href: "/blog/tags/travel",
  },
};