import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import minify from "rehype-preset-minify";
import matter from "gray-matter";
import remark from "remark";
import emogi from "remark-emoji";
import images from "remark-images";
import remark2rehype from "remark-rehype";
import remarkSlug from "remark-slug";
import math from "remark-math";
import footnotes from "remark-footnotes";
import katex from "rehype-katex";
import stringify from "rehype-stringify";
import raw from "rehype-raw";
import rehypePrisma from "@mapbox/rehype-prism";

// 对Markdown进行再parse，使得markdown可以带有html元素
const drafts = [
  "get-big-fast.md",
  "the-other-side.md",
  "a-case-for-china.md",
  "think-different.md",
];
export const postsDir = join(process.cwd(), "posts");

const getPostMetadata = (slug: string): PostMetadata => {
  const fileDir = join(postsDir, slug + ".md");
  const markdownWithMetaData = readFileSync(fileDir, "utf-8").toString();
  const { data } = matter(markdownWithMetaData);

  const meta = {
    slug,
    ...data,
  };

  return meta as PostMetadata;
};

export const getPostsMetadata = (): PostMetadata[] => {
  const posts = getPostsSlug();
  return posts.map((post) => getPostMetadata(post));
};

export const getPostsSlug = () => {
  const fileNames = readdirSync(postsDir);
  return fileNames
    .filter(
      (fileName) => fileName.includes(".md") && !drafts.includes(fileName)
    )
    .map((fileName) => fileName.replace(".md", ""));
};

export const getPostAndMetadata = async (slug: string) => {
  const fileDir = join(postsDir, slug + ".md");
  const markdownWithMetaData = readFileSync(fileDir, "utf-8").toString();
  const parsedMarkdown = matter(markdownWithMetaData);

  const processedContent = await remark()
    .use(math)
    .use(emogi)
    .use(images)
    .use(footnotes)
    .use(remarkSlug)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(katex)
    .use(rehypePrisma)
    .use(minify)
    .use(stringify)
    .process(parsedMarkdown.content);

  const htmlString = processedContent.toString();

  // appendFileSync(`${postsDir}/${slug}.html`, htmlString)

  return {
    data: parsedMarkdown.data,
    htmlString,
  };
};

export const getPost = async (slug: string) => {
  const fileDir = join(postsDir, slug + ".md");
  const markdownWithMetaData = readFileSync(fileDir, "utf-8").toString();
  const parsedMarkdown = matter(markdownWithMetaData);

  const processsedContent = await remark()
    .use(math)
    .use(emogi)
    .use(images)
    .use(footnotes)
    .use(remarkSlug)
    .process(parsedMarkdown.content);

  return {
    content: processsedContent.toString(),
    data: parsedMarkdown.data,
  };
};

export interface PostMetadata {
  slug: string;
  title: string;
  cover: Cover;
  date: string;
  author: Author;
  excerpt: string;
}

export interface Author {
  name: string;
  picture: string;
}

export interface Cover {
  image: string;
  description: string;
}
