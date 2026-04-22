"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-8 py-5 flex items-start justify-between">
        <div>
          <a href="#" className="font-serif text-2xl font-bold text-gray-900 leading-tight hover:text-[#003278] transition-colors">
            Alan Shao
          </a>
          <p className="text-xs text-gray-400 mt-0.5">Data Science & Finance · Boston University</p>
        </div>
        <ul className="flex gap-8 mt-1">
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
