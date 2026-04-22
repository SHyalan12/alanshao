import Typewriter from "@/components/Typewriter";

const projects = [
  {
    title: "Progressive Mass: Home Rule Petition",
    description:
      "End-to-end data pipeline using the MA Legislature Public API to collect and structure 10 years of petition data. Built a refiling fatigue analysis dashboard to quantify repeated filings and their impact on success rates.",
    tags: ["Python", "SQL", "Data Pipeline", "API"],
    href: "https://www.linkedin.com/in/hongyaoshao/overlay/Project/1195618083/treasury/?profileId=ACoAAFJYEjgBric1E2h3quoOjgbC0F9Rw06BwSU",
  },
  {
    title: "Emotion Recognition from Audio",
    description:
      "Python/TensorFlow pipeline that transforms raw audio into mel-spectrograms for CNN-based emotion classification. Improved F1 score by 50% over baseline through structured hyperparameter sweeps on speech and song models.",
    tags: ["Python", "TensorFlow", "CNN", "Librosa"],
    href: "https://github.com/SHyalan12/Emotion-Recognition-from-Audio-Using-CNN-Based-Spectrogram",
  },
  {
    title: "LLM Article Summarizer",
    description:
      "LLM-powered article analyzer exploring how prompt design influences model outputs. Demonstrates the impact of prompt engineering on summarization quality and response variability.",
    tags: ["Python", "LLM", "NLP", "Prompt Engineering"],
    href: "https://github.com/SHyalan12/article_summarizer",
  },
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/SHyalan12", display: "github.com/SHyalan12" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hongyaoshao/", display: "linkedin.com/in/hongyaoshao" },
  { label: "Email", href: "mailto:hongyaoshao@gmail.com", display: "hongyaoshao@gmail.com" },
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
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-lg hover:border-gray-300 hover:bg-white/80 transition-all group"
            >
              <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-[#7a0028] transition-colors mb-1">
                {project.title} →
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs text-gray-400 border border-gray-100 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        <ul className="space-y-5">
          {contactLinks.map(({ label, href, display }) => (
            <li key={label} className="flex items-center gap-6">
              <span className="w-20 text-xs font-medium text-gray-300 tracking-widest uppercase">{label}</span>
              <a
                href={href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {display}
              </a>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
