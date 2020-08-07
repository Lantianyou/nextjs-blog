import { NextApiRequest, NextApiResponse } from "next";
import { getPostsSlug, getPostAndMetadata } from "lib/getPosts";

type T = {
  slug: string;
};

const validSlugs = getPostsSlug();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  const slug = Array.isArray(query) ? query[0] : query;

  if (!validSlugs.includes(slug)) {
    res.status(404);
  }

  let data = await getPostAndMetadata(slug);
  if (!Array.isArray(query)) {
    res.status(200).json(data);
  } else {
    console.log(query);
    res.status(200).json(data.data);
  }
};