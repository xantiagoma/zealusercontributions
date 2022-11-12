import { NextApiRequest, NextApiResponse } from "next";
import { getDocsets, xmlify } from "@/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { name: _name },
  } = req;

  const name = typeof _name === "string" ? _name : _name[0];

  const isJson = name.endsWith(".json");
  const trimmedName: string = isJson
    ? name.replace(".json", "")
    : name.replace(".xml", "");

  const list = await getDocsets(trimmedName);
  if (!isJson) {
    res.setHeader("Content-Type", "application/xml");
  }
  const result = isJson ? list?.at(0) : xmlify(list);
  res.send(result);
}
