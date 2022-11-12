import DocsetsGrid from "@/components/DocsetsGrid";
import Title from "@/components/Title";

export const revalidate = 0;

export default async function Docsets() {
  return (
    <>
      <Title id="docsets" text="Docsets" />
      {/* @ts-expect-error Server Component */}
      <DocsetsGrid />
    </>
  );
}
