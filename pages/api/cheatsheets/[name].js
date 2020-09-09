import { xmlify, getCheatSheets } from "../../../src/utils";

export default (req, res) => {
  const {
    query: { name },
  } = req;

  // Zeal <= 0.6.1 assumes all feed urls have a .xml suffix
  const trimmedName = name.endsWith(".xml")
    ? name.substr(0, name.length - 4)
    : name;

  getCheatSheets(trimmedName)
    .then((list) => {
      res.setHeader("Content-Type", "application/xml");
      res.send(xmlify(list));
    })
    .catch((err) => {
      res.json(err);
    });
};
