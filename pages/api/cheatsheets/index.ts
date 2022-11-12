import { NextApiRequest, NextApiResponse } from "next";

import { getCheatSheets } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await getCheatSheets();
  res.status(200).json(result);
}
