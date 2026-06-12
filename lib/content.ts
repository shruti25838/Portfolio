// lib/content.ts
// All portfolio content in one typed file for easy editing

const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
export const getAssetPath = (path: string) => {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // lucide icon name
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  numericValue?: number;
  decimals?: number;
}

export interface ToolkitCategory {
  name: string;
  accent: string; // color class
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  accent: string;
  tags: string[];
  image: string;
  imageAlt: string;
  link: string;
  linkLabel: string;
  bullets: string[];
}

export interface Experience {
  period: string;
  role: string;
  org: string;
  location?: string;
  bullets: string[];
  tags?: string[];
}

export interface Patent {
  type: string;
  year: string;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
}

// Accent colors used per section
export const ACCENT_COLORS = {
  coral: '#FF4326',
  blue: '#2D52FF',
  green: '#06A567',
  violet: '#6E37F0',
  amber: '#F79A12',
  pink: '#FF3D8B',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// Updated social links with real URLs
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/shruti25838', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shruti-sridhar-666269296/', icon: 'Linkedin' },
  { label: 'Email', href: 'mailto:shrutisridhar4@gmail.com', icon: 'Mail' },
  { label: 'Résumé', href: '/resume.pdf', icon: 'FileText' },
];

// Certifications
export const CERTIFICATIONS = [
  { title: 'IBM AI Engineering Professional Certificate', issuer: 'IBM (Coursera)', year: '2025' },
  { title: 'LangChain & LangGraph Specialization', issuer: 'DeepLearning.AI (Coursera)', year: '2025' },
  { title: 'NVIDIA Deep Learning Institute Certificate', issuer: 'NVIDIA DLI', year: '2025' },
  { title: 'MLOps Specialization', issuer: 'DeepLearning.AI (Coursera)', year: '2025' },
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI (Coursera)', year: '2024' },
  { title: 'DeepLearning.AI TensorFlow Developer Professional Certificate', issuer: 'DeepLearning.AI (Coursera)', year: '2024' },
  { title: 'Machine Learning Specialization', issuer: 'Stanford & DeepLearning.AI (Coursera)', year: '2024' },
];

export const HERO = {
  badge: 'Available for full-time roles',
  name: 'Shruti Sridhar',
  role: 'AI / ML Engineer | New York, NY',
  tagline: 'I build ML systems, then bully them with evals until they stop lying. Fresh out of NYU, New York based, and currently very much for hire.',
  cta: [
    { label: 'View Projects', href: '#projects' },
    { label: 'Get in touch', href: 'mailto:shrutisridhar4@gmail.com' },
  ],
};

export const ABOUT = {
  heading: 'I build AI that ships, and the evals that keep it honest.',
  terminal: [
    { prompt: '$ whoami', response: 'shruti_sridhar // ai+ml engineer, nyc' },
    { prompt: '$ cat focus.txt', response: 'RAG, reinforcement learning, MLOps,\nembeddings at scale, eval pipelines' },
    { prompt: '$ echo $STATUS', response: 'open to full-time roles' },
    { prompt: '$ python -c "import shruti"', response: 'loaded: pytorch, langchain, k8s, coffee' },
  ],
  bio: [
    "I just finished a master's in computer engineering at NYU, and most of what I've worked on lives at the messy boundary between a model and a real user. I care less about which architecture topped a leaderboard and more about whether the thing is fast, grounded, and debuggable at 2am.",
    "That started in a lab in Chennai, where I trained a vision model for coral-reef monitoring that ended up on a filed patent. Since then I've built retrieval and RAG that had to survive real traffic, and most recently I've been doing epidemic-forecasting research at NYU Courant. Away from a terminal: coffee, other people's dogs, and an ongoing hunt for the best food in any neighborhood.",
  ],
};

export const STATS: Stat[] = [
  { value: '50+', label: 'Models Trained', numericValue: 50, suffix: '+', decimals: 0 },
  { value: '20+', label: 'Projects Shipped', numericValue: 20, suffix: '+', decimals: 0 },
  { value: '1M+', label: 'Vectors Served', numericValue: 1, suffix: 'M+', decimals: 0 },
  { value: '100+', label: 'Papers Read', numericValue: 100, suffix: '+', decimals: 0 },
];

