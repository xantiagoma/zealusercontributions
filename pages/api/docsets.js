import { getDocsets } from "../../src/utils";
export default (req, res) => {
  getDocsets().then((d) => res.status(200).json(d));
};
