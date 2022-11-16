import { getCheatSheets, getDocsets } from "@/utils";

import Card from "@/components/Card";
import Fuse from "fuse.js";
import Grid from "@/components/Grid";
import Title from "@/components/Title";

export const revalidate = 0;

export default async function Search({
  searchParams,
}: {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
}) {
  const { q } = searchParams;

  const query = q?.trim();

  if (!query) {
    return <>Start Searching...</>;
  }

  const _docsets = await getDocsets();
  const _cheatsheets = await getCheatSheets();

  const options: Fuse.IFuseOptions<any> = {
    keys: ["name"],
    minMatchCharLength: 2,
  };
  const docsets = new Fuse(_docsets, options).search(query).map((e) => e.item);
  const cheatsheets = new Fuse(_cheatsheets, options)
    .search(query)
    .map((e) => e.item);

  return (
    <>
      <Title text="Docsets" id="#docsets" />
      <Grid>
        {docsets.map((e) => (
          <Card {...e} key={"docsets-" + e.name} />
        ))}
      </Grid>
      <Title text="Cheatsheets" id="#cheatsheets" />
      <Grid>
        {cheatsheets.map((e) => (
          <Card {...e} cheatsheet key={"docsets-" + e.name} />
        ))}
      </Grid>
    </>
  );
}
