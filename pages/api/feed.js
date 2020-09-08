import { getDocsets, xmlify } from "../../src/utils";

export default (req, res) => {
  getDocsets().then((list) => {
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xmlify(list));
    // xmlify(list)
  });
};
