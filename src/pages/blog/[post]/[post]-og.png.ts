import type { APIRoute, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import matter from "gray-matter";
import fs from "node:fs/promises";
import OG from "../../components/opengraph/OG";
import { PNG } from "../../components/opengraph/createImage";

export async function getStaticPaths() {
  const blog = await getCollection("blog");
  const blogData = await getBlogFrontmatterCollection();
  return blog.map((post) => {
    
    return {
      params: {
        post: post.slug,
      },
      props: {
        title: post.data.title
      },
    };
  });
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ props }) {
  const ogImage = "../../../images/opengraph/og.png"
  const { title } = props as Props;
  const png = await PNG(OG(title, ogImage));
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

const getBlogFrontmatterCollection = async () => {
  const contentDir = "src/content/blog";
  const files = await fs.readdir(contentDir);
  const mdx = files.filter((file) => file.endsWith(".mdx"));
  const frontmatter = mdx.map(async (file) => {
    const content = await fs.readFile(`${contentDir}/${file}`, "utf-8");
    const { data } = matter(content);
    return data;
  });
  return Promise.all(frontmatter);
};