export const TOOLKIT: ToolkitCategory[] = [
  {
    name: 'Languages',
    accent: 'coral',
    items: ['Python', 'SQL', 'TypeScript', 'Java'],
  },
  {
    name: 'LLM & Retrieval',
    accent: 'blue',
    items: ['RAG pipelines', 'LangChain', 'LangGraph', 'LangSmith', 'FAISS', 'Pinecone', 'BM25', 'Hugging Face Transformers'],
  },
  {
    name: 'ML Frameworks',
    accent: 'violet',
    items: ['PyTorch (CUDA/GPU)', 'TensorFlow', 'Scikit-learn', 'Stable Baselines3', 'XGBoost', 'LightGBM', 'LoRA', 'PEFT', 'SHAP'],
  },
  {
    name: 'MLOps & Backend',
    accent: 'green',
    items: ['Airflow', 'FastAPI', 'Flask', 'gRPC', 'CI/CD', 'Prometheus', 'Grafana', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'Cloud & Infra',
    accent: 'amber',
    items: ['AWS (EC2, S3, SageMaker)', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'Git'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'BoxBox',
    subtitle: 'F1 Pit-Stop Strategy Optimizer',
    accent: 'coral',
    tags: ['PPO', 'Gymnasium', 'gRPC', 'Flask', 'Prometheus', 'Grafana', 'Docker', 'Kubernetes'],
    image: '/images/project-boxbox.png',
    imageAlt: 'Formula 1 car racing on circuit — representing the BoxBox pit-stop strategy optimizer', // TODO: replace with real project screenshot
    link: 'https://boxbox-demo.whitesea-10ec1b74.eastus.azurecontainerapps.io/', // live demo URL
    linkLabel: 'Live demo',
    bullets: [
      'Custom Gymnasium environment simulating F1 races lap-by-lap from 45,623 real telemetry laps across 42 Grand Prix; PPO agent gains 5.7 positions over a fixed-window baseline (P7.8 vs P13.5), a 1.3-stop strategy matching real F1 patterns.',
      'Served over gRPC at 4.67ms p95 (≈40× under the 200ms target), live recommendations via Flask-SocketIO, monitored through a 5-panel Grafana + Prometheus dashboard.',
    ],
  },
  {
    title: 'CodeMentor AI',
    subtitle: 'Multi-Agent Codebase Assistant',
    accent: 'blue',
    tags: ['FastAPI', 'Next.js', 'RAG', 'LangGraph', 'SSE'],
    image: '/images/project-codementor.png',
    imageAlt: 'Code editor IDE with syntax-highlighted code — representing the CodeMentor AI multi-agent assistant', // TODO: replace with real project screenshot
    link: 'https://codemento-ai.vercel.app/', // live demo URL
    linkLabel: 'Live demo',
    bullets: [
      'Orchestrated 5 LangGraph agents (planner, retrieval, analyst, mentor, memory) behind interface-driven DI across 11 FastAPI endpoints, pairing FAISS vector search with Tree-sitter AST parsing to answer codebase queries at p95 under 800ms over streaming SSE.',
      'Instrumented with Prometheus + Grafana, ran 3 data-driven tuning cycles, containerized with Docker, deployed on Render/Vercel, merges gated by GitHub Actions CI.',
    ],
  },
  {
    title: 'AskMyDocs',
    subtitle: 'RAG document intelligence',
    accent: 'violet',
    tags: ['RAG', 'OCR', 'Hybrid Search', 'Python'],
    image: '/images/project-askmydocs.png',
    imageAlt: 'Documents being digitized and searched — representing the AskMyDocs RAG system', // TODO: replace with real project screenshot
    link: 'https://github.com/shruti25838/AskMyDocs',
    linkLabel: 'Code',
    bullets: [
      'Hybrid semantic search so retrieval works on meaning, not just keyword overlap; OCR layer extracts text from scanned PDFs; automated web-fallback fills gaps when the answer isn\'t in the documents.',
    ],
  },
  {
    title: 'Campaign Response Prediction',
    subtitle: 'ML classification pipeline',
    accent: 'amber',
    tags: ['LightGBM', 'XGBoost', 'PostgreSQL', 'SHAP'],
    image: '/images/project-campaign.png',
    imageAlt: 'Analytics dashboard with charts — representing the campaign response prediction pipeline', // TODO: replace with real project screenshot
    link: 'https://github.com/shruti25838/Marketing-Campaign-Response-Prediction-System',
    linkLabel: 'Code',
    bullets: [
      'LightGBM, XGBoost and logistic regression with 5-fold stratified CV and SMOTE on a PostgreSQL pipeline; ROC-AUC 0.93 / F1 0.86; top 4 deciles capture 74% of responders at 40% of contact cost (1.9× lift).',
      'Modular CLI with swappable models, SHAP global/local explainability, auto-exported lift charts and feature-importance CSVs into Power BI dashboards.',
    ],
  },
  {
    title: 'PneumoScan AI',
    subtitle: 'Medical vision',
    accent: 'pink',
    tags: ['PyTorch', 'CV', 'MVC', 'SOLID'],
    image: '/images/project-pneumoscan.png',
    imageAlt: 'Chest X-ray on diagnostic screen — representing the PneumoScan AI medical vision project', // TODO: replace with real project screenshot
    link: 'https://github.com/shruti25838/PneumoScan-AI',
    linkLabel: 'Code',
    bullets: [
      'PyTorch chest X-ray classification pipeline built with a decoupled MVC architecture and SOLID principles; reproducible automated training and evaluation; model, data, and serving layers kept swappable.',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'Jan 2026 — Present',
    role: 'Graduate Research Assistant (Co-Author)',
    org: 'NYU Courant Institute of Mathematical Sciences',
    bullets: [
      'Built a non-Markovian epidemic forecasting pipeline across 5–20 day horizons; mean RMSE 112–123 vs 620–730 for naive baselines, a 5–6× improvement across 12 parameter settings.',
      'Validated forecasts against Markovian baselines on MAE, bias, and MAPE using rolling-window calibration on population and contact-network inputs; currently extending evaluation across age-stratified cohorts.',
      'Co-authoring a manuscript on non-Markovian epidemic forecasting (preparing for submission to MDPI Algorithms, IF 2.1).',
    ],
    tags: ['Advisor: Prof. Dennis Shasha'],
  },
  {
    period: 'Sep 2025 — Dec 2025',
    role: 'AI Software Intern',
    org: 'PM Accelerator',
    location: 'New York, NY',
    bullets: [
      'Scaled a high-throughput embedding pipeline (E5-Large-V2 + HNSW) to serve 1M+ vectors at 5–10ms p95 retrieval latency.',
      'Designed end-to-end RAG evaluation across 4 pipeline variants (precision@k, grounding rate, latency SLAs); 12% grounding gain from reranking over vanilla top-k.',
      'Architected a dual-retrieval inference service (gRPC primary + Python fallback) on Kubernetes at 99.5% uptime, cutting mean-time-to-recovery from over 2 minutes to under 10 seconds.',
      'Optimized fine-tuning with mixed-precision training and gradient checkpointing, cutting GPU memory 30% while staying within 1% of full-precision quality; shipped monitoring dashboards that shrank regression detection from days to under an hour.',
    ],
  },
  {
    period: 'Jan 2024 — May 2024',
    role: 'ML/AI Intern',
    org: 'National Institute of Ocean Technology',
    location: 'Chennai',
    bullets: [
      'Co-inventor on a filed design patent: Real-Time Coral Reef Monitoring Instrument (filed 2024).',
      'Trained a VGG-19 coral-health classifier on 10K+ labeled underwater images to 92% test accuracy with targeted augmentation and a preprocessing pipeline (denoising, color correction, histogram equalization) for low-visibility conditions.',
      'Integrated on-device inference with LoRa wireless telemetry into the instrument firmware, cutting manual inspection workload by 70%.',
    ],
  },
];

export const PATENTS: Patent[] = [
  {
    type: 'Design patent',
    year: 'filed 2024',
    title: 'Real-Time Coral Reef Monitoring Instrument',
    description: 'Co-inventor on a filed design patent for an autonomous reef-monitoring device, developed at the National Institute of Ocean Technology.',
  },
  {
    type: 'Paper',
    year: 'preparing for submission',
    title: 'Non-Markovian epidemic forecasting',
    description: 'Co-author on a manuscript preparing for submission to MDPI Algorithms (IF 2.1); a method that beats naive baselines by 5–6× across horizons. Advised by Prof. Dennis Shasha, NYU Courant.',
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'M.S. Computer Engineering',
    school: 'New York University',
    period: 'Aug 2024 – May 2026',
    gpa: '3.7 / 4.0',
  },
  {
    degree: 'B.Tech Computer Science & Engineering',
    school: 'Vellore Institute of Technology, India',
    period: 'Sep 2020 – May 2024',
    gpa: '3.4 / 4.0',
  },
];
