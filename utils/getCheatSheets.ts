import { CDNs } from "./constants";
import { isEmpty } from "./isEmpty";
import { isUndefined } from "./isUndefined";
import { parse } from "json5";

export async function getCheatSheets(filterName?: string) {
  const response = await fetch(
    `https://kapeli.com/feeds/zzz/cheatsheets/cheat.json`
  );
  const text = await response.text();
  const data = parse(text).cheatsheets || {};

  let cheatsheets = data;

  if (!isUndefined(filterName) && !isEmpty(filterName)) {
    let t = {};
    if (isUndefined(data[filterName]) || isEmpty(data[filterName])) {
      t[filterName] = {};
    } else {
      t[filterName] = data[filterName];
    }
    cheatsheets = t;
  }

  const list = Object.keys(cheatsheets).map((key) => {
    const val = cheatsheets[key];
    const object = { ...val };
    object.name = key;
    object.archive = `${key}.tgz`;
    object.urls = CDNs.map((city) => {
      return `https://${city}kapeli.com/feeds/zzz/cheatsheets/${key}.tgz`;
    });

    return object;
  });

  return list;
}
