import Card from "./Card";
import Grid from "./Grid";
import { getCheatSheets } from "@/utils";

export default async function CheatsheetsGrid() {
  const cheatsheets = await getCheatSheets();
  return (
    <Grid>
      {cheatsheets.map((e) => (
        <Card {...e} cheatsheet key={"cheatsheets-" + e.name} />
      ))}
    </Grid>
  );
}
