import { NextApiRequest, NextApiResponse } from "next";

export function hi(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "hi" });
}

