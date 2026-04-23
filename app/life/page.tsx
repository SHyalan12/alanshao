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
      <p className="text-gray-500 text-sm leading-relaxed mb-14">
        When I&apos;m not building things, I&apos;m usually somewhere new or watching football. Here&apos;s a bit of that side.
      </p>

      {/* Travel */}
      <section className="mb-14">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">Travelling</h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-6">Places I&apos;ve been</p>
        <div className="-mx-6 sm:-mx-16 md:-mx-32">
          <WorldMapClient />
        </div>
      </section>

      {/* Football */}
      <section className="mb-14">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Football</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lifelong FC Barcelona fan. Visca Barça !
        </p>
      </section>
    </div>
  );
}
