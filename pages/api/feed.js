import { getDocsets, xmlify } from "../../src/utils";

export default (req, res) => {
  getDocsets().then((list) => {
    // res.set("Content-Type", "text/xml");
    res.status(200).send(xmlify(list));
    // xmlify(list)
  });
};
