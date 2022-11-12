export function xmlify(list) {
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
    .join("\n")
    .trim();
}
