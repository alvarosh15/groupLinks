import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <Link href="/1">Vamos</Link>
    </div>
  );
}
