import { NextApiRequest, NextApiResponse } from "next";

import { getDocsets } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await getDocsets();
  res.status(200).json(result);
}
