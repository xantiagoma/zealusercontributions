import { FcBookmark, FcDocument, FcInfo } from "react-icons/fc";

import Link from "next/link";

export default async function Index() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-evenly mt-8 gap-4 w-full">
        <Link
          className="min-w-[16rem] bg-slate-300 hover:bg-slate-900 hover:text-slate-100 w-fit px-16 py-8 lg:px-24 lg:py-12 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 text-2xl xl:text-3xl"
          href="/docsets"
        >
          <FcDocument className="text-4xl" />
          Docsets
        </Link>
        <Link
          className="min-w-[16rem] bg-slate-300 hover:bg-slate-900 hover:text-slate-100 w-fit px-8 py-8 lg:px-24 lg:py-12 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 whitespace-nowrap text-2xl xl:text-3xl"
          href="/cheatsheets"
        >
          <FcBookmark className="text-4xl" />
          Cheat Sheets
        </Link>
        <Link
          className="min-w-[16rem] bg-slate-300 hover:bg-slate-900 hover:text-slate-100 w-fit px-16 py-8 lg:px-24 lg:py-12 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 text-2xl xl:text-3xl"
          href="/docs"
        >
          <FcInfo className="text-4xl" />
          Docs
        </Link>
      </div>
    </>
  );
}
