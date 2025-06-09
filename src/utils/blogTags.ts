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
  "travel",
  "mobile",
  "dx",
  "neovim",
  "keyboard",
  "review",
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
    href: "/tags/coffee",
  },
  frontend: {
    href: "/tags/frontend",
  },
  backend: {
    href: "/tags/backend",
  },
  systems: {
    href: "/tags/systems",
  },
  hobby: {
    href: "/tags/hobby",
  },
  typescript: {
    href: "/tags/typescript",
  },
  raycast: {
    href: "/tags/raycast",
  },
  software: {
    href: "/tags/software",
  },
  learning: {
    href: "/tags/learning",
  },
  travel: {
    href: "/tags/travel",
  },
  mobile: {
    href: "/tags/mobile",
  },
  dx: {
    href: "/tags/dx",
  },
  neovim: {
    href: "/tags/neovim",
  },
  keyboard: {
    href: "/tags/keyboard",
  },
  review: {
    href: "/tags/review",
  },
};
