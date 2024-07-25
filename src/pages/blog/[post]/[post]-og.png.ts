import type { APIRoute, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import fs from "fs/promises";
import matter from "graymatter";

export async function getStaticPaths() {
  const blog = await getCollection('blog')
  const blogData = await getBlogFrontmatterCollection()
  return blog.map((post) => {
    const postData = blogData.find((data) => data.title === post.data.title)
    return {
					params: {
						post: post.slug,
					},
					props: {
						title: post.data.title,
					},
				}
  })

  type Props = InferGetStaticPropsType<typeof getStaticPaths>

  export const GET: APIRoute = async function get({ props }) {
    const { title } = props as Props;
    conts png = await PNG(OG(title));
    return new Response(png, {
      headers: {
        "Content-Type": "image/png",
      }
    });
  }
}

const getBlogFrontmatterCollection = async () => {
  const contentDir = "src/content/blog"
  const files = await fs.readdir(contentDir)

  // regular expression to match both .md and .mdx files
  const markdownFiles = files.filter((file) => /\.(md|mdx)$/.test(file));

  // process each file and extract frontmatter
  const frontMatter = await Promise.all(
    markdownFiles.map(async (file) => {
      const content = await fs.readFile(`${contentDir}/${file}`, "utf-8");
      const { data } = matter(content)
      return data
    })
  )

  return frontMatter
}