export default function Title({ id, text }: { id: string; text: string }) {
  return (
    <h2 id={id} className="text-3xl p-4 my-4">
      {text}
    </h2>
  );
}
