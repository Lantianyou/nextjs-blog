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
const readMarkdown = _.flow([getFileName, readFile, matter]);

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
  const validPost = (fileName) =>
    fileName.includes(".md") && !drafts.includes(fileName);

  return _.chain(fileNames)
    .filter(validPost)
    .map((fileName) => fileName.replace(".md", ""))
    .value();
};

const markdownToHTML = () =>
  parseMarkdown()
    .use(remark2rehype, {
      allowDangerousHtml: true,
    })
    .use(raw)
    .use(katex)
    .use(rehypePrisma)
    .use(minify)
    .use(stringify);

export const getPostAndMetadata = async (slug: string) => {
  const { content, data } = readMarkdown(slug);
  const htmlString = await markdownToHTML().process(content).toString();

  return {
    data,
    htmlString,
  };
};

const parseMarkdown = () =>
  remark().use(math).use(emogi).use(images).use(footnotes).use(remarkSlug);

export const getPost = async (slug: string) => {
  const { content, data } = readMarkdown(slug);
  const processsedContent = await parseMarkdown().process(content).toString();

  return {
    content: processsedContent,
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
