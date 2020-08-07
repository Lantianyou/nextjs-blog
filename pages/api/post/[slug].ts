import { NextApiRequest, NextApiResponse } from "next";
import { getPostsSlug, getPostAndMetadata } from "lib/getPosts";

type T = {
  slug: string;
};

const validSlugs = getPostsSlug();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as T;
  if (!validSlugs.includes(slug)) {
    res.status(404);
  }

  const postAndMetadata = await getPostAndMetadata(slug);
  res.status(200).send(postAndMetadata);
};
