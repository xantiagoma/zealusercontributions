import { getCheatSheets } from "../../src/utils";
export default (req, res) => {
  getCheatSheets().then((d) => res.status(200).json(d));
};
