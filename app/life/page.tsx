import Link from "next/link";
import WorldMapClient from "@/components/WorldMapClient";

export const metadata = {
  title: "Beyond the Screen — Alan Shao",
};

export default function LifePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-14 sm:py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">Beyond the Screen</h1>
        <Link href="/#life" className="text-sm text-gray-400 hover:text-[#003278] transition-colors">
          ← Back
        </Link>
      </div>
      {/* Travel */}
      <section className="mb-14">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">Travelling</h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Places I&apos;ve been</p>
        <div className="-mx-6 sm:-mx-16 md:-mx-32">
          <WorldMapClient />
        </div>
        <p className="text-sm text-gray-400 mt-6 italic text-center">This page is still taking shape, more of life beyond the screen coming soon...</p>
      </section>
    </div>
  );
}
