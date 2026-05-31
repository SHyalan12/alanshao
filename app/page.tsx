"use client";

import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { getHighlightedProjects } from "@/lib/projects";
import { useLanguage } from "@/components/LanguageContext";
import { content } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";

const highlightedProjects = getHighlightedProjects();

const contactLinks = [
  { key: "github" as const, href: "https://github.com/SHyalan12", display: "github.com/SHyalan12" },
  { key: "linkedin" as const, href: "https://www.linkedin.com/in/hongyaoshao/", display: "linkedin.com/in/hongyaoshao" },
  { key: "email" as const, href: "mailto:hongyaoshao@gmail.com", display: "hongyaoshao@gmail.com", display2: "shyala@bu.edu", href2: "mailto:shyala@bu.edu" },
];

const skills = ["Python", "SQL", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Rust", "Tableau"];

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="max-w-2xl mx-auto px-6">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gray-900 mb-1 leading-tight">
          <Typewriter key={lang} text={t.hero.greeting} />
        </h1>
        <p className="text-sm text-gray-400 mb-5">{t.hero.subtitle}</p>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
          {t.hero.bio}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-[#003278] text-white text-sm tracking-wide rounded hover:bg-[#002060] transition-colors"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="/Alan Shao Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
          >
            {t.hero.resume}
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
          >
            {t.hero.getInTouch}
          </a>
        </div>
      </section>

      {/* About */}
      <ScrollReveal>
      <section id="about" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{t.about.heading}</h2>
        <div className="space-y-4 text-gray-500 leading-relaxed mb-10">
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
          <p>{t.about.bio3}</p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">{t.about.educationLabel}</p>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">{t.about.school}</p>
              <p className="text-sm text-gray-400">{t.about.degree1}</p>
              <p className="text-sm text-gray-400">{t.about.degree2}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">{t.about.expectedGrad}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">{t.about.researchLabel}</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            {t.about.researchText}
          </p>
        </div>

        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">{t.about.skillsLabel}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs tracking-wide rounded-full border text-[#003278] border-[#003278]/30 bg-[#003278]/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* Projects */}
      <ScrollReveal>
      <section id="projects" className="py-14 sm:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">{t.projects.highlightsHeading}</h2>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-[#003278] transition-colors">
            {t.projects.viewAll}
          </Link>
        </div>
        <div className="space-y-4">
          {highlightedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block p-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-lg hover:border-gray-300 hover:bg-white/80 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-0.5 sm:gap-0">
                <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-[#7a0028] transition-colors">
                  {(lang === "zh" && project.title_zh) ? project.title_zh : project.title} →
                </h3>
                <span className="text-xs text-gray-400 sm:ml-4 shrink-0">{project.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {(lang === "zh" && project.description_zh) ? project.description_zh : project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs text-gray-400 border border-gray-100 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* Beyond the Screen */}
      <ScrollReveal>
      <section id="life" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t.life.sectionHeading}</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {t.life.sectionDesc}
        </p>
        <Link
          href="/life"
          className="inline-block px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
        >
          {t.life.takeLook}
        </Link>
      </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
      <section id="contact" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">{t.contact.heading}</h2>
        <ul className="space-y-5">
          {contactLinks.map((link) => (
            <li key={link.key} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
              <span className="w-20 text-xs font-medium text-gray-300 tracking-widest uppercase shrink-0">
                {t.contact[link.key]}
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-600">
                <a
                  href={link.href}
                  className="hover:text-gray-900 transition-colors break-all"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.display}
                </a>
                {"href2" in link && (
                  <>
                    <span className="text-gray-300">|</span>
                    <a href={link.href2} className="hover:text-gray-900 transition-colors break-all">
                      {link.display2}
                    </a>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
      </ScrollReveal>

    </div>
  );
}
