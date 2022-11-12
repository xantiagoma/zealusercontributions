export default function Title({ id, text }: { id: string; text: string }) {
  return (
    <a href={"#" + id} className="block mt-2 mb-6 px-4 text-blue-900">
      <h2 id={id} className="text-3xl sm:pt-16">
        {text}
      </h2>
    </a>
  );
}
