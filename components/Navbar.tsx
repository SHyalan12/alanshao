"use client";

const links = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/life", label: "Life" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <a href="#" className="font-serif text-xl font-bold text-gray-900 leading-tight hover:text-[#003278] transition-colors">
            Alan Shao
          </a>
          <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">Data Science & Finance · Boston University</p>
        </div>
        <ul className="flex gap-5 sm:gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-gray-500 hover:text-[#7a0028] tracking-wide transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
