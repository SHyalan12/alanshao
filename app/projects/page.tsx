import Link from "next/link";
import { sortedProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Alan Shao",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-14 sm:py-20">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">Projects</h1>
        <Link href="/#projects" className="text-sm text-gray-400 hover:text-[#003278] transition-colors">
          ← Back
        </Link>
      </div>
      <div className="space-y-4">
        {sortedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-lg hover:border-gray-300 hover:bg-white/80 transition-all group"
          >
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-[#7a0028] transition-colors">
                {project.title} →
              </h2>
              <span className="text-xs text-gray-400 ml-4 shrink-0">{project.period}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
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
    </div>
  );
}
