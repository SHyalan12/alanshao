"use client";

import Link from "next/link";
import WorldMapClient from "@/components/WorldMapClient";
import { useLanguage } from "@/components/LanguageContext";
import { content } from "@/lib/content";

export default function LifePageClient() {
  const { lang } = useLanguage();
  const t = content[lang].life;

  return (
    <div className="max-w-2xl mx-auto px-6 py-14 sm:py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{t.pageHeading}</h1>
        <Link href="/#life" className="text-sm text-gray-400 hover:text-[#003278] transition-colors">
          {t.pageBack}
        </Link>
      </div>
      {/* Travel */}
      <section className="mb-14">
        <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">{t.travelHeading}</h2>
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">{t.travelSubtitle}</p>
        <div className="-mx-6 sm:-mx-16 md:-mx-32">
          <WorldMapClient />
        </div>
        <p className="text-sm text-gray-400 mt-6 italic text-center">{t.wip}</p>
      </section>
    </div>
  );
}
