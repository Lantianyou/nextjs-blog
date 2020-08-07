import { NextApiRequest, NextApiResponse } from "next";
import { getPostsSlug, getPostAndMetadata, PostMetadata } from "lib/getPosts";

type T = {
  slug: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as T;

  const postAndMetadata = await getPostAndMetadata(slug);
  res.status(200).send(postAndMetadata);
};
