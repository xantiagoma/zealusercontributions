import Link from "next/link";

export default async function Index() {
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center mt-8">
        <Link
          className="bg-slate-300 w-fit px-24 py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer"
          href="/docsets"
        >
          Docsets
        </Link>
        <Link
          className="bg-slate-300 w-fit px-24 py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer"
          href="/cheatsheets"
        >
          Cheat Sheets
        </Link>
        <Link
          className="bg-slate-300 w-fit px-24 py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer"
          href="/docs"
        >
          Docs
        </Link>
      </div>
    </>
  );
}
