import Title from "@/components/Title";

export default function Docs() {
  return (
    <>
      <Title id="usage" text="Docs" />
      <div className="px-4">
        <p>Go ➡ Settings ➡ Docsets ➡ Add feed</p>
        <p>Paste Docset / Cheatsheet XML url</p>
        <img
          src="/Zeal_Download.png"
          width="960"
          height="718"
          alt="Screenshot Zeal"
        />
        <h3 className="text-xl">Other endpoints</h3>
        <ul>
          <li className="ml-4">
            <a
              href="/api/docsets"
              target="_blank"
              className="hover:text-blue-700"
            >
              /api/docsets
            </a>
          </li>
          <li className="ml-4">
            <a
              href="/api/cheatsheets"
              target="_blank"
              className="hover:text-blue-700"
            >
              /api/cheatsheets
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
