import { getDocsets } from "../../src/utils";
export default (req, res) => {
  res.setHeader("Content-Type", "application/xml");
  getDocsets().then((d) => res.status(200).json(d));
};
