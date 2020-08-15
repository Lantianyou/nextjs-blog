import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { flow, map, chain } from "lodash";
import matter from "gray-matter";
import remark from "remark";
import emogi from "remark-emoji";
import images from "remark-images";
import remarkSlug from "remark-slug";
import math from "remark-math";
import footnotes from "remark-footnotes";

// 全局变量
const drafts = [
  "get-big-fast.md",
  "the-other-side.md",
  "a-case-for-china.md",
  "think-different.md",
];
export const postsDir = join(process.cwd(), "posts");

// 函数
const getFileName = (slug) => join(postsDir, slug + ".md");

const readFile = (fileName) => readFileSync(fileName, "utf-8").toString();

const readMarkdown = flow([getFileName, readFile, matter]);

const getPostMetadata = (slug: string): PostMetadata => {
  const { data } = readMarkdown(slug);
  return {
    slug,
    ...data,
  };
};

export const getPostsMetadata = (): PostMetadata[] =>
  map(getPostsSlug(), getPostMetadata);

const validPost = (fileName) =>
  fileName.endsWith(".md") && !drafts.includes(fileName);

export const getPostsSlug = () =>
  chain(readdirSync(postsDir))
    .filter(validPost)
    .map((f) => f.slice(0, -3))
    .value();

export const getPost = async (slug: string) => {
  // tslint:disable-next-line: prefer-const
  let { content, data } = readMarkdown(slug);
  content = await remark()
    .use(math)
    .use(emogi)
    .use(images)
    .use(footnotes)
    .use(remarkSlug)
    .process(content);
  content = content.toString();

  return {
    content,
    data,
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
