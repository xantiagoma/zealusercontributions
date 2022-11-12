import ScrollTop from "@/components/ScrollTop";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-4">
        <p>
          Create by
          <a
            href="https://github.com/xantiagoma"
            className="ml-2 hover:text-blue-700"
          >
            <code>xantiagoma</code>
          </a>
        </p>
        <p>
          Thanks to{" "}
          <a
            href="https://kapeli.com/dash"
            target="_blank"
            className="hover:text-blue-700"
          >
            Kapeli (Dash)
          </a>{" "}
          ❤️ (CDN, Docsets, Public Feed...)
        </p>
      </footer>

      <ScrollTop />
    </>
  );
}
