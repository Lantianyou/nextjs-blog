import { NextApiRequest, NextApiResponse } from "next";
import { join } from "path";
import matter from "gray-matter";
import { readFileSync, readdirSync } from "fs";

const drafts = [
  "get-big-fast.md",
  "the-other-side.md",
  "a-case-for-china.md",
  "test.md",
  "think-different.md",
];

export const postsDir = join(process.cwd(), "posts");

const getPostMetadata = (slug: string): PostMetadata => {
  const fileDir = join(postsDir, slug + ".md");
  const markdownWithMetaData = readFileSync(fileDir, "utf-8").toString();
  const { data } = matter(markdownWithMetaData);

  let meta = {
    slug,
    ...data,
  };

  return meta as PostMetadata;
};

const getPostsSlug = () => {
  const fileNames = readdirSync(postsDir);
  return fileNames
    .filter(
      (fileName) => fileName.includes(".md") && !drafts.includes(fileName)
    )
    .map((fileName) => fileName.replace(".md", ""));
};

const getPostsMetadata = (): PostMetadata[] => {
  const posts = getPostsSlug();
  return posts.map((post) => getPostMetadata(post));
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const postsMetadata = getPostsMetadata();
  postsMetadata.sort((a, b) => (a.date > b.date ? -1 : 1));
  res.status(200).json({ posts: postsMetadata });
};

export interface PostMetadata {
  slug: string;
  title: string;
  cover: cover;
  date: string;
  author: author;
  excerpt: string;
}

export interface author {
  name: string;
  picture: string;
}

export interface cover {
  image: string;
  description: string;
}
