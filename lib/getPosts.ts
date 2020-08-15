import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import _ from "lodash";
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

const getFileName = (slug) => join(postsDir, slug + ".md");
const readFile = (fileName) => readFileSync(fileName, "utf-8").toString();
const readMarkdown = (slug) => _.flow([getFileName, readFile, matter])(slug);

const getPostMetadata = (slug: string): PostMetadata => {
  const { data } = readMarkdown(slug);
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

const markdownToHTML = async (parsedMarkdown) => {
  const t = await parseMarkdown();
  return t
    .use(remark2rehype, {
      allowDangerousHtml: true,
    })
    .use(raw)
    .use(katex)
    .use(rehypePrisma)
    .use(minify)
    .use(stringify)
    .process(parsedMarkdown.content)
    .toString();
};

export const getPostAndMetadata = async (slug: string) => {
  const parsedMarkdown = readMarkdown(slug);
  const htmlString = markdownToHTML(parsedMarkdown);

  return {
    data: parsedMarkdown.data,
    htmlString,
  };
};
const parseMarkdown = async () =>
  await remark()
    .use(math)
    .use(emogi)
    .use(images)
    .use(footnotes)
    .use(remarkSlug);

const processMarkdown = async (parsedMarkdown) => {
  const t = await parseMarkdown();
  return t.process(parsedMarkdown.content);
};

export const getPost = async (slug: string) => {
  const parsedMarkdown = readMarkdown(slug);
  const processsedContent = await processMarkdown(parsedMarkdown);

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
