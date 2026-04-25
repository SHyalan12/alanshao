export interface ProjectImage {
  src: string;
  caption: string;
  caption_zh?: string;
}

export interface Project {
  slug: string;
  title: string;
  title_zh?: string;
  description: string;
  description_zh?: string;
  detail: string;
  detail_zh?: string;
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
    title_zh: "Progressive Mass：自治请愿数据分析",
    description:
      "End-to-end data pipeline using the MA Legislature Public API to collect and structure 10 years of petition data. Built a refiling fatigue analysis dashboard to quantify repeated filings and their impact on success rates.",
    description_zh:
      "基于马萨诸塞州立法机构公开 API，构建端到端数据管道，采集整理十年请愿数据，并通过仪表板量化反复提交对请愿成功率的影响。",
    detail: `Built an end-to-end data pipeline using the Massachusetts Legislature Public API to collect and structure over 10 years of Home Rule Petition data. The pipeline ingests raw legislative records, normalizes them into a structured SQL schema, and surfaces patterns across petition cycles.

Developed a refiling fatigue analysis dashboard to quantify how repeatedly filing the same petition correlates with long-term success or failure rates. The analysis revealed meaningful trends in legislative persistence and outcome probability over time.

Due to data closure restrictions, the linked page shows only the project poster and a summary of key outcomes.`,
    detail_zh: `基于马萨诸塞州立法机构公开 API，构建了一套端到端数据管道，采集并整理了十年以上的自治请愿历史数据。管道将原始立法记录标准化为结构化 SQL 模式，并梳理出跨届请愿的规律性变化。

开发了一套「反复提交疲劳」分析仪表板，量化同一请愿多次提交与长期成功或失败率之间的相关性，揭示了立法坚持度与结果概率随时间演变的内在规律。

由于数据保密限制，项目页面仅展示项目海报及核心成果摘要。`,
    tags: ["Python", "SQL", "Data Pipeline", "API"],
    href: "https://www.linkedin.com/in/hongyaoshao/overlay/Project/1195618083/treasury/?profileId=ACoAAFJYEjgBric1E2h3quoOjgbC0F9Rw06BwSU",
    highlight: true,
    period: "Sep 2025 – Dec 2025",
    completedAt: "2025-12",
  },
  {
    slug: "llm-article-summarizer",
    title: "LLM Article Summarizer",
    title_zh: "大语言模型文章摘要工具",
    description:
      "LLM-powered article analyzer exploring how prompt design influences model outputs. Demonstrates the impact of prompt engineering on summarization quality and response variability.",
    description_zh:
      "基于大语言模型的文章分析工具，探究提示词设计对模型输出的影响，展示提示工程在摘要质量与结果一致性上的实质差异。",
    detail: `Built an LLM-powered article analysis tool that takes arbitrary web articles as input and generates structured summaries using large language models. The core focus was exploring how prompt design — instruction framing, few-shot examples, output format constraints — influences the quality, consistency, and variability of model outputs.

The project demonstrates concrete differences between naive and engineered prompts: structured prompts with explicit role instructions and output templates consistently produced more accurate and stable summaries compared to open-ended prompts.`,
    detail_zh: `构建了一款基于大语言模型的文章分析工具，输入任意网页文章，生成结构化摘要。核心研究方向是提示词设计——指令框架、少样本示例、输出格式约束——如何影响模型输出的质量、一致性与变异性。

实验结果表明，精心设计的提示词与随意的提示词之间存在显著差距：带有明确角色指令和输出模板的结构化提示，相比开放式提示，能持续生成更准确、更稳定的摘要。`,
    tags: ["Python", "LLM", "NLP", "Prompt Engineering"],
    href: "https://github.com/SHyalan12/article_summarizer",
    highlight: true,
    period: "Nov 2025",
    completedAt: "2025-11",
  },
  {
    slug: "emotion-recognition-audio",
    title: "Emotion Recognition from Audio",
    title_zh: "基于音频的情绪识别",
    description:
      "Python/TensorFlow pipeline that transforms raw audio into mel-spectrograms for CNN-based emotion classification. Fine-tuned model performance through structured hyperparameter sweeps across speech and song datasets.",
    description_zh:
      "使用 Python/TensorFlow 将原始音频转换为梅尔频谱图，训练 CNN 模型进行情绪分类，通过系统化超参数调优在歌唱与语音数据集上提升模型性能。",
    detail: `Emotions shape how we communicate — but can a machine learn to hear them? This project explores that question by training CNN models to recognize emotions directly from audio, without ever reading a word.

The key idea: convert raw audio into spectrograms — visual "heat maps" that reveal how the frequencies of a sound change over time. Instead of processing waveforms, the model looks at these images and learns to distinguish patterns tied to emotions like anger, calm, happiness, or sadness. Audio clips were sourced from the RAVDESS dataset, covering both song and speech.

One early insight was that song and speech carry emotion very differently, so we trained two separate models. The song model reached 77.60% validation accuracy, performing best on neutral, angry, calm, and happy. The speech model reached 62.77%, best on disgust, calm, and angry — speech emotion proved harder to generalize.

To make the models more robust, we applied data augmentation: adding background noise, shifting pitch, and modifying playback speed to expand the training set and reduce overfitting.

As a fun real-world test, we ran the model on a spectrogram generated from a real lecture recording — a professor saying "please fill out course evaluation when you get back to your dorm." The model's prediction: calm, with 95% confidence.`,
    detail_zh: `情绪主导着我们的沟通方式——但机器能学会「听懂」情绪吗？本项目训练 CNN 模型，让其直接从音频中识别情绪，无需理解任何文字。

核心思路：将原始音频转化为频谱图——一种可视化的「热力图」，展示声音频率随时间的变化规律。模型通过分析这些图像，学习辨别与愤怒、平静、快乐、悲伤等情绪相关联的声学特征。音频数据来自 RAVDESS 数据集，涵盖歌唱与语音两类。

研究发现，歌唱与语音在情绪表达上差异显著，因此分别训练了两个模型。歌唱模型验证集准确率达 77.60%，在中性、愤怒、平静和快乐情绪上表现最佳；语音模型达到 62.77%，在厌恶、平静和愤怒上表现较好——语音情绪的泛化难度更大。

为增强模型鲁棒性，采用了数据增强策略：添加背景噪音、变换音调、调整播放速度，扩充训练集并降低过拟合。

作为趣味测试，我们对一段真实课堂录音生成频谱图并输入模型——内容是教授说"请回宿舍后填写课程评价"。模型的预测结果：平静，置信度 95%。`,
    tags: ["Python", "TensorFlow", "CNN", "Librosa"],
    href: "https://github.com/SHyalan12/Emotion-Recognition-from-Audio-Using-CNN-Based-Spectrogram",
    highlight: true,
    period: "Feb 2025 – May 2025",
    completedAt: "2025-05",
    images: [
      {
        src: "/projects/03-01-05-01-01-01-01.png",
        caption: "Speech spectrogram — angry emotion. Brighter regions indicate higher energy frequencies, characteristic of the sharp, high-intensity vocal patterns of anger.",
        caption_zh: "语音频谱图——愤怒情绪。高亮区域代表高能量频率，对应愤怒情绪中尖锐、高强度的声学特征。",
      },
    ],
  },
  {
    slug: "us-highway-structure",
    title: "US Highway Network Structure Analysis",
    title_zh: "美国公路网络结构分析",
    description:
      "Graph analysis of the US interstate highway network in Rust, using degree and closeness centrality to rank states by their strategic importance in the national road system.",
    description_zh:
      "用 Rust 对美国州际公路网络进行图分析，通过度中心性与接近中心性指标评估各州在全国路网中的战略地位。",
    detail: `Modeled the US highway system as a graph — states as nodes, highways as edges — and used Rust to compute which states are most critical to national connectivity.

Two metrics were applied: degree centrality (how many direct highway links a state has) and closeness centrality (how efficiently a state can reach every other state). North Carolina ranked highest for direct connections with 49 links, while Missouri topped overall network centrality.

Built using the petgraph library with Dijkstra's algorithm for shortest-path calculations. Raw highway data was sourced from Kaggle, filtered to remove decommissioned routes, and processed into ranked CSV outputs.`,
    detail_zh: `将美国公路系统建模为图结构——以州为节点，以公路为边——用 Rust 计算哪些州对全国路网连通性最为关键。

应用了两项指标：度中心性（一个州直接相连的公路数量）和接近中心性（一个州到达其他所有州的效率）。北卡罗来纳州以 49 条直连公路在度中心性上排名第一，而密苏里州在整体网络中心性上位居榜首。

项目基于 petgraph 库构建，采用 Dijkstra 算法计算最短路径。原始公路数据来源于 Kaggle，经过滤除已废除路线的处理后，输出为带排名的 CSV 文件。`,
    tags: ["Rust", "Graph Theory", "Network Analysis", "Data Structures"],
    href: "https://github.com/SHyalan12/US_Highway_Structure",
    highlight: false,
    period: "Mar 2024 – May 2024",
    completedAt: "2024-05",
  },
  {
    slug: "delivery-performance-dynamics",
    title: "Delivery Performance Dynamics Analysis",
    title_zh: "配送绩效动态分析",
    description:
      "Statistical and machine learning analysis of delivery performance data, identifying key correlations between personnel performance, delivery times, and customer satisfaction.",
    description_zh:
      "运用统计学与机器学习方法分析配送绩效数据，识别人员表现、配送时效与客户满意度之间的关键关联。",
    detail: `Analyzed a real-world delivery dataset to understand what drives performance and customer satisfaction. Using OLS regression and ANOVA, identified statistically significant correlations between personnel metrics, delivery times, and satisfaction scores — separating signal from noise in a multi-variable environment.

Built machine learning models in Python, including Random Forests, to predict delivery time and rank the factors with the most impact on overall efficiency. The final model achieved an F1 score above 0.85, demonstrating strong predictive accuracy across the test set.

The project highlighted how operational decisions — staffing, routing, and workload distribution — compound in their effect on end-to-end delivery performance.`,
    detail_zh: `对真实配送数据集进行分析，探究影响绩效与客户满意度的核心因素。借助 OLS 回归与方差分析（ANOVA），识别出人员指标、配送时效与满意度评分之间具有统计显著性的相关关系，从多变量环境中提取有效信号。

使用 Python 构建机器学习模型（包括随机森林），预测配送时效并对整体效率影响最大的因素进行排序，最终模型 F1 分数超过 0.85，在测试集上表现出较强的预测能力。

项目揭示了运营决策——人员配置、路线规划与工作量分配——如何在端到端配送绩效上产生复合影响。`,
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
