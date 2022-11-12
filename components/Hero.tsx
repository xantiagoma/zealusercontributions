import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col text-center justify-center content-center">
      <Link href="/" className="inline-block w-fit mx-auto">
        <img
          src="/favicon-192.png"
          alt="Zeal Logo"
          className="logo w-48 self-center p-8 inline"
        />
        <span className="sr-only">Home</span>
      </Link>
      <h1>
        <span className="block text-2xl">Welcome to</span>
        <span className="block text-4xl">Zeal User Contributions</span>
      </h1>
      <p className="text-sm">
        Non-Official Zeal User Contributions (& Cheat Sheets) Repository
      </p>
    </div>
  );
}
