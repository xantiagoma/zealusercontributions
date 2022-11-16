import { FcBookmark, FcDocument, FcInfo } from "react-icons/fc";

import Link from "next/link";

export default async function Index() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-evenly mt-8 gap-4 w-full">
        <Link
          className="bg-slate-300 w-fit px-16 py-8 lg:px-24 lg:py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer flex items-center justify-center gap-1"
          href="/docsets"
        >
          <FcDocument className="text-4xl" />
          Docsets
        </Link>
        <Link
          className="bg-slate-300 w-fit px-16 py-8 lg:px-24 lg:py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap"
          href="/cheatsheets"
        >
          <FcBookmark className="text-4xl" />
          Cheat Sheets
        </Link>
        <Link
          className="bg-slate-300 w-fit px-16 py-8 lg:px-24 lg:py-12 rounded-lg hover:bg-slate-400 transition-colors cursor-pointer flex items-center justify-center gap-1"
          href="/docs"
        >
          <FcInfo className="text-4xl" />
          Docs
        </Link>
      </div>
    </>
  );
}
