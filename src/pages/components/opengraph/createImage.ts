import type { JSX } from "astro/jsx-runtime";
import fs from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";

export async function SVG(component: JSX.Element) {
  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Geist",
        data: await fs.readFile(
          "./src/images/opengraph/fonts/Geist-Regular.ttf",
        ),
        weight: 400,
      },
      {
        name: "Geist",
        data: await fs.readFile(
          "./src/images/opengraph/fonts/Geist-Bold.ttf",
        ),
        weight: 800,
      },
    ],
  });
}

export async function PNG(component: JSX.Element) {
  return await sharp(Buffer.from(await SVG(component)))
    .png()
    .toBuffer();
}