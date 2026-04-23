import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { getHighlightedProjects } from "@/lib/projects";

const highlightedProjects = getHighlightedProjects();

const contactLinks = [
  { label: "GitHub", href: "https://github.com/SHyalan12", display: "github.com/SHyalan12" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hongyaoshao/", display: "linkedin.com/in/hongyaoshao" },
  { label: "Email", href: "mailto:hongyaoshao@gmail.com", display: "hongyaoshao@gmail.com", display2: "shyala@bu.edu", href2: "mailto:shyala@bu.edu" },
];

const skills = ["Python", "SQL", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Rust", "Tableau"];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-gray-900 mb-1 leading-tight">
          <Typewriter text="👋  Hi there! I'm Alan" />
        </h1>
        <p className="text-sm text-gray-400 mb-5">Hongyao Shao</p>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-md">
          Data Science & Business student at Boston University.
          I work at the intersection of data, technology, and business.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-[#003278] text-white text-sm tracking-wide rounded hover:bg-[#002060] transition-colors"
          >
            View my work
          </a>
          <a
            href="/Alan Shao Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">About</h2>
        <div className="space-y-4 text-gray-500 leading-relaxed mb-10">
          <p>
            I&apos;m a third-year student at Boston University pursuing a B.S. in Data Science and a
            B.S.B.A. in Business Administration & Management with a Finance concentration. I&apos;m passionate about turning data into insights and decisions, whether that&apos;s building
            ML pipelines, analyzing financial markets, or visualizing complex datasets.
          </p>
          <p>
            Technical Project Manager at BU Spark!, and previously an analyst in investment and Web3 contexts.
            I enjoy building side projects that sit at the edge of what I know.
          </p>
          <p>
            Outside of work, I&apos;m a travel enthusiast always chasing the next destination, and a big football fan :) Visca Barça !
          </p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">Education</p>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Boston University</p>
              <p className="text-sm text-gray-400">B.S. Data Science</p>
              <p className="text-sm text-gray-400">B.S.B.A. Business Administration & Management Finance Concentration</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Expected May 2027</p>
            </div>
          </div>
        </div>

        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-3">Skills</p>
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

      {/* Projects */}
      <section id="projects" className="py-14 sm:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">Project Highlights</h2>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-[#003278] transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {highlightedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block p-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-lg hover:border-gray-300 hover:bg-white/80 transition-all group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-[#7a0028] transition-colors">
                  {project.title} →
                </h3>
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
      </section>

      {/* Beyond the Screen */}
      <section id="life" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Beyond the Screen</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Life beyond the screen — travels, football, and everything in between.
        </p>
        <Link
          href="/life"
          className="inline-block px-6 py-2.5 text-gray-600 text-sm tracking-wide rounded border border-gray-200 hover:border-[#003278] hover:text-[#003278] transition-colors"
        >
          Take a look →
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        <ul className="space-y-5">
          {contactLinks.map((link) => (
            <li key={link.label} className="flex items-center gap-6">
              <span className="w-20 text-xs font-medium text-gray-300 tracking-widest uppercase">{link.label}</span>
              <div className="flex flex-wrap gap-x-2 text-sm text-gray-600">
                <a
                  href={link.href}
                  className="hover:text-gray-900 transition-colors"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {link.display}
                </a>
                {"href2" in link && (
                  <>
                    <span className="text-gray-300 mx-1">|</span>
                    <a
                      href={(link as typeof link & { href2: string }).href2}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {(link as typeof link & { display2: string }).display2}
                    </a>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
