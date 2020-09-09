const isUndefined = (val) => val === undefined;

const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

const CDNs = ["", "sanfrancisco.", "newyork.", "london.", "frankfurt."];

const truncate = (input, length) => {
  if (input.length > length) return input.substring(0, length) + "...";
  else return input;
};

const getDocsets = async (filterName) => {
  const response = await fetch(
    `http://kapeli.com/feeds/zzz/user_contributed/build/index.json`
  );

  const data = await response.json();
  //   return data;

  let docsets;

  if (isUndefined(filterName) || isEmpty(filterName)) {
    docsets = data.docsets;
  } else {
    let t = {};
    if (
      isUndefined(data.docsets[filterName]) ||
      isEmpty(data.docsets[filterName])
    ) {
      t[filterName] = {};
    } else {
      t[filterName] = data.docsets[filterName];
    }
    docsets = t;
  }

  let list = Object.keys(docsets).map((key) => {
    const val = docsets[key];
    let object = { ...val };
    object.name = key;
    object.urls = CDNs.map((city) => {
      return `http://${city}kapeli.com/feeds/zzz/user_contributed/build/${key}/${val.archive}`;
    });

    return object;
  });

  return list;
};

const xmlify = (list) => {
  return (list || [])
    .map((docset) => {
      let urls = (docset.urls || [])
        .map((url) => {
          return `    <url>${url}</url>`;
        })
        .join("\n");
      let other = (docset.specific_versions || [])
        .map((v) => {
          return `        <version><name>${v.version}</name></version>`;
        })
        .join("\n");

      return `\
        <entry>
          <name>${docset.name}</name>
          <version>${docset.version}</version>
        ${urls}
          <other-versions>
        ${other}
          </other-versions>
        </entry>`;
    })
    .join("\n");
};

export { getDocsets, truncate, xmlify };
