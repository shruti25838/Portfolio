# Shruti Sridhar · AI / ML Engineer
### New York, NY · [shruti25838.github.io/Portfolio](https://shruti25838.github.io/Portfolio/)

I build production-grade machine learning systems, retrieval (RAG) pipelines, and rigorous evaluation workflows to keep models grounded and performant. Recent Computer Engineering graduate from NYU.

---

## 🛠️ Tech Stack & Toolkit

- **Languages**: Python, SQL, TypeScript, Java
- **LLM & Retrieval**: RAG Pipelines, LangChain, LangGraph, LangSmith, FAISS, Pinecone, Hybrid Search, Hugging Face
- **ML Frameworks**: PyTorch (CUDA/GPU), TensorFlow, Scikit-learn, Stable-Baselines3, XGBoost, LightGBM, LoRA/PEFT, SHAP
- **MLOps & Backend**: Airflow, FastAPI, Flask, Docker, Kubernetes, gRPC, Prometheus, Grafana, PostgreSQL, Redis
- **Cloud & Infra**: AWS (EC2, S3, SageMaker), Azure, Linux, CI/CD (GitHub Actions)

---

## 🚀 Featured Projects

### 🏎️ BoxBox · F1 Pit-Stop Strategy Optimizer
- Custom Gymnasium environment simulating F1 races lap-by-lap using 45k+ real telemetry laps.
- Trained a PPO reinforcement learning agent that beats fixed-window strategy baselines by 5.7 positions.
- Served recommendations via gRPC at 4.67ms p95 latency, monitored via Grafana & Prometheus, deployed on Azure Container Apps.

### 🤖 CodeMentor AI · Multi-Agent Codebase Assistant
- Multi-agent system (Planner, Retrieval, Analyst, Mentor, Memory) built using LangGraph and FastAPI.
- Combines FAISS vector search with Tree-sitter AST parsing for codebase retrieval under 800ms p95.
- Streamed responses via Server-Sent Events (SSE) to a Next.js front-end.

### 🔍 AskMyDocs · RAG Document Intelligence
- Hybrid semantic search tool featuring an OCR extraction layer for scanned PDFs.
- Incorporates fallback web search to dynamically fill query gaps when document contexts are insufficient.

---

## 🎓 Education & Certifications

- **M.S. in Computer Engineering** · New York University (GPA: 3.7/4.0)
- **B.Tech in Computer Science & Engineering** · Vellore Institute of Technology, India
- **Certifications**: IBM AI Engineering, DeepLearning.AI MLOps, DeepLearning.AI LangChain & LangGraph, Stanford Machine Learning

---

## 🛠️ Local Development (Next.js)

If you'd like to run this portfolio locally:

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev

# Build for production static export
npm run build
```
