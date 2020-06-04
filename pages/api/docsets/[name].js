import { getDocsets, xmlify } from "../../../src/utils";

export default (req, res) => {
  const {
    query: { name },
  } = req;

  getDocsets(name)
    .then((list) => {
      res.send(xmlify(list));
    })
    .catch((err) => {
      res.json(err);
    });
};
