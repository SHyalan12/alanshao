"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { content } from "@/lib/content";
import type { Lang } from "@/lib/content";

function LanguageToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative flex items-center bg-gray-100 rounded-full p-0.5 text-xs shrink-0">
      <div
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] bg-[#003278] rounded-full transition-transform duration-200 ease-in-out"
        style={{ transform: lang === "en" ? "translateX(2px)" : "translateX(calc(100% + 2px))" }}
      />
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-200 ${lang === "en" ? "text-white" : "text-gray-400 hover:text-gray-500"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`relative z-10 px-3 py-1 rounded-full transition-colors duration-200 ${lang === "zh" ? "text-white" : "text-gray-400 hover:text-gray-500"}`}
      >
        中
      </button>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/#about", label: t.about },
    { href: "/projects", label: t.projects },
    { href: "/life", label: t.life },
    { href: "/#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/" className="font-serif text-xl font-bold text-gray-900 leading-tight hover:text-[#003278] transition-colors">
            {t.logo}
          </a>
          <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{t.subtitle}</p>
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-sm text-gray-500 hover:text-[#7a0028] tracking-wide transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm px-6 py-4">
          <ul className="space-y-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-gray-500 hover:text-[#7a0028] tracking-wide transition-colors py-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
