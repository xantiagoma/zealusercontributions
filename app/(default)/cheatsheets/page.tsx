import CheatsheetsGrid from "@/components/CheatsheetsGrid";
import Title from "@/components/Title";

export const revalidate = 0;

export default async function Cheatsheets() {
  return (
    <>
      <Title id="cheatsheets" text="Cheat Sheets" />
      {/* @ts-expect-error Server Component */}
      <CheatsheetsGrid />
    </>
  );
}
