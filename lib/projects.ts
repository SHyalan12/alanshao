export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  detail: string;
  tags: string[];
  href: string;
  highlight: boolean;
  period: string;
  completedAt: string; // YYYY-MM for sorting
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "progressive-mass",
    title: "Progressive Mass: Home Rule Petition",
    description:
      "End-to-end data pipeline using the MA Legislature Public API to collect and structure 10 years of petition data. Built a refiling fatigue analysis dashboard to quantify repeated filings and their impact on success rates.",
    detail: `Built an end-to-end data pipeline using the Massachusetts Legislature Public API to collect and structure over 10 years of Home Rule Petition data. The pipeline ingests raw legislative records, normalizes them into a structured SQL schema, and surfaces patterns across petition cycles.

Developed a refiling fatigue analysis dashboard to quantify how repeatedly filing the same petition correlates with long-term success or failure rates. The analysis revealed meaningful trends in legislative persistence and outcome probability over time.

Due to data closure restrictions, the linked page shows only the project poster and a summary of key outcomes.`,
    tags: ["Python", "SQL", "Data Pipeline", "API"],
    href: "https://www.linkedin.com/in/hongyaoshao/overlay/Project/1195618083/treasury/?profileId=ACoAAFJYEjgBric1E2h3quoOjgbC0F9Rw06BwSU",
    highlight: true,
    period: "Sep 2025 – Dec 2025",
    completedAt: "2025-12",
  },
  {
    slug: "llm-article-summarizer",
    title: "LLM Article Summarizer",
    description:
      "LLM-powered article analyzer exploring how prompt design influences model outputs. Demonstrates the impact of prompt engineering on summarization quality and response variability.",
    detail: `Built an LLM-powered article analysis tool that takes arbitrary web articles as input and generates structured summaries using large language models. The core focus was exploring how prompt design — instruction framing, few-shot examples, output format constraints — influences the quality, consistency, and variability of model outputs.

The project demonstrates concrete differences between naive and engineered prompts: structured prompts with explicit role instructions and output templates consistently produced more accurate and stable summaries compared to open-ended prompts.`,
    tags: ["Python", "LLM", "NLP", "Prompt Engineering"],
    href: "https://github.com/SHyalan12/article_summarizer",
    highlight: true,
    period: "Nov 2025",
    completedAt: "2025-11",
  },
  {
    slug: "emotion-recognition-audio",
    title: "Emotion Recognition from Audio",
    description:
      "Python/TensorFlow pipeline that transforms raw audio into mel-spectrograms for CNN-based emotion classification. Fine-tuned model performance through structured hyperparameter sweeps across speech and song datasets.",
    detail: `Emotions shape how we communicate — but can a machine learn to hear them? This project explores that question by training CNN models to recognize emotions directly from audio, without ever reading a word.

The key idea: convert raw audio into spectrograms — visual "heat maps" that reveal how the frequencies of a sound change over time. Instead of processing waveforms, the model looks at these images and learns to distinguish patterns tied to emotions like anger, calm, happiness, or sadness. Audio clips were sourced from the RAVDESS dataset, covering both song and speech.

One early insight was that song and speech carry emotion very differently, so we trained two separate models. The song model reached 77.60% validation accuracy, performing best on neutral, angry, calm, and happy. The speech model reached 62.77%, best on disgust, calm, and angry — speech emotion proved harder to generalize.

To make the models more robust, we applied data augmentation: adding background noise, shifting pitch, and modifying playback speed to expand the training set and reduce overfitting.

As a fun real-world test, we ran the model on a spectrogram generated from a real lecture recording — a professor saying "please fill out course evaluation when you get back to your dorm." The model's prediction: calm, with 95% confidence.`,
    tags: ["Python", "TensorFlow", "CNN", "Librosa"],
    href: "https://github.com/SHyalan12/Emotion-Recognition-from-Audio-Using-CNN-Based-Spectrogram",
    highlight: true,
    period: "Feb 2025 – May 2025",
    completedAt: "2025-05",
    images: [
      {
        src: "/projects/03-01-05-01-01-01-01.png",
        caption: "Speech spectrogram — angry emotion. Brighter regions indicate higher energy frequencies, characteristic of the sharp, high-intensity vocal patterns of anger.",
      },
    ],
  },
  {
    slug: "us-highway-structure",
    title: "US Highway Network Structure Analysis",
    description:
      "Graph analysis of the US interstate highway network in Rust, using degree and closeness centrality to rank states by their strategic importance in the national road system.",
    detail: `Modeled the US highway system as a graph — states as nodes, highways as edges — and used Rust to compute which states are most critical to national connectivity.

Two metrics were applied: degree centrality (how many direct highway links a state has) and closeness centrality (how efficiently a state can reach every other state). North Carolina ranked highest for direct connections with 49 links, while Missouri topped overall network centrality.

Built using the petgraph library with Dijkstra's algorithm for shortest-path calculations. Raw highway data was sourced from Kaggle, filtered to remove decommissioned routes, and processed into ranked CSV outputs.`,
    tags: ["Rust", "Graph Theory", "Network Analysis", "Data Structures"],
    href: "https://github.com/SHyalan12/US_Highway_Structure",
    highlight: false,
    period: "Mar 2024 – May 2024",
    completedAt: "2024-05",
  },
  {
    slug: "delivery-performance-dynamics",
    title: "Delivery Performance Dynamics Analysis",
    description:
      "Statistical and machine learning analysis of delivery performance data, identifying key correlations between personnel performance, delivery times, and customer satisfaction.",
    detail: `Analyzed a real-world delivery dataset to understand what drives performance and customer satisfaction. Using OLS regression and ANOVA, identified statistically significant correlations between personnel metrics, delivery times, and satisfaction scores — separating signal from noise in a multi-variable environment.

Built machine learning models in Python, including Random Forests, to predict delivery time and rank the factors with the most impact on overall efficiency. The final model achieved an F1 score above 0.85, demonstrating strong predictive accuracy across the test set.

The project highlighted how operational decisions — staffing, routing, and workload distribution — compound in their effect on end-to-end delivery performance.`,
    tags: ["Python", "Scikit-Learn", "OLS Regression", "ANOVA", "Random Forest"],
    href: "",
    highlight: false,
    period: "Oct 2023 – Dec 2023",
    completedAt: "2023-12",
  },
];

export const sortedProjects = [...projects].sort((a, b) =>
  b.completedAt.localeCompare(a.completedAt)
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getHighlightedProjects(): Project[] {
  return [...projects]
    .filter((p) => p.highlight)
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt));
}
