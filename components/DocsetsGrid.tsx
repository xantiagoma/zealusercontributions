import Card from "./Card";
import Grid from "./Grid";
import { getDocsets } from "@/utils";

export default async function DocsetsGrid() {
  const docsets = await getDocsets();

  return (
    <Grid>
      {docsets.map((e) => (
        <Card {...e} key={"docsets-" + e.name} />
      ))}
    </Grid>
  );
}
