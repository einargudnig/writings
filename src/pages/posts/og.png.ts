import { ImageResponse } from '@vercel/og';
import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
 
interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'blog'> };
}

export async function GET({ props }: Props) {
  const { post } = props;
 
  // using custom font files
  const Geist = fs.readFileSync(path.resolve('./fonts/Geist-Black.ttf'));
  // const DmSansReqular = fs.readFileSync(
  //   path.resolve('./fonts/DMSans-Regular.ttf'),
  // );
 
  // post cover with Image is pretty tricky for dev and build phase
  const postCover = fs.readFileSync(
    process.env.NODE_ENV === 'development'
      ? path.resolve(
          post.data.cover.src.replace(/\?.*/, '').replace('/@fs', ''),
        )
      : path.resolve(post.data.cover.src.replace('/', 'dist/')),
  );
 
  // Astro doesn't support tsx endpoints so using React-element objects
  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            // using tailwind
            tw: 'w-[200px] h-[200px] flex rounded-3xl overflow-hidden',
            children: [
              {
                type: 'img',
                props: {
                  src: postCover.buffer,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '48px',
                    fontFamily: 'DM Sans Bold',
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[40px] bottom-[40px] flex items-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-blue-600 text-3xl',
                  style: {
                    fontFamily: 'DM Sans Bold',
                  },
                  children: 'Einar Gudni',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'px-2 text-3xl',
                  style: {
                    fontSize: '30px',
                  },
                  children: '|',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-3xl',
                  children: 'writing',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22',
      style: {
        background: '#f7f8e8',
        fontFamily: 'DM Sans Regular',
      },
    },
  };
 
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Geist Black',
        data: Geist.buffer,
        style: 'normal',
      },
    ],
  });
}
 
// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('blog');
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return blogPosts.map((post: { slug: any; }) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}