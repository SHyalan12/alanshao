"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useLanguage } from "@/components/LanguageContext";
import { content } from "@/lib/content";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const t = content[lang].projects;

  return (
    <div className="max-w-2xl mx-auto px-6 py-14 sm:py-20">
      <Link href="/projects" className="text-sm text-gray-400 hover:text-[#003278] transition-colors mb-8 inline-block">
        {t.allProjectsBack}
      </Link>

      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-1">
        {(lang === "zh" && project.title_zh) ? project.title_zh : project.title}
      </h1>
      <p className="text-xs text-gray-500 mb-6">{project.period}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs tracking-wide rounded-full border text-[#003278] border-[#003278]/30 bg-[#003278]/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-4 text-gray-500 leading-relaxed text-sm mb-10">
        {((lang === "zh" && project.detail_zh) ? project.detail_zh : project.detail)
          .split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="space-y-6 mb-10">
          {project.images.map((img, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <Image
                src={img.src}
                alt={img.caption}
                width={160}
                height={200}
                className="rounded border border-gray-100 object-cover shrink-0 w-full sm:w-auto"
              />
              <p className="text-sm text-gray-500 leading-relaxed">
                {(lang === "zh" && img.caption_zh) ? img.caption_zh : img.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-[#003278] text-white text-sm tracking-wide rounded hover:bg-[#002060] transition-colors"
          >
            {t.viewProject}
          </a>
        )}
        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
          >
            {t.tryDemo}
          </a>
        )}
      </div>
    </div>
  );
}
