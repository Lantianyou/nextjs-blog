import { NextApiRequest, NextApiResponse } from "next";
import { getPostsMetadata } from "lib/getPosts";

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
