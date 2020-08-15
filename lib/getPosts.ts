import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import _ from "lodash";
import matter from "gray-matter";
import remark from "remark";
import emogi from "remark-emoji";
import images from "remark-images";
import remarkSlug from "remark-slug";
import math from "remark-math";
import footnotes from "remark-footnotes";

// 对Markdown进行再parse，使得markdown可以带有html元素
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
const readMarkdown = _.flow([getFileName, readFile, matter]);
const validPost = (fileName) =>
  fileName.includes(".md") && !drafts.includes(fileName);

const getPostMetadata = (slug: string): PostMetadata => {
  const { data } = readMarkdown(slug);
  const meta = {
    slug,
    ...data,
  };

  return meta as PostMetadata;
};

export const getPostsMetadata = (): PostMetadata[] =>
  _.map(getPostsSlug(), getPostMetadata);

export const getPostsSlug = () => {
  const fileNames = readdirSync(postsDir);

  return _.chain(fileNames)
    .filter(validPost)
    .map((fileName) => fileName.slice(0, -3))
    .value();
};

export const getPost = async (slug: string) => {
  const { content, data } = readMarkdown(slug);
  const processsedContent = await remark()
    .use(math)
    .use(emogi)
    .use(images)
    .use(footnotes)
    .use(remarkSlug)
    .process(content);

  return {
    content: processsedContent.toString(),
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
