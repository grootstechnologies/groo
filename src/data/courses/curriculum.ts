/**
 * curriculum.ts — Course data for Greenroots' 9 high-demand tracks.
 *
 * Each course exposes a deep, structured curriculum: phases with modules,
 * tooling ecosystem, production artifacts, certifications, FAQs, target
 * audience, prerequisites, and a strategic headline / synopsis used on the
 * course detail page.
 *
 * Exports:
 *   - DEVOPS_COURSE
 *   - DATA_ANALYTICS_COURSE
 *   - DATA_SCIENCE_COURSE
 *   - BUSINESS_ANALYST_COURSE
 *   - GENERATIVE_AI_COURSE
 *   - ETL_TESTING_COURSE
 *   - POWER_BI_COURSE
 *   - SOFTWARE_TESTING_COURSE
 *   - SQL_30D_COURSE
 *   - NEW_COURSES (array)
 *   - COURSE_BY_SLUG (Record<slug, course>)
 */

export type CourseModule = { title: string; desc: string };
export type CoursePhase = {
  phase: string;
  title: string;
  summary: string;
  modules: CourseModule[];
};
export type CourseFaq = { q: string; a: string };
export type ToolingDomain = { domain: string; tools: string[] };

export type Course = {
  slug: string;
  code: string;
  name: string;
  category: string;
  duration: string;
  weeklyHours: string;
  learningMode: string;
  batchSize: string;
  primaryCareerPath: string;
  strategicHeadline: string;
  tagline: string;
  executiveSynopsis: string;
  targetAudience: string[];
  prerequisites: string[];
  targetOutcome: string;
  keyTakeaways: string[];
  toolingEcosystem: ToolingDomain[];
  productionArtifacts: { title: string; desc: string }[];
  certifications: { title: string; desc: string }[];
  phases: CoursePhase[];
  faqs: CourseFaq[];
  accentColor: string;
};

/* ---------------------------- DevSecOps ---------------------------- */

const DEVOPS_COURSE: Course = {
  slug: "devops",
  code: "GR-DEV-2026",
  name: "DevSecOps Mastery Track",
  category: "Cloud & Security",
  duration: "3 months",
  weeklyHours: "12–14 hrs/week",
  learningMode: "Live online + Cloud labs",
  batchSize: "12–18 students",
  primaryCareerPath: "DevSecOps Engineer · Cloud Engineer · Platform Engineer",
  strategicHeadline: "Ship secure software fast — own the entire delivery pipeline.",
  tagline: "16 modules · 25+ tools · production-grade cloud labs",
  executiveSynopsis:
    "A 3-month, project-led DevSecOps track that takes you from containers to a fully automated, security-scanned delivery pipeline on AWS. You build everything: Docker images, Kubernetes manifests, Terraform modules, GitHub Actions workflows, Vault-backed secrets, and SAST/DAST gates. By graduation you have a portfolio pipeline that scans, signs, deploys, and observes a multi-service app — exactly what hiring managers ask for.",
  targetAudience: [
    "IT pros with 1–3 years of dev, QA, sysadmin, or support experience looking to pivot into DevSecOps.",
    "Developers who want to own the full delivery loop — not just the code.",
    "Recent CS/IT grads who want a hard, hireable niche beyond generalist SDE roles.",
  ],
  prerequisites: [
    "Comfortable with the Linux command line (basic file ops, bash scripting).",
    "Working knowledge of Git (commit, branch, push, pull).",
    "Any one programming language (Python, Go, Java, JS/TS).",
    "Familiarity with HTTP, REST, and JSON.",
  ],
  targetOutcome:
    "By the end of the program you can architect, build, secure, and operate a multi-service application on AWS — from container build to production deploy with full CI/CD, secrets management, and security scanning baked in.",
  keyTakeaways: [
    "Build containerised apps with Docker and orchestrate them with Kubernetes (EKS-ready).",
    "Author production-grade Terraform modules — reusable, state-managed, cost-aware.",
    "Design GitHub Actions pipelines with parallel jobs, matrix builds, and artifact caching.",
    "Integrate SAST, dependency scanning, and secrets detection into every pipeline run.",
    "Operate with observability — Prometheus, Grafana, Loki, and tracing.",
  ],
  toolingEcosystem: [
    { domain: "Containers & Orchestration", tools: ["Docker", "Kubernetes", "Helm", "Podman"] },
    { domain: "Cloud & IaC", tools: ["AWS (EKS, IAM, S3)", "Terraform", "Pulumi"] },
    { domain: "CI/CD", tools: ["GitHub Actions", "Jenkins", "ArgoCD"] },
    { domain: "Security", tools: ["SonarQube", "Trivy", "Vault", "OWASP ZAP"] },
    { domain: "Observability", tools: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"] },
    { domain: "Languages", tools: ["Python", "Bash", "Go (intro)"] },
    { domain: "Source & Workflow", tools: ["Git", "GitHub", "PR reviews", "Trunk-based dev"] },
  ],
  productionArtifacts: [
    {
      title: "Multi-Service Pipeline Project",
      desc: "A complete CI/CD pipeline for a 3-service app: build → scan → sign → deploy to EKS with ArgoCD, including canary rollout and rollback.",
    },
    {
      title: "Reusable Terraform Module Library",
      desc: "A versioned set of Terraform modules (VPC, EKS, IAM, RDS, S3) with tests and CI — portfolio-grade and reusable on day one of your job.",
    },
  ],
  certifications: [
    {
      title: "Greenroots DevSecOps Mastery Certificate",
      desc: "Issued on completion of all phases, projects, and the final panel review.",
    },
    {
      title: "Certified Kubernetes Administrator (CKA) — recommended",
      desc: "Curriculum covers 80%+ of CKA objectives; we provide a 4-week CKA prep sprint at the end of the program.",
    },
    {
      title: "AWS Solutions Architect Associate — recommended",
      desc: "All AWS modules align to SAA objectives; optional prep track included.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Linux, Networking & Containers",
      summary:
        "Rebuild the foundations employers assume: process management, networking, and the container story from first principles.",
      modules: [
        { title: "Linux for DevOps", desc: "Process isolation, namespaces, cgroups, systemd, journaling." },
        { title: "Networking Essentials", desc: "TCP/IP, DNS, HTTP, TLS, load balancing." },
        { title: "Docker Deep Dive", desc: "Images, layers, multi-stage builds, BuildKit, registry." },
        { title: "Git & Collaboration", desc: "Branching strategies, PR workflow, code review, trunk-based." },
      ],
    },
    {
      phase: "Phase 2 — Kubernetes",
      title: "Kubernetes & Orchestration",
      summary:
        "Run workloads on Kubernetes the way production teams do — declarative, GitOps-driven, observable.",
      modules: [
        { title: "K8s Core Objects", desc: "Pods, deployments, services, configmaps, secrets." },
        { title: "Storage & Networking", desc: "PVs, PVCs, ingress, network policies, service mesh intro." },
        { title: "Helm & Package Mgmt", desc: "Charts, templating, releases, OCI registries." },
        { title: "EKS Provisioning", desc: "Cluster setup, node groups, IRSA, autoscaling." },
      ],
    },
    {
      phase: "Phase 3 — Infrastructure as Code",
      title: "Terraform, AWS & Pipelines",
      summary:
        "Provision cloud infra the right way — modular, stateful, reviewed — and ship it through GitHub Actions.",
      modules: [
        { title: "Terraform Foundations", desc: "State, modules, workspaces, lifecycle hooks." },
        { title: "AWS Core Services", desc: "IAM, VPC, S3, RDS, EKS, CloudWatch, costing." },
        { title: "GitHub Actions", desc: "Workflows, runners, matrix, reusable workflows, secrets." },
        { title: "Pipeline Patterns", desc: "Parallel jobs, caching, artifacts, deployment gates." },
      ],
    },
    {
      phase: "Phase 4 — Security",
      title: "DevSecOps: Shift Security Left",
      summary:
        "Make security a CI gate — not a quarterly audit. SAST, dependency scanning, secrets detection, and signed images.",
      modules: [
        { title: "SAST & Code Quality", desc: "SonarQube quality gates in CI, false-positive triage." },
        { title: "Container & Dependency Scanning", desc: "Trivy, Grype, SBOM generation, policy enforcement." },
        { title: "Secrets Management", desc: "HashiCorp Vault, dynamic secrets, IRSA on EKS." },
        { title: "DAST & Runtime", desc: "OWASP ZAP in CI, Falco runtime detection, OPA policies." },
      ],
    },
    {
      phase: "Phase 5 — Observability & Capstone",
      title: "Operate, Observe, Ship the Capstone",
      summary:
        "Instrument services for metrics, logs, traces — and present your capstone pipeline to a mock hiring panel.",
      modules: [
        { title: "Metrics & Dashboards", desc: "Prometheus, Grafana, alerting, SLOs." },
        { title: "Logs & Traces", desc: "Loki, OpenTelemetry, distributed tracing." },
        { title: "Capstone Build", desc: "Multi-service app, full pipeline, canary deploy." },
        { title: "Mock Panel & Review", desc: "Architecture defence, incident scenario, Q&A." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is this course beginner-friendly?",
      a: "It is not a beginner course — you should have basic Linux, Git, and one programming language. If you are unsure, our free career audit will tell you whether this track or Data Analytics is the better fit.",
    },
    {
      q: "Do I get hands-on AWS access?",
      a: "Yes. We give you scoped AWS accounts for the duration of the program so you can provision real resources (within a budget). You also get access to a shared EKS cluster for K8s labs.",
    },
    {
      q: "What if I miss a live class?",
      a: "Every live session is recorded and uploaded within 24 hours. You keep access to the recordings, the labs, and the Discord mentor channel for 12 months after graduation.",
    },
    {
      q: "Is the CKA prep included?",
      a: "Yes — a 4-week CKA prep sprint is included at the end of the program. The course material covers 80%+ of CKA objectives; the prep sprint focuses on speed and the practical exam format.",
    },
    {
      q: "What does placement support look like?",
      a: "Resume rewrite, LinkedIn optimisation, weekly mock interviews, and active referrals to our hiring partners. Median time-to-offer for our graduates is around 10–12 weeks after completion.",
    },
    {
      q: "Can I pay in EMIs?",
      a: "Yes — 2- and 3-month EMI options are available. Talk to our counsellor for the current fee schedule and EMI plans.",
    },
    {
      q: "Will this help me switch cities — say from Hyderabad to Bengaluru?",
      a: "Yes. We actively place in both cities — our Hyderabad campus handles in-person interviews and our Bengaluru office runs remote panels. Your resume goes into both pools.",
    },
  ],
  accentColor: "#00AFA8",
};

/* ---------------------------- Data Analytics ---------------------------- */

const DATA_ANALYTICS_COURSE: Course = {
  slug: "data-analytics",
  code: "GR-DA-2026",
  name: "Data Analytics for Freshers",
  category: "Analytics & BI",
  duration: "10 weeks",
  weeklyHours: "10–12 hrs/week",
  learningMode: "Live + recorded",
  batchSize: "15–20 students",
  primaryCareerPath: "Data Analyst · BI Developer · MIS Analyst",
  strategicHeadline: "Land your first analytics role — with a portfolio employers respect.",
  tagline: "Excel → SQL → Python → Power BI → Tableau · 4 real projects",
  executiveSynopsis:
    "A 10-week, fresher-friendly track that takes you from Excel to a job-ready analytics portfolio. You learn SQL for querying, Python for wrangling, Power BI and Tableau for dashboards, and the storytelling that gets a CFO to act on your numbers. Four real-world projects (sales, marketing, operations, finance) give you the case studies you need to crack your first analyst interview.",
  targetAudience: [
    "Recent graduates (any stream) looking for their first analytics role.",
    "Working professionals in ops, sales, or MIS who want to formalise their analytics skills.",
    "Career returners re-entering IT — this track is gentle on prerequisites and strong on outcomes.",
  ],
  prerequisites: [
    "Comfort with Excel — pivot tables, basic formulas (we build from here).",
    "High-school level maths (averages, percentages, simple probability).",
    "A laptop with 8GB+ RAM. We help you install everything else.",
  ],
  targetOutcome:
    "By the end of the program you can ingest messy data, clean it in Python/SQL, model it in a star schema, build a Power BI dashboard, and present findings to a non-technical stakeholder.",
  keyTakeaways: [
    "Query production-style data with SQL — joins, window functions, CTEs.",
    "Wrangle data in pandas — clean, reshape, merge, and aggregate.",
    "Build a star-schema model in Power BI with DAX measures and time intelligence.",
    "Design dashboards in both Power BI and Tableau that pass a stakeholder review.",
    "Tell the story behind the numbers — KPI framing, narrative, and presentation.",
  ],
  toolingEcosystem: [
    { domain: "Spreadsheets", tools: ["Excel", "Google Sheets"] },
    { domain: "Databases & SQL", tools: ["PostgreSQL", "MySQL", "BigQuery (intro)"] },
    { domain: "Python Data Stack", tools: ["pandas", "NumPy", "Jupyter", "VS Code"] },
    { domain: "BI Tools", tools: ["Power BI Desktop & Service", "Power Query", "DAX"] },
    { domain: "Visualisation", tools: ["Tableau Public", "Matplotlib", "Seaborn"] },
    { domain: "Stats & Reporting", tools: ["Descriptive stats", "Hypothesis testing (intro)", "Storytelling"] },
    { domain: "Workflow", tools: ["Git basics", "Markdown", "Notion / Confluence for docs"] },
  ],
  productionArtifacts: [
    {
      title: "Sales Performance Dashboard (Power BI)",
      desc: "A live Power BI dashboard over a 5-year sales dataset — star-schema model, time-intelligence measures, RLS, mobile layout, and a one-page stakeholder narrative.",
    },
    {
      title: "Operations Analytics Notebook (Python + SQL)",
      desc: "An end-to-end Python notebook that pulls data from PostgreSQL, cleans and aggregates it, and exports both a Tableau dashboard and a 2-page executive summary.",
    },
  ],
  certifications: [
    {
      title: "Greenroots Data Analytics Certificate",
      desc: "Awarded on completion of all 4 projects and a final stakeholder review panel.",
    },
    {
      title: "Microsoft PL-300 (Power BI Data Analyst Associate) — recommended",
      desc: "Course covers 70%+ of PL-300 objectives; we include a 2-week PL-300 prep sprint.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Excel & Statistics",
      summary:
        "Start where every analyst starts — spreadsheets and the questions they answer.",
      modules: [
        { title: "Excel for Analysts", desc: "Pivot tables, lookup family, XLOOKUP, power query intro." },
        { title: "Descriptive Stats", desc: "Mean, median, variance, distribution, outliers." },
        { title: "Storytelling with Numbers", desc: "KPI framing, narrative arcs, stakeholder-first design." },
        { title: "Working with Real Data", desc: "Messy CSVs, encoding, multi-sheet workbooks." },
      ],
    },
    {
      phase: "Phase 2 — SQL",
      title: "SQL for Analytics",
      summary:
        "The single most-tested skill in analyst interviews — taught to production depth.",
      modules: [
        { title: "Queries & Joins", desc: "SELECT, WHERE, JOINs, GROUP BY, HAVING." },
        { title: "Window Functions", desc: "ROW_NUMBER, RANK, LAG/LEAD, running totals." },
        { title: "CTEs & Subqueries", desc: "Reusable query structure, performance basics." },
        { title: "Data Modelling Intro", desc: "Fact vs dimension, star schema, granularity." },
      ],
    },
    {
      phase: "Phase 3 — Python",
      title: "Python with pandas",
      summary:
        "Add Python to your toolkit — for everything spreadsheets can't handle.",
      modules: [
        { title: "Python Foundations", desc: "Variables, types, lists, dicts, functions." },
        { title: "pandas Essentials", desc: "DataFrames, indexing, filtering, merge, groupby." },
        { title: "Cleaning & Reshaping", desc: "Missing data, dtype coercion, melt/pivot." },
        { title: "Light Visualisation", desc: "Matplotlib and Seaborn for quick explorations." },
      ],
    },
    {
      phase: "Phase 4 — BI",
      title: "Power BI & Tableau",
      summary:
        "Two tools, one mindset — design dashboards that survive a stakeholder review.",
      modules: [
        { title: "Power BI Desktop", desc: "Power Query ETL, modelling, relationships, DAX." },
        { title: "DAX Measures", desc: "Time intelligence, CALCULATE, filter context." },
        { title: "Tableau Fundamentals", desc: "Connections, calculated fields, dashboard layout." },
        { title: "Dashboard Design", desc: "Layout, contrast, mobile-first, RLS basics." },
      ],
    },
    {
      phase: "Phase 5 — Capstone",
      title: "Capstone Project & Panel",
      summary:
        "Pick a domain, ship a dashboard, defend it to a mock stakeholder panel.",
      modules: [
        { title: "Capstone Build", desc: "End-to-end dashboard with Python or SQL pipeline + Power BI/Tableau." },
        { title: "Documentation", desc: "One-pager, data dictionary, refresh plan." },
        { title: "Stakeholder Review", desc: "Mock panel with Greenroots mentors and industry guests." },
      ],
    },
  ],
  faqs: [
    {
      q: "I'm a complete beginner. Can I do this?",
      a: "Yes — this track is built for freshers. As long as you have basic Excel and high-school maths, we will take you from there. Our free career audit helps you confirm fit before you enrol.",
    },
    {
      q: "Do I need to know coding before joining?",
      a: "No. We teach Python from absolute zero. Most of our graduates had never written code before the program.",
    },
    {
      q: "Which tool should I specialise in — Power BI or Tableau?",
      a: "We teach both, then help you pick based on the market. Power BI has a larger fresher hiring footprint in India; Tableau is stronger in product companies and consulting.",
    },
    {
      q: "Will I get a real project or just toy exercises?",
      a: "You ship 4 real projects across sales, marketing, operations, and finance domains — using realistic datasets and stakeholder briefs. Your capstone is reviewed by industry mentors.",
    },
    {
      q: "What is the placement rate?",
      a: "Our placement track record is 100% for students who complete all projects and mock interviews — the median time to first offer is around 8–10 weeks after completion.",
    },
    {
      q: "Is this available in both Hyderabad and Bengaluru?",
      a: "Yes — classes are live online with weekly mentor sessions. You can attend in-person labs at our Hyderabad campus or our Bengaluru office (HSR Layout). Placements run in both cities.",
    },
    {
      q: "What if I miss a class?",
      a: "Every session is recorded and uploaded within 24 hours. You keep access for 12 months.",
    },
  ],
  accentColor: "#32D583",
};

/* ---------------------------- Data Science ---------------------------- */

const DATA_SCIENCE_COURSE: Course = {
  slug: "data-science",
  code: "GR-DS-2026",
  name: "Data Science & AI (DSP Track)",
  category: "Machine Learning & AI",
  duration: "3 months",
  weeklyHours: "14–16 hrs/week",
  learningMode: "Live + mentorship",
  batchSize: "10–14 students",
  primaryCareerPath: "Data Scientist · ML Engineer (Jr) · AI Analyst",
  strategicHeadline: "Go deep into ML, NLP, and deployment — with a portfolio that opens doors.",
  tagline: "Statistics → ML → Deep Learning → NLP → MLOps · capstone included",
  executiveSynopsis:
    "A 3-month, graduates-and-up track that takes you from statistics to end-to-end ML systems. You build supervised and unsupervised models, deep learning models with PyTorch, NLP pipelines with transformers, and a deployed capstone with a FastAPI service behind a Streamlit app. The program is intense — designed for graduates ready to commit to a serious career in data science and AI.",
  targetAudience: [
    "Graduates (B.E/B.Tech, B.Sc, B.Stat, M.Sc, MBA) with a quantitative bent.",
    "Working analysts or engineers who want to move into data science and ML.",
    "Career switchers with a strong maths/coding base who want a deep, hireable ML portfolio.",
  ],
  prerequisites: [
    "Solid Python — functions, classes, pandas, NumPy basics.",
    "Undergrad-level maths — calculus, linear algebra, probability.",
    "Some exposure to SQL and basic stats (we offer a 1-week primer if needed).",
    "8+ hours/week of focused study time outside live classes.",
  ],
  targetOutcome:
    "By the end of the program you can frame a real ML problem, build and tune models, evaluate them honestly, and ship a deployed inference service behind a small web app.",
  keyTakeaways: [
    "Frame ML problems — supervised vs unsupervised, regression vs classification, baselines first.",
    "Build supervised models with scikit-learn — linear/logistic, trees, boosting, ensembles.",
    "Train deep learning models in PyTorch — feed-forward, CNNs, RNNs/transformers.",
    "Run NLP pipelines with Hugging Face transformers — embeddings, classification, generation.",
    "Deploy an inference service with FastAPI + Streamlit and version it with MLflow.",
  ],
  toolingEcosystem: [
    { domain: "Python Data Stack", tools: ["Python", "pandas", "NumPy", "scikit-learn"] },
    { domain: "Deep Learning", tools: ["PyTorch", "Lightning (intro)", "Hugging Face Transformers"] },
    { domain: "NLP", tools: ["transformers", "datasets", "tokenizers", "spaCy"] },
    { domain: "Stats & Math", tools: ["SciPy", "statsmodels", "sympy (intro)"] },
    { domain: "Visualisation", tools: ["Matplotlib", "Seaborn", "Plotly"] },
    { domain: "MLOps", tools: ["MLflow", "FastAPI", "Streamlit", "Docker (intro)"] },
    { domain: "Workflow", tools: ["Jupyter", "VS Code", "Git", "Weights & Biases (intro)"] },
  ],
  productionArtifacts: [
    {
      title: "End-to-End ML Capstone (Deployed)",
      desc: "Frame → train → evaluate → deploy a model behind a FastAPI service with a Streamlit front-end, all versioned in MLflow and containerised for repeatable deploys.",
    },
    {
      title: "NLP Project (Transformers)",
      desc: "A transformer-based project — classification, named entity recognition, or summarisation — using Hugging Face, with a written technical blog post and a reproducible notebook.",
    },
  ],
  certifications: [
    {
      title: "Greenroots Data Science & AI Certificate",
      desc: "Awarded on completion of the capstone, the NLP project, and a final mock DS interview panel.",
    },
    {
      title: "Cloud ML Certification (AWS/Azure/GCP) — recommended",
      desc: "Curriculum aligns with the AWS ML Specialty and Azure DP-100; optional prep sprint included.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Foundations",
      title: "Stats, Maths & EDA",
      summary:
        "Sharpen the maths every data scientist leans on — and the EDA discipline that makes models trustworthy.",
      modules: [
        { title: "Probability & Stats", desc: "Distributions, sampling, confidence intervals, hypothesis tests." },
        { title: "Linear Algebra", desc: "Vectors, matrices, eigenvalues, projections for ML." },
        { title: "Calculus Refresher", desc: "Gradients, optimisation intuition, partial derivatives." },
        { title: "EDA with pandas", desc: "Cleaning, profiling, correlation, outlier handling." },
      ],
    },
    {
      phase: "Phase 2 — Supervised ML",
      title: "Supervised Machine Learning",
      summary:
        "Train, tune, and evaluate supervised models the way a practitioner does — baselines first, then trees, then ensembles.",
      modules: [
        { title: "Linear & Logistic Regression", desc: "Loss functions, regularisation, interpretation." },
        { title: "Trees & Ensembles", desc: "Decision trees, random forests, gradient boosting." },
        { title: "Model Evaluation", desc: "CV, ROC/PR, calibration, leakage, baselines." },
        { title: "Feature Engineering", desc: "Encoding, scaling, target encoding, leakage prevention." },
      ],
    },
    {
      phase: "Phase 3 — Unsupervised & Deep Learning",
      title: "Unsupervised Learning & Neural Nets",
      summary:
        "Cluster, reduce, and then go deep — build neural networks from scratch in PyTorch.",
      modules: [
        { title: "Clustering & Dim Reduction", desc: "k-means, DBSCAN, PCA, t-SNE, UMAP." },
        { title: "Neural Networks", desc: "Forward/back prop, activations, PyTorch tensors & autograd." },
        { title: "CNNs", desc: "Convolutions, pooling, transfer learning for vision." },
        { title: "RNNs & Sequence Models", desc: "RNNs, LSTMs, attention intro, sequence tasks." },
      ],
    },
    {
      phase: "Phase 4 — NLP & Transformers",
      title: "NLP with Transformers",
      summary:
        "Modern NLP — embeddings, fine-tuning, and generation with Hugging Face transformers.",
      modules: [
        { title: "Text Preprocessing", desc: "Tokenisation, vocab, BPE, embeddings (word2vec to BERT)." },
        { title: "Transformers", desc: "Self-attention, encoder/decoder, BERT, GPT family." },
        { title: "Fine-tuning", desc: "Hugging Face Trainer, datasets, evaluation, ROUGE/BLEU." },
        { title: "Generative NLP", desc: "Prompting, RAG basics, small LLM fine-tune." },
      ],
    },
    {
      phase: "Phase 5 — MLOps & Capstone",
      title: "Deploy, Serve, Defend the Capstone",
      summary:
        "Ship a model behind a service, version it with MLflow, and present your capstone to a mock DS panel.",
      modules: [
        { title: "Model Serving", desc: "FastAPI inference, request validation, latency basics." },
        { title: "MLOps Basics", desc: "MLflow tracking, model registry, reproducible runs." },
        { title: "Capstone Build", desc: "End-to-end ML pipeline with deployment + Streamlit UI." },
        { title: "Mock DS Panel", desc: "Case framing, model defence, A/B testing scenarios." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is this course for freshers?",
      a: "This is a graduates-and-up track. You need solid Python, undergrad maths, and 8+ hours/week of focused study time. If you are a fresher looking for your first IT role, our Data Analytics for Freshers track is the better fit.",
    },
    {
      q: "Do I need a GPU?",
      a: "No. We use Google Colab and Kaggle GPU kernels for the deep learning modules — both free. We also show you how to set up a small GPU instance on AWS if you want to go further.",
    },
    {
      q: "What capstone options do I have?",
      a: "You can choose from a curated list (churn prediction, demand forecasting, NLP classification, RAG over a knowledge base, computer vision) or propose your own. The capstone is reviewed by industry mentors.",
    },
    {
      q: "How much maths do I really need?",
      a: "Undergrad-level calculus, linear algebra, and probability. We run a 1-week primer before the program starts for anyone who needs a refresher.",
    },
    {
      q: "Will this help me crack data science interviews?",
      a: "Yes. The final two weeks include mock DS interview rounds — case framing, model defence, SQL/Python coding rounds, and a stats & ML fundamentals drill. Our mentors are working data scientists.",
    },
    {
      q: "Do you cover GenAI and LLMs?",
      a: "Yes — Phase 4 includes transformers, fine-tuning, prompt engineering, and an intro to RAG. We focus on the foundations that survive tool churn, not on chasing the latest library.",
    },
    {
      q: "Can I attend from Bengaluru or Hyderabad?",
      a: "Yes — classes are live online. In-person mentor sessions are available at our Hyderabad campus (Kukatpally) and our Bengaluru office (HSR Layout). Placement referrals run in both cities.",
    },
  ],
  accentColor: "#0878E8",
};

/* ---------------------------- Business Analyst ---------------------------- */

const BUSINESS_ANALYST_COURSE: Course = {
  slug: "business-analyst",
  code: "GR-BA-37D",
  name: "Business Analyst Job-Ready Program",
  category: "Business & Analytics",
  duration: "37 days (8 weeks)",
  weeklyHours: "1–2 hrs/day + weekend labs",
  learningMode: "Daily hands-on + real-time project",
  batchSize: "8–10 students",
  primaryCareerPath: "Functional BA · Technical BA · Product Analyst · Domain Consultant",
  strategicHeadline: "From Day 1 to Day 37 — become a job-ready Business Analyst.",
  tagline: "Real-time project · Jira · SQL · Power BI · Postman · Notion · 4 transition pathways",
  executiveSynopsis:
    "A 37-day job-ready career program (8 weeks) built around a real-time fintech project — Digital Lending Platform Transformation. You master requirement elicitation, BRD/FRD authoring, user stories, Agile Scrum ceremonies in Jira, SQL database verification, Postman API testing, and Power BI executive dashboards. Four tailored transition pathways (Non-IT Switcher, IT Upskilling, Global Returnee, Confused Aspirant) take you from your current background to interview-ready — no heavy coding required.",
  targetAudience: [
    "Non-IT switchers from BPO, sales, ops, support, or banking who want into IT without coding.",
    "IT testers and support admins (2–10 yrs) moving from execution roles to client-facing BA roles.",
    "Returning MBAs and global professionals repackaging domain experience for the Indian IT market.",
    "Freshers and graduates who want the fastest, lowest-barrier entry into IT careers.",
  ],
  prerequisites: [
    "None required — no coding background needed.",
    "Logical reasoning and structured thinking.",
    "Communication curiosity — the willingness to bridge business and tech.",
  ],
  targetOutcome:
    "By the end of the program you own a job-ready Business Analyst profile: a complete fintech BRD/FRD portfolio, a live Jira Scrum board with user stories, SQL and Postman verification skills, a Power BI executive dashboard, an ATS-optimised resume, and mock-interview readiness for ₹10–25 LPA roles.",
  keyTakeaways: [
    "Transition into high-paying IT roles without writing complex programming code.",
    "Master requirement elicitation, user story authoring, and documentation in Notion & Confluence.",
    "Run Agile Scrum ceremonies, sprint planning, and backlog grooming in Jira.",
    "Perform database verification in SQL, test backend APIs in Postman, and build dashboards in Power BI.",
    "Repackage your prior domain background to command ₹10–25 LPA compensation.",
  ],
  toolingEcosystem: [
    { domain: "Documentation", tools: ["Notion", "MS Word", "Confluence", "Draw.io"] },
    { domain: "Agile & Tracking", tools: ["Jira", "Scrum boards", "Epics & Stories", "Burndown charts"] },
    { domain: "Data & SQL", tools: ["SQL Workbench", "Excel", "Joins & aggregations"] },
    { domain: "API Testing", tools: ["Postman", "REST", "JWT / Bearer auth", "Status-code validation"] },
    { domain: "BI & Dashboards", tools: ["Power BI Desktop", "Power Query", "KPI drill-downs"] },
    { domain: "Career", tools: ["ATS resume", "Naukri", "LinkedIn optimisation"] },
  ],
  productionArtifacts: [
    {
      title: "Digital Lending Platform Transformation Pack",
      desc: "Complete BA artifact set for a fintech capstone — BRD, FRD, Notion documentation hub, UML sequence diagrams, process flows, and business rules matrices.",
    },
    {
      title: "Jira Agile Scrum Board + API Test Collection",
      desc: "A prioritised product backlog with Epics, user stories (INVEST), Given-When-Then acceptance criteria, full sprint simulations, and a Postman collection with environment variables and token chaining.",
    },
    {
      title: "Executive Revenue & Disbursement Dashboard",
      desc: "An interactive Power BI dashboard for a banking capstone — loan disbursement KPIs, revenue analytics, slicers, and drill-down hierarchies for executive review.",
    },
  ],
  certifications: [
    {
      title: "ECBA — Entry Certificate in Business Analysis (IIBA)",
      desc: "The globally recognised entry-level BA credential; the curriculum maps to the ECBA knowledge areas.",
    },
    {
      title: "Certified ScrumMaster (CSM) — preparation",
      desc: "Agile Scrum roles, ceremonies, and backlog practice prepare you for CSM certification.",
    },
    {
      title: "Microsoft Power BI Data Analyst (PL-300) — preparation",
      desc: "The Power BI module covers modelling, DAX, and publishing aligned to PL-300 objectives.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Fundamentals",
      title: "BA Role, Agile & Scrum Foundations (Days 1–5)",
      summary:
        "Understand the modern BA role and the Agile ecosystem it operates in — with your Notion workspace set up from day one.",
      modules: [
        { title: "Intro to BA + Career Roadmap", desc: "The modern BA role in corporate IT, your Notion BA workspace, and the 37-day roadmap to placement." },
        { title: "BA vs PO vs Scrum Master", desc: "Comparative matrix, day-to-day responsibilities in Agile teams, and the business-to-tech bridge." },
        { title: "SDLC — Waterfall vs Agile", desc: "SDLC models and phase gates, Waterfall bottlenecks, Agile manifesto, and why enterprises shifted." },
        { title: "Scrum Framework + Sprint Lifecycle", desc: "Scrum roles and ceremonies, and a live walkthrough of an active corporate sprint board in Jira." },
      ],
    },
    {
      phase: "Phase 2 — Requirement Gathering",
      title: "Elicitation, Stakeholders & Analysis (Days 6–10)",
      summary:
        "The core BA craft — extracting, structuring, and analysing requirements from real stakeholders.",
      modules: [
        { title: "Elicitation Techniques", desc: "Interviews, surveys, workshops, document analysis, and reusable Notion intake templates." },
        { title: "Stakeholder Management", desc: "RACI matrix, Power-vs-Interest grids, and handling conflicting priorities and scope expectations." },
        { title: "Functional vs Non-Functional", desc: "FR and NFR types, FURPS+ model, and quantitative acceptance-criteria benchmarks." },
        { title: "Gap Analysis + KYC Case Study", desc: "Current-vs-future-state decomposition, feasibility in Excel, and a live digital-onboarding elicitation session." },
      ],
    },
    {
      phase: "Phase 3 — Documentation",
      title: "BRD, FRD, SRS & User Stories (Days 11–15)",
      summary:
        "Author industry-standard documents — the exact artifacts hiring managers ask you to walk through in interviews.",
      modules: [
        { title: "BRD Authoring", desc: "Executive summary, business context, scope, ROI metrics — drafted for a Digital Lending Platform." },
        { title: "FRD Authoring", desc: "Translating business needs into functional specs, use cases, and screen-by-screen validations." },
        { title: "SRS & IEEE Standards", desc: "System interfaces, constraints, API contracts, and the BRD-vs-FRD-vs-SRS comparison matrix." },
        { title: "User Stories + Acceptance Criteria", desc: "INVEST formula, Jira Epics-to-Tasks structure, and Given-When-Then BDD criteria with DoR/DoD." },
      ],
    },
    {
      phase: "Phase 4 — Agile Execution with Jira",
      title: "Backlog, Estimation & Sprint Simulation (Days 16–20)",
      summary:
        "Run a sprint like a real BA — grooming, estimation, prioritisation, and burndown analysis in Jira.",
      modules: [
        { title: "Product Backlog Creation", desc: "Building an enterprise backlog from scratch with Epics, Releases, and linked dependencies." },
        { title: "Sprint Planning", desc: "Scope negotiation, velocity benchmarks, Sprint Goals, and custom Jira workflow boards." },
        { title: "Story Points & Planning Poker", desc: "Fibonacci relative estimation and facilitating divergence between developers." },
        { title: "MoSCoW + Sprint Simulation", desc: "Must/Should/Could/Won't prioritisation, Kano model, burndown charts, and a full simulated sprint." },
      ],
    },
    {
      phase: "Phase 5 — Testing + SQL",
      title: "UAT Basics & Database Verification (Days 21–24)",
      summary:
        "Technical-BA essentials — validating data in SQL and tracking defects like a QA partner.",
      modules: [
        { title: "Manual Testing Basics", desc: "The BA's role in UAT, functional test cases, and boundary/equivalence test design." },
        { title: "Bug Lifecycle in Jira", desc: "Defect stages, Severity vs Priority, and logging high-clarity tickets with reproduction steps." },
        { title: "SQL for BAs", desc: "SELECT, WHERE, GROUP BY, HAVING, and INNER/LEFT/RIGHT/FULL OUTER JOINs on real schemas." },
        { title: "SQL Practice on Real Data", desc: "E-commerce and banking datasets — extracting business KPIs, churn lists, and integrity audits." },
      ],
    },
    {
      phase: "Phase 6 — API Testing with Postman",
      title: "REST Concepts & Backend Verification (Days 25–28)",
      summary:
        "Why modern BAs must speak API — contracts, payloads, and validation with Postman.",
      modules: [
        { title: "API Fundamentals + HTTP Methods", desc: "REST principles, JSON payloads, and GET/POST/PUT/PATCH/DELETE semantics." },
        { title: "Requests & Responses", desc: "Postman collections, environment variables, and validating 200/201/400/401/404/500 responses." },
        { title: "Auth, Headers & Test Scripts", desc: "API keys, Basic Auth, Bearer JWT, and basic Postman test scripts for status and body checks." },
        { title: "Real-Time Payment Gateway Use Case", desc: "Testing Razorpay/Stripe sandbox APIs — refunds, error handling, and contract documentation." },
      ],
    },
    {
      phase: "Phase 7 — Power BI + BA Roles",
      title: "Executive Dashboards & Career Paths (Days 29–31)",
      summary:
        "Turn verified data into executive stories — then map your Functional vs Technical BA trajectory.",
      modules: [
        { title: "Power BI Basics", desc: "Desktop interface, importing from Excel and SQL, Power Query cleaning, and star-schema modelling." },
        { title: "Dashboard Creation", desc: "KPI scorecards, trend lines, slicers, drill-downs, and a Revenue & Disbursement executive dashboard." },
        { title: "Functional vs Technical BA", desc: "Domain mastery vs system-integration tracks, career progression pathways, and salary brackets." },
      ],
    },
    {
      phase: "Phase 8 — Capstone + Placement",
      title: "Real-Time Project & Interview Defense (Days 32–37)",
      summary:
        "Ship the capstone end-to-end, then convert it into offers — resume, Naukri, and mock panels.",
      modules: [
        { title: "Capstone Requirement Workshops", desc: "Digital Banking / Loan Origination kick-off with stakeholder roleplays in Notion." },
        { title: "BRD + FRD + Jira Execution", desc: "Full documentation, wireframes, Epics, story points, and a capstone sprint-review demo." },
        { title: "ATS Resume + Naukri Setup", desc: "Persona-tailored resumes and recruiter-keyword optimisation (BRD, Agile, Postman, SQL, Jira)." },
        { title: "Mock Interview Panels", desc: "STAR behavioural drills, live elicitation roleplay, project defense, and placement-drive launch." },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I switch to IT as a Business Analyst without any coding background?",
      a: "Yes. Business Analysts act as the communication and process bridge between business stakeholders and developers. We train you in Notion, Jira, Excel, and requirements engineering — no heavy coding required. The Non-IT Switcher pathway is built exactly for this transition.",
    },
    {
      q: "I am currently in Testing / Support. How does this course help me move toward ₹18–25 LPA roles?",
      a: "Our IT Upskilling track is engineered for testers and support professionals with 2–10 years of experience. We teach advanced Jira, API testing with Postman, deep SQL, Power BI, and real-time project defense to help you transition from an execution role into a decision-making Technical BA role.",
    },
    {
      q: "How do returning or global professionals position their experience for the Indian IT market?",
      a: "The Returning Professional module helps you repackage international management and business exposure into structured IT documentation (BRD/FRD), executive Power BI storytelling, and modern AI productivity workflows to target ₹20–25 LPA roles.",
    },
    {
      q: "I have tried multiple domains (Data, Testing, Dev) and feel confused. Why is BA the right choice?",
      a: "Business Analysis provides the simplest entry into IT with a significantly lower technical barrier and faster placement. Instead of memorising syntax, you leverage logic, structured thinking, and business communication — one clean, achievable pathway.",
    },
    {
      q: "What does the real-time project look like?",
      a: "You build a complete Digital Lending Platform Transformation pack: BRD, FRD, Notion hub, UML diagrams, a Jira Scrum board with user stories and sprints, Postman API tests, and a Power BI executive dashboard — defended in a live stakeholder mock panel.",
    },
  ],
  accentColor: "#0878E8",
};

/* ---------------------------- Generative AI & Azure AI ---------------------------- */

const GENERATIVE_AI_COURSE: Course = {
  slug: "generative-ai-azure",
  code: "GR-GENAI-90",
  name: "Generative AI & Azure AI Engineering",
  category: "AI & Data",
  duration: "90 days (13 weeks)",
  weeklyHours: "6 hrs/day (fresher track)",
  learningMode: "Dual-pace · Azure-native labs",
  batchSize: "15–20 students",
  primaryCareerPath: "Azure AI Engineer · Generative AI Specialist · LLM Solutions Architect",
  strategicHeadline: "90 days of production Generative AI engineering on Microsoft Azure.",
  tagline: "Enterprise LLM architecture · RAG · APIM AI Gateway · 6 live capstones",
  executiveSynopsis:
    "A 90-day industry curriculum on the Azure-native stack covering the full enterprise LLM architecture: Power Automate/client → APIM Gateway → Azure Function App → Azure OpenAI & RAG. You master prompt engineering, Azure OpenAI APIs, embeddings and vector search, Document Intelligence, agentic patterns with function calling, LLMOps with evaluation and A/B testing — then ship 6 live capstones across Banking & Finance and Supply Chain domains.",
  targetAudience: [
    "Freshers who complete an included 3-day Python & API bootcamp before Week 1.",
    "Experienced engineers who fast-track Phase 1 foundations and join Week 3 directly.",
    "Developers targeting AI-102 (Azure AI Engineer Associate) certification.",
    "Teams building enterprise RAG and LLM solutions in regulated domains.",
  ],
  prerequisites: [
    "Python programming fundamentals — the 3-day bootcamp covers the rest for freshers.",
    "Basic understanding of REST APIs and JSON.",
    "Analytical aptitude and comfort with cloud consoles.",
  ],
  targetOutcome:
    "Enterprise Azure Generative AI Engineer — AI-102 & AZ-900 ready — able to design, secure, deploy, and operate production LLM applications: RAG pipelines with citation grounding, APIM-secured Function App orchestrators, and LLMOps pipelines with automated evaluation.",
  keyTakeaways: [
    "Engineer production prompts — zero-shot, few-shot, chain-of-thought, JSON schema outputs, and prompt-injection defense.",
    "Build RAG pipelines with Azure AI Search — chunking strategies, hybrid keyword + vector search, and semantic re-ranking with citation grounding.",
    "Architect the enterprise AI stack: APIM AI Gateway → stateless Azure Functions orchestrator → Azure OpenAI via Managed Identity.",
    "Extract and sanitize documents with Azure Document Intelligence and Microsoft Presidio PII anonymisation.",
    "Operate LLMOps — prompt versioning, A/B testing, Application Insights observability, and Azure DevOps CI/CD.",
  ],
  toolingEcosystem: [
    { domain: "LLMs & Prompting", tools: ["Azure OpenAI (GPT-4)", "tiktoken", "LangChain", "JSON schema outputs"] },
    { domain: "RAG & Search", tools: ["Azure AI Search", "Embeddings", "Hybrid BM25 + vector", "Semantic re-ranking"] },
    { domain: "Documents & Safety", tools: ["Azure Document Intelligence", "MS Presidio", "Azure Content Safety"] },
    { domain: "Orchestration", tools: ["Azure Functions v2 (Python)", "Cosmos DB", "App Configuration", "Power Automate"] },
    { domain: "Gateway & Security", tools: ["Azure APIM", "JWT validation", "Entra ID", "Key Vault", "Managed Identity"] },
    { domain: "Evaluation & LLMOps", tools: ["Azure AI Evaluation SDK", "Application Insights", "Azure DevOps YAML"] },
  ],
  productionArtifacts: [
    {
      title: "Fraud Investigation Assistant (Banking)",
      desc: "RAG over case history and policy docs via Azure AI Search, Function App orchestrator behind APIM gateway security, GPT-4 analytical synthesis, and Dynamics 365 integration.",
    },
    {
      title: "Supplier Contract Analyser (Supply Chain)",
      desc: "Document Intelligence clause extraction from vendor MSAs, Presidio PII and pricing scrubbing, compliance-check RAG pipeline, and Power Automate trigger with structured JSON to ERP.",
    },
    {
      title: "Regulatory Policy Q&A Bot (Banking)",
      desc: "Grounded Q&A over PDF policy documents with strict citation grounding and zero-hallucination compliance — plus a KYC Document Processor with automated PII scrubbing and audit logs.",
    },
  ],
  certifications: [
    {
      title: "AI-102: Microsoft Certified Azure AI Engineer Associate",
      desc: "The core credential for the track — curriculum maps directly to AI-102 objectives.",
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals",
      desc: "Integrated evening preparation through the program for cloud fundamentals fluency.",
    },
    {
      title: "AZ-204: Azure Developer Associate (optional)",
      desc: "Recommended for learners who want to deepen the Azure Functions and DevOps side.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — LLM Foundations",
      title: "Prompting, APIs & RAG (Days 1–30)",
      summary:
        "From prompt patterns to production RAG — the language-model foundations every GenAI engineer needs.",
      modules: [
        { title: "Enterprise Prompt Engineering", desc: "Zero/few-shot and CoT patterns, temperature & top_p tuning, JSON/XML output schemas, and prompt-injection defense." },
        { title: "Azure OpenAI & LLM APIs", desc: "GPT-4 API calls, streaming, async Python, token management with tiktoken, and LangChain chains." },
        { title: "RAG — Retrieval Augmented Generation", desc: "Embeddings, Azure AI Search vector indexes, chunking strategies, hybrid search, and citation-grounded re-ranking." },
        { title: "Document Intelligence & PII", desc: "Layout and table extraction, Presidio anonymisation operators, and a sanitized document-ingestion pipeline." },
      ],
    },
    {
      phase: "Phase 2 — Azure AI & Agentic Patterns",
      title: "AI Foundry, APIM Gateway & Functions (Days 31–60)",
      summary:
        "The enterprise architecture layer — secure the model, gateway the traffic, and orchestrate statelessly.",
      modules: [
        { title: "AI Foundry & Enterprise Security", desc: "Hub/project architecture, Managed Identity keyless auth, private endpoints, Key Vault, and Content Safety." },
        { title: "APIM as an AI Gateway", desc: "JWT validation policies, rate limiting, semantic caching to cut token cost, and circuit-breaker resilience." },
        { title: "LLM Orchestration with Functions", desc: "Stateless Python Azure Functions v2, dynamic system prompts from Cosmos DB, and role-based prompt routing." },
        { title: "Agentic Patterns & Evaluation", desc: "Function calling for multi-step reasoning, Azure AI Evaluation SDK scoring, and hallucination/red-team testing." },
      ],
    },
    {
      phase: "Phase 3 — Capstones & LLMOps",
      title: "Banking & Supply Chain Sprints (Days 61–90)",
      summary:
        "Six live enterprise capstones, LLMOps hardening, and a panel defense with benchmark scorecards.",
      modules: [
        { title: "Banking AI Capstone Sprint", desc: "Fraud Investigation Assistant — RAG case search, APIM-secured orchestrator, and D365 integration." },
        { title: "Supply Chain AI Capstone Sprint", desc: "Supplier Contract Analyser — clause extraction, compliance RAG, and ERP JSON hand-off via Power Automate." },
        { title: "LLMOps & Production Hardening", desc: "Prompt versioning, regression tests, A/B traffic splitting, and Application Insights cost dashboards." },
        { title: "Final Panel Defense", desc: "Architecture, security posture, groundedness/latency/hallucination benchmarks, and business-ROI cost analysis." },
      ],
    },
  ],
  faqs: [
    {
      q: "How does the enterprise APIM Gateway pattern function in this curriculum?",
      a: "Clients (web portals or Power Automate) connect through Azure APIM, which enforces JWT validation and rate limiting. Requests are forwarded to a stateless Python Azure Function App orchestrator that loads system prompts dynamically from Cosmos DB and queries Azure OpenAI and Azure AI Search via Managed Identity.",
    },
    {
      q: "What background is required for the Generative AI track?",
      a: "Freshers complete a pre-commencement 3-day Python & API bootcamp before Week 1, followed by a linear 6h/day path with evening AZ-900 preparation. Experienced engineers fast-track Phase 1 foundations and join Week 3 directly.",
    },
    {
      q: "How many capstone projects will I ship?",
      a: "Six live enterprise capstones: Fraud Investigation Assistant, Regulatory Policy Q&A Bot, KYC Document Processor, Supplier Contract Analyser, Procurement Policy Chatbot, and Invoice Anomaly Explainer — spanning Banking & Finance and Supply Chain domains.",
    },
    {
      q: "Does the program cover LLMOps and evaluation?",
      a: "Yes — Week 11 is a dedicated LLMOps sprint: prompt versioning and regression testing, A/B testing with live traffic splitting, Application Insights observability with cost dashboards, and Azure DevOps YAML pipelines for automated prompt + code deployments. Evaluation uses the Azure AI Evaluation SDK for groundedness and hallucination metrics.",
    },
  ],
  accentColor: "#7C3AED",
};

/* ---------------------------- ETL Testing ---------------------------- */

const ETL_TESTING_COURSE: Course = {
  slug: "etl-testing",
  code: "GR-ETL-45",
  name: "ETL Testing & Data Warehouse QA",
  category: "Quality & Engineering",
  duration: "45 days (9 weeks)",
  weeklyHours: "2 hrs/day + weekend sessions",
  learningMode: "Morning concept + hands-on SQL labs",
  batchSize: "Small mentor-led cohorts",
  primaryCareerPath: "ETL Test Analyst · DWH QA Specialist · Data Quality Engineer",
  strategicHeadline: "Zero to job-ready ETL Test Analyst in 45 days.",
  tagline: "Extract bugs. Transform quality. Load confidence. · SQL · Informatica · DWH · JIRA",
  executiveSynopsis:
    "A 45-day comprehensive curriculum architected and led by Chandrasekhar Nakka (10+ yrs). You go from core testing fundamentals to production ETL validation: 18 days of Oracle SQL deep-dive, Data Warehouse modeling with Star/Snowflake schemas and SCD Type 1/2/3, Informatica PowerCenter mapping analysis, JIRA Agile workflows, and professional QA artifacts (Test Plans, RTM) across Banking, Insurance, and Telecom projects.",
  targetAudience: [
    "Freshers and any-stream graduates — zero prior experience required.",
    "Manual testers moving into data-warehouse and pipeline QA.",
    "DB administrators formalising their validation skills into QA roles.",
    "Anyone targeting ISTQB CTFL alongside a niche, hireable testing specialty.",
  ],
  prerequisites: [
    "Any graduate — taught from first principles.",
    "No coding background required — SQL is built up over 18 days.",
    "A laptop; Oracle SQL Developer setup is covered in class.",
  ],
  targetOutcome:
    "By the end of the program you can validate end-to-end ETL pipelines: write source-to-target reconciliation queries (Joins, MINUS, Window Functions), reason about Star/Snowflake schemas and SCD Type 2 history, trace Informatica mappings, and author professional QA deliverables inside Agile Scrum teams.",
  keyTakeaways: [
    "Write complex SQL (Joins, MINUS, Window Functions) for source-to-target data validation.",
    "Understand enterprise Data Warehousing: Star/Snowflake schemas, Fact/Dim tables, SCD Type 1/2/3.",
    "Analyze Informatica PowerCenter mappings and trace transformation logic across pipelines.",
    "Execute within Agile Scrum teams using JIRA for ceremonies and defect tracking.",
    "Author professional QA artifacts: Test Plans, Test Scenarios, Test Cases, and RTM.",
  ],
  toolingEcosystem: [
    { domain: "SQL & Database Testing", tools: ["Oracle SQL Developer", "Oracle DB", "PostgreSQL"] },
    { domain: "DWH Architecture", tools: ["Star/Snowflake Schema", "SCD 1/2/3", "Kimball Methodology"] },
    { domain: "ETL Engine", tools: ["Informatica PowerCenter", "Repository", "Designer", "Workflow Manager"] },
    { domain: "Agile & Defects", tools: ["JIRA", "Agile Scrum", "Defect lifecycle"] },
    { domain: "Certification", tools: ["ISTQB CTFL syllabus", "Mock panels"] },
  ],
  productionArtifacts: [
    {
      title: "Source-to-Target Reconciliation Query Suite",
      desc: "A comprehensive validation suite across Banking and Insurance datasets — MINUS queries, join reconciliation, duplicate checks — ensuring 100% data integrity with zero data loss.",
    },
    {
      title: "Informatica Mapping Traceability Dossier",
      desc: "Transformation verification across Source Qualifier, Filter, Aggregator, Expression, and Router mappings — tracing data flow from source to target.",
    },
    {
      title: "Complete QA Deliverable Pack",
      desc: "Industry-standard artifacts: BRD/FRD requirement analysis, Test Scenarios, Test Cases, Requirement Traceability Matrix (RTM), and JIRA defect reports.",
    },
  ],
  certifications: [
    {
      title: "ISTQB — Certified Tester Foundation Level (CTFL)",
      desc: "The global testing benchmark; Phase I covers the CTFL fundamentals directly.",
    },
    {
      title: "Greenroots ETL Testing Certificate",
      desc: "Awarded after the Day 45 real-time project defense across Banking, Insurance, and Telecom scenarios.",
    },
  ],
  phases: [
    {
      phase: "Phase I — Testing Foundations",
      title: "Core Testing Concepts & STLC (Days 1–3)",
      summary:
        "\"A good ETL developer moves data. A great ETL tester proves it moved right.\" Build the QA base first.",
      modules: [
        { title: "Fundamentals of Testing", desc: "Why testing matters, Verification vs Validation, and QA vs QC vs Testing." },
        { title: "Testing Types & Methodologies", desc: "Functional/non-functional, smoke, sanity, regression, re-testing, integration, and UAT." },
        { title: "SDLC, STLC & Real-Time Process", desc: "SDLC models, STLC phases, and the testing process inside corporate projects." },
      ],
    },
    {
      phase: "Phase II — ETL Fundamentals",
      title: "Pipelines, DWH & the ETL Lifecycle (Days 4–6)",
      summary:
        "\"ETL without testing is just guessing with extra steps.\" Learn what you are validating.",
      modules: [
        { title: "ETL Architecture & Pipeline Flow", desc: "Extract-Transform-Load mechanics, staging layers, and enterprise process flows." },
        { title: "Data Warehouse & Table Types", desc: "DWH vs Data Mart, OLTP vs OLAP, and Fact vs Dimension tables." },
        { title: "ETL Testing Lifecycle & Roles", desc: "Lifecycle stages, production challenges, ETL vs DB testing, and tester responsibilities." },
      ],
    },
    {
      phase: "Phase III — DWH Concepts",
      title: "Schemas, SCD & Integrity (Days 7–13)",
      summary:
        "\"Data doesn't lie, but bad ETL does. I'm here to catch it.\" Dimensional modeling in depth.",
      modules: [
        { title: "Warehouse Schemas", desc: "Star vs Snowflake architecture and OLAP/OLTP modeling patterns." },
        { title: "Slowly Changing Dimensions", desc: "SCD Type 1 overwrite, Type 2 historical tracking with dates + flag, and Type 3 previous-value columns." },
        { title: "Keys & Design Approaches", desc: "Kimball vs Inmon, surrogate keys, and natural vs composite keys." },
        { title: "Loading & Integrity + Working Session", desc: "Full vs incremental loads, CDC, referential integrity, normalization, and hands-on Fact/Dim identification." },
      ],
    },
    {
      phase: "Phase IV — SQL Deep-Dive",
      title: "Oracle SQL for ETL Validation (Days 14–31)",
      summary:
        "\"JOIN the source, MINUS the errors, UNION the trust.\" 18 days of SQL — the heart of the track.",
      modules: [
        { title: "SQL Foundations & RDBMS", desc: "Oracle SQL Developer setup, DBMS/RDBMS concepts, DDL, DML, DQL, TCL, and DCL." },
        { title: "Operators, Constraints & Clauses", desc: "Arithmetic/comparison/logical operators, PK/FK constraints, ORDER BY, GROUP BY, HAVING." },
        { title: "Joins & Set Operations", desc: "INNER/LEFT/RIGHT/FULL OUTER and Self joins — plus UNION, INTERSECT, and MINUS for reconciliation." },
        { title: "Window & Character Functions", desc: "ROW_NUMBER, RANK, DENSE_RANK for dedup and ranking; string functions for data cleansing." },
        { title: "ETL Validation Queries", desc: "Source-to-target validation, duplicate checks, reconciliation queries, and real-time interview SQL." },
      ],
    },
    {
      phase: "Phase V — Informatica PowerCenter",
      title: "Mapping Analysis & Transformations (Days 32–35)",
      summary:
        "\"One wrong transformation can cost millions. One good tester prevents it.\"",
      modules: [
        { title: "Informatica Architecture", desc: "Repository, Designer, and Workflow Manager — how enterprise ETL is authored." },
        { title: "Core Transformations", desc: "Source Qualifier and Filter analysis, then Aggregator, Expression, and Router." },
        { title: "Mapping Trace Working Session", desc: "Hands-on tracing of source-to-target data flow through real mappings." },
      ],
    },
    {
      phase: "Phase VI — JIRA & Agile",
      title: "Scrum Framework & Defect Tracking (Days 36–39)",
      summary:
        "\"Precision in transformation, excellence in validation.\" QA inside Agile teams.",
      modules: [
        { title: "Agile & Scrum Framework", desc: "Methodology fundamentals and the four ceremonies — Planning, Standup, Review, Retro." },
        { title: "JIRA in Practice", desc: "Epics, Features, User Stories, Tasks, defect lifecycle — and logging real stories and defects." },
      ],
    },
    {
      phase: "Phase VII — QA Deliverables",
      title: "Test Scenarios, Cases & RTM (Days 40–43)",
      summary:
        "\"My test cases have 0 NULL tolerance for bad data.\" Author production QA documents.",
      modules: [
        { title: "Requirement Analysis", desc: "Reading BRD and FRD documents to derive testable requirements." },
        { title: "Test Scenarios & Cases", desc: "Scenario preparation for DWH pipelines and detailed test-case design." },
        { title: "RTM, Test Plan & Closure", desc: "Traceability matrix, test strategy, defect reports, and closure documentation." },
      ],
    },
    {
      phase: "Phase VIII — Mock Panels",
      title: "Technical & Managerial Defense (Days 44–45)",
      summary:
        "\"SCD Type 2? Tested. Your excuses? Not accepted.\" Interview-grade defense.",
      modules: [
        { title: "Technical Panel", desc: "Advanced SQL whiteboard, ETL lifecycle, DWH schemas, and SCD Type 2 deep dive." },
        { title: "Managerial Panel", desc: "Real-time project explanation (Banking/Insurance/Telecom), Agile defense, and severity-vs-priority triage." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is coding required to become an ETL Test Analyst?",
      a: "Heavy programming is not required. The essential technical skill is SQL, which is taught comprehensively over 18 days — from basic SELECT queries to advanced MINUS data reconciliation and analytical window functions.",
    },
    {
      q: "What domains are covered in the capstone projects?",
      a: "Projects mirror real-world ETL implementations: Banking (Account & Transaction Reconciliation), Insurance (Policy & Claims SCD Type 2 Data Mart), and Telecom (Call Detail Record billing validation).",
    },
    {
      q: "Who leads this training track?",
      a: "The curriculum is architected and instructed by Chandrasekhar Nakka, an industry ETL testing veteran with 10+ years of enterprise experience.",
    },
    {
      q: "How is the brochure delivered?",
      a: "When you submit your verified mobile number and academic background, the full day-by-day 45-day calendar, assignment rubric, and interview dossier unlock instantly.",
    },
  ],
  accentColor: "#0E9384",
};

/* ---------------------------- Power BI ---------------------------- */

const POWER_BI_COURSE: Course = {
  slug: "power-bi",
  code: "GR-PBI-80",
  name: "Power BI Developer Mastery Track",
  category: "Business & Analytics",
  duration: "80 hours intensive hands-on",
  weeklyHours: "8 hrs/week",
  learningMode: "Live interactive + project labs",
  batchSize: "10–12 students",
  primaryCareerPath: "Power BI Developer · BI Analyst · Reporting Specialist",
  strategicHeadline: "Transform raw business data into executive visual dashboards.",
  tagline: "Power Query transformations · DAX data modeling · interactive storytelling · PL-300",
  executiveSynopsis:
    "An 80-hour intensive, hands-on Power BI track. You master data visualization, DAX calculations, semantic data modeling, and business reporting dashboards — from Power Query (M language) transformations to star-schema relationships, advanced CALCULATE and time-intelligence patterns, bookmarks, drill-through pages, and publishing with row-level security to the Power BI Service.",
  targetAudience: [
    "Graduates targeting their first BI developer or reporting role.",
    "Analysts and operations professionals who live in Excel and want to level up.",
    "Finance, sales, and MIS teams that need executive-grade dashboards.",
    "Anyone preparing for the Microsoft PL-300 certification exam.",
  ],
  prerequisites: [
    "Basic spreadsheet familiarity.",
    "No programming background needed — DAX is taught from zero.",
    "A laptop with Power BI Desktop installed (free).",
  ],
  targetOutcome:
    "By the end of the program you can take a raw multi-source dataset, model it into a clean star schema, write complex DAX measures with time intelligence, design an interactive executive dashboard, and publish it securely to the Power BI Service with RLS.",
  keyTakeaways: [
    "Clean and transform complex data sources using Power Query (M language).",
    "Design efficient star schemas, relationships, and filter propagation.",
    "Write complex DAX formulas — CALCULATE, time intelligence, iterators.",
    "Build published executive dashboards with bookmarks, drill-throughs, and mobile views.",
    "Prepare confidently for the PL-300 Data Analyst Associate exam.",
  ],
  toolingEcosystem: [
    { domain: "ETL & Shaping", tools: ["Power Query", "M language", "Data cleansing & merging"] },
    { domain: "Modeling", tools: ["Star schema", "Relationships & cardinality", "Filter propagation"] },
    { domain: "DAX", tools: ["CALCULATE", "Time intelligence", "Iterators", "DAX Studio"] },
    { domain: "Visualization", tools: ["Executive dashboards", "Bookmarks", "Drill-through", "Mobile layouts"] },
    { domain: "Service & Security", tools: ["Power BI Service", "Row-Level Security", "Workspaces & apps"] },
  ],
  productionArtifacts: [
    {
      title: "Executive Financial Health Dashboard",
      desc: "A published Power BI report with year-over-year growth analytics, KPI cards, dynamic slicers, and drill-through pages for finance leadership.",
    },
    {
      title: "Sales Territory & Performance Tracker",
      desc: "A geographic drill-down dashboard tracking territory performance, with bookmarks, tooltips, and a mobile-optimised layout.",
    },
  ],
  certifications: [
    {
      title: "PL-300: Microsoft Power BI Data Analyst Associate",
      desc: "The official Microsoft credential for BI analysts — the curriculum maps directly to PL-300 objectives.",
    },
    {
      title: "Greenroots Power BI Certificate",
      desc: "Awarded after the final dashboard UX review and stakeholder pitch.",
    },
  ],
  phases: [
    {
      phase: "Phase 1 — Power Query ETL",
      title: "Connect, Clean & Transform",
      summary:
        "Every great dashboard starts with trustworthy data — master the M language and ETL workflows.",
      modules: [
        { title: "Connecting Data Sources", desc: "Excel, SQL, CSV, and web sources with query folding basics." },
        { title: "Transformations in M", desc: "Cleaning, merging, appending, unpivoting, and custom columns." },
        { title: "Reusable ETL Patterns", desc: "Parameters, functions, and refresh-safe query design." },
      ],
    },
    {
      phase: "Phase 2 — Data Modeling",
      title: "Star Schemas & Relationships",
      summary:
        "Semantic modeling is what separates dashboard developers from chart makers.",
      modules: [
        { title: "Star Schema Design", desc: "Fact and dimension tables, grain, and conformed dimensions." },
        { title: "Relationships & Cardinality", desc: "One-to-many, many-to-many, bidirectional filters, and their traps." },
        { title: "Filter Propagation", desc: "How filter context flows — and how to debug it." },
      ],
    },
    {
      phase: "Phase 3 — DAX Mastery",
      title: "Measures, CALCULATE & Time Intelligence",
      summary:
        "The calculation engine of Power BI — from row context to advanced time patterns.",
      modules: [
        { title: "DAX Foundations", desc: "Measures vs calculated columns, evaluation context, and variables." },
        { title: "CALCULATE Deep-Dive", desc: "Filter manipulation, context transition, and the engine's most powerful function." },
        { title: "Time Intelligence", desc: "YTD, MTD, prior-year comparisons, rolling averages, and date tables." },
      ],
    },
    {
      phase: "Phase 4 — Dashboard UX & Service",
      title: "Storytelling, RLS & Publishing",
      summary:
        "Design dashboards executives actually use — then deploy them securely.",
      modules: [
        { title: "Interactive Storytelling", desc: "Bookmarks, drill-through pages, tooltips, and report navigation." },
        { title: "Mobile & Layout Design", desc: "Mobile views, visual hierarchy, and performance-friendly design." },
        { title: "Power BI Service & RLS", desc: "Workspaces, apps, scheduled refresh, and row-level security roles." },
      ],
    },
    {
      phase: "Phase 5 — Capstone & PL-300",
      title: "Executive Dashboard + Exam Prep",
      summary:
        "Ship a portfolio-grade dashboard and walk into the PL-300 exam prepared.",
      modules: [
        { title: "Capstone Build", desc: "Executive P&L dashboard with drill-through analytics, from raw data to published report." },
        { title: "Stakeholder Pitch", desc: "Present your dashboard in a final UX review with design and performance feedback." },
        { title: "PL-300 Sprint", desc: "Exam-domain mapping, practice questions, and a study plan." },
      ],
    },
  ],
  faqs: [
    {
      q: "Can non-programmers learn Power BI?",
      a: "Yes! Power BI uses an intuitive visual interface and Excel-like formula logic. DAX is introduced step by step — measures first, then CALCULATE and time intelligence — with hands-on labs after every concept.",
    },
    {
      q: "Is 80 hours enough to become job-ready?",
      a: "The 80 hours are fully hands-on: every concept lands in a lab, and you finish with two production-grade dashboards (Financial Health + Sales Territory) that double as your portfolio for interviews.",
    },
    {
      q: "Does this prepare me for the PL-300 exam?",
      a: "Yes — the curriculum maps to PL-300 domains (prepare data, model data, visualize and analyze data, manage and secure Power BI), and Phase 5 includes a dedicated exam-prep sprint.",
    },
    {
      q: "Do I need Power BI Pro to practice?",
      a: "No. Power BI Desktop is free, and all modeling, DAX, and dashboard work happens locally. The Service publishing module uses a free Fabric trial or workspace provided during the course.",
    },
  ],
  accentColor: "#32D583",
};

/* ---------------------------- Software Testing (Manual + Playwright + API) ---------------------------- */

const SOFTWARE_TESTING_COURSE: Course = {
  slug: "software-testing",
  code: "GR-QA-PW",
  name: "Software Testing: Manual, Playwright & API Automation",
  category: "Quality & Engineering",
  duration: "6 core modules + capstone",
  weeklyHours: "1.5–2 hrs/day + weekend sprints",
  learningMode: "Daily interactive + framework labs",
  batchSize: "10–12 students",
  primaryCareerPath: "QA Automation Engineer · SDET · Playwright Specialist · API Test Engineer",
  strategicHeadline: "From manual QA to production-grade Playwright automation & Jenkins CI/CD.",
  tagline: "Manual testing · JavaScript · Playwright · Postman · Git & GitHub · Jenkins CI/CD",
  executiveSynopsis:
    "A job-ready QA & SDET program built for current hiring — Playwright over legacy Selenium. You master Manual Testing, Agile Scrum in Jira, JavaScript for automation, end-to-end Playwright frameworks with Page Object Model, REST API testing with both Postman and native Playwright request contexts, Git/GitHub collaboration, and Jenkins CI/CD pipelines with automated HTML reporting — capped by a complete automation-framework capstone.",
  targetAudience: [
    "Freshers and CS/IT graduates targeting their first QA role.",
    "Manual testers upskilling to automation and SDET tracks.",
    "Non-IT career switchers — starts from zero with manual testing principles.",
    "QA engineers modernising from Selenium to Playwright.",
  ],
  prerequisites: [
    "None required — starts from zero.",
    "Manual testing principles taught from first principles.",
    "Beginner-friendly JavaScript — no prior coding expected.",
  ],
  targetOutcome:
    "By the end of the program you can design manual test suites with RTM traceability, build a production-grade Playwright + JavaScript framework using POM with parallel and data-driven execution, automate REST API tests in Postman and Playwright, and run it all headlessly in a Jenkins CI/CD pipeline with automated HTML reports — interview-ready for ₹6–16 LPA QA roles.",
  keyTakeaways: [
    "Master SDLC, STLC, manual test case design, defect tracking in Jira, and RTM traceability.",
    "Write modular, object-oriented test code in modern JavaScript using ES6 and async/await.",
    "Build ultrafast, reliable end-to-end automation frameworks with Playwright and Page Object Model.",
    "Automate REST API testing using both Postman and native Playwright request contexts.",
    "Integrate test suites with Git, GitHub, and Jenkins CI/CD pipelines with automated HTML reporting.",
  ],
  toolingEcosystem: [
    { domain: "Manual & Agile", tools: ["STLC", "Jira", "RTM", "Test metrics"] },
    { domain: "Automation Language", tools: ["JavaScript (ES6)", "Node.js", "async/await", "VS Code"] },
    { domain: "UI Automation", tools: ["Playwright", "POM", "Fixtures & hooks", "Trace viewer"] },
    { domain: "API Testing", tools: ["Postman", "REST", "JSON Schema validation", "Playwright request context"] },
    { domain: "Source & CI/CD", tools: ["Git", "GitHub", "Jenkins", "HTML reports"] },
  ],
  productionArtifacts: [
    {
      title: "Playwright POM Automation Framework",
      desc: "A production-ready GitHub repository with Page Object Model, data-driven tests (JSON/CSV), custom fixtures, parallel execution across Chromium/Firefox/WebKit, and rich HTML + trace reporting.",
    },
    {
      title: "REST API Automation Suite",
      desc: "A complete API test suite combining Postman collections with assertions and environment variables, plus native Playwright APIRequestContext tests with JSON-schema validation and API chaining.",
    },
    {
      title: "Jenkins CI/CD Pipeline",
      desc: "An automated pipeline triggered on Git push that runs the Playwright suite headlessly and publishes interactive HTML reports — the exact workflow enterprises run.",
    },
  ],
  certifications: [
    {
      title: "ISTQB Certified Tester Foundation Level (CTFL)",
      desc: "The global QA benchmark — manual testing modules align to the CTFL syllabus.",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      desc: "Earned through the API testing module's Postman collections and chaining labs.",
    },
    {
      title: "Playwright Automation Specialist",
      desc: "Internal certification after the capstone framework defense.",
    },
  ],
  phases: [
    {
      phase: "Module 1 — Manual Testing",
      title: "SDLC, STLC, Defects & Agile in Jira",
      summary:
        "The QA foundation every automation engineer needs — and the part interviews test hardest.",
      modules: [
        { title: "SDLC & STLC", desc: "Life-cycle models, STLC phases, and the 7 testing principles." },
        { title: "Test Levels & Design Techniques", desc: "Unit to UAT, smoke/sanity/regression, scenarios, cases, and test data." },
        { title: "Defect Management & Jira", desc: "Bug lifecycle, Severity vs Priority, Jira tickets, RTM, and test metrics." },
      ],
    },
    {
      phase: "Module 2 — JavaScript for Automation",
      title: "Modern JS, ES6 & Async Programming",
      summary:
        "Exactly the JavaScript automation engineers use — no fluff, framework-focused.",
      modules: [
        { title: "JS Fundamentals", desc: "Variables, types, operators, functions, arrow functions, loops, and conditionals." },
        { title: "Arrays & Objects", desc: "map/filter/reduce, destructuring, spread/rest, and object patterns." },
        { title: "Async JavaScript", desc: "Event loop, callbacks, promises, async/await, modules, and error handling." },
      ],
    },
    {
      phase: "Module 3 — Playwright with JavaScript",
      title: "Locators, POM, Fixtures & Parallel Runs",
      summary:
        "Why Playwright beats legacy tools — speed, auto-waits, isolation — and how to master it.",
      modules: [
        { title: "Setup & Core Interactions", desc: "Test runner, locators (CSS/XPath/role), contexts, web-first assertions, auto-waits." },
        { title: "Advanced UI Handling", desc: "Alerts, iframes, tabs, dropdowns, hover/drag, file upload/download, screenshots, traces." },
        { title: "Framework Architecture", desc: "POM, fixtures & hooks, data-driven tests, native API testing, HTML/Allure reports, parallel cross-browser execution." },
      ],
    },
    {
      phase: "Module 4 — API Testing",
      title: "Postman, REST & Playwright APIs",
      summary:
        "Backend and contract verification — from HTTP fundamentals to chained automation.",
      modules: [
        { title: "API & HTTP Fundamentals", desc: "Methods, status codes, headers, params, body formats, and auth (Basic/Bearer/OAuth 2.0)." },
        { title: "Postman Mastery", desc: "Collections, environments, Chai assertions, and request/response validation." },
        { title: "Advanced API Automation", desc: "API chaining, JSON-schema validation, Playwright APIRequestContext, and UI+API combined tests." },
      ],
    },
    {
      phase: "Module 5 — Git & GitHub",
      title: "Version Control & Team Collaboration",
      summary:
        "Enterprise source-control workflows — the non-negotiable collaboration skill.",
      modules: [
        { title: "Git Fundamentals", desc: "VCS concepts, configuration, SSH, staging, committing, pushing, and logs." },
        { title: "Branching & PRs", desc: "Feature branches, merges, pull requests, conflict resolution, and .gitignore hygiene." },
      ],
    },
    {
      phase: "Module 6 — Jenkins CI/CD & Capstone",
      title: "Pipelines, Headless Runs & Career Launch",
      summary:
        "Wire everything into CI/CD, ship the capstone, and launch the placement drive.",
      modules: [
        { title: "Jenkins Pipelines", desc: "Freestyle vs declarative Jenkinsfile, Git webhooks, and Playwright on Jenkins agents." },
        { title: "Reporting & Notifications", desc: "HTML report publishing, email alerts, and real-time pipeline execution." },
        { title: "Capstone + Mocks", desc: "Full framework capstone, GitHub repo polish, 1-on-1 mocks, ATS resume, and placement launch." },
      ],
    },
  ],
  faqs: [
    {
      q: "Why choose Playwright over Selenium for modern automation testing?",
      a: "Playwright is significantly faster and more reliable than Selenium. It includes built-in auto-waiting (eliminating flaky tests), isolated browser contexts, native API testing capabilities, rich HTML trace viewers, and effortless parallel execution across Chromium, Firefox, and WebKit.",
    },
    {
      q: "Do I need prior coding experience to learn JavaScript and Playwright?",
      a: "No prior programming experience is required. We start with manual testing and introduce JavaScript from first principles — covering variables, loops, objects, and async/await specifically structured for test automation.",
    },
    {
      q: "Does this course cover both UI and API automation?",
      a: "Yes! You learn manual API testing and automation with Postman, as well as native API testing within Playwright, allowing you to combine UI and API tests in the same test runner.",
    },
    {
      q: "How does CI/CD integration work in this program?",
      a: "You will set up Jenkins from scratch, connect your GitHub test repository, write Jenkinsfile pipelines, and configure automated builds that run your Playwright tests headlessly and publish interactive HTML test reports.",
    },
  ],
  accentColor: "#071D3A",
};

/* ---------------------------- SQL in 30 Days ---------------------------- */

const SQL_30D_COURSE: Course = {
  slug: "sql-in-30-days",
  code: "GR-SQL-30D",
  name: "SQL in 30 Days: Zero to Database Mastery",
  category: "Quality & Engineering",
  duration: "30 days (1 hour/day)",
  weeklyHours: "1 hr/day",
  learningMode: "Daily 1-hour step-by-step sessions",
  batchSize: "10–15 students",
  primaryCareerPath: "Database Developer · SQL Specialist · Data Analyst · QA Test Engineer",
  strategicHeadline: "The predictable 1-hour-a-day path to database fluency.",
  tagline: "6 modules · 30 days · 5 practice days · 1 hour a day · Kiran Kumar methodology",
  executiveSynopsis:
    "The day-by-day SQL masterclass by Kiran Kumar: 30 days, 6 modules, 1 hour a day, and 5 dedicated practice days. Each session follows a proven 4-step rhythm — Goal → Relatable Example → Queries with Results → Try-It-Yourself Task. You progress from your first SELECT to multi-table joins, subqueries, CTEs, and window functions (OVER, RANK, LAG/LEAD), then finish with DDL/DML and a Day-30 Shop Analysis capstone answering 8 executive business questions.",
  targetAudience: [
    "Data analysts who want production-grade query skills.",
    "Software developers and QA engineers who touch databases daily.",
    "Freshers building the single most-tested skill in data interviews.",
    "Business professionals who want to answer their own data questions.",
  ],
  prerequisites: [
    "None required — starts from zero.",
    "Every concept is introduced with everyday relatable analogies.",
    "Any laptop — SQL Server (SSMS), MySQL, or PostgreSQL all work.",
  ],
  targetOutcome:
    "By the end of 30 days you can write interview-grade SQL independently: multi-table joins, correlated subqueries, modular CTEs, and window functions for running totals, rankings, and month-on-month growth — proven on a Day-30 capstone that answers 8 real executive business questions.",
  keyTakeaways: [
    "Master SQL querying in 30 bite-sized, 1-hour daily sessions with real-world examples.",
    "Write complex multi-table joins, subqueries, and Common Table Expressions (CTEs).",
    "Calculate running totals, month-on-month changes, and rankings with Window Functions (OVER, RANK, LAG/LEAD).",
    "Build and modify relational tables with primary keys, foreign keys, and safe transactions.",
    "Solve real business problems independently on realistic datasets (employees, orders, customers, products).",
  ],
  toolingEcosystem: [
    { domain: "Databases", tools: ["SQL Server (SSMS)", "MySQL", "PostgreSQL", "DBeaver"] },
    { domain: "Practice Platforms", tools: ["LeetCode SQL", "HackerRank", "SQL 50 study plan"] },
    { domain: "Core Skills", tools: ["Joins", "Subqueries", "CTEs", "Window functions", "DDL/DML"] },
    { domain: "Methodology", tools: ["Goal → Example → Queries → Try-It rhythm", "15-minute golden rule"] },
  ],
  productionArtifacts: [
    {
      title: "Day 30 Shop Analysis Intelligence Engine",
      desc: "A production SQL script answering 8 multi-tier executive questions — revenue by category, top customers, never-ordered products (LEFT JOIN), MoM trends with LAG(), and per-category bestsellers — combining all 6 modules.",
    },
    {
      title: "30-Day Query Script Repository",
      desc: "A GitHub repository with day-by-day query scripts, documented solutions, and sample output tables — plus schema-building scripts for retail/e-commerce and coaching-institute datasets with constraints.",
    },
  ],
  certifications: [
    {
      title: "HackerRank SQL — Gold Badge (5 Stars)",
      desc: "The track drills HackerRank problem sets so you finish with a verified 5-star SQL badge.",
    },
    {
      title: "LeetCode SQL 50 Study Plan Certification",
      desc: "Structured completion of the SQL 50 list — the standard MNC interview question bank.",
    },
    {
      title: "PostgreSQL / Microsoft SQL Server Associate — preparation",
      desc: "Dialect-aware training (TOP vs LIMIT, COALESCE vs IFNULL) prepares you for vendor SQL exams.",
    },
  ],
  phases: [
    {
      phase: "Module 1 — SQL Basics",
      title: "First Queries to Confident Filtering (Days 1–6)",
      summary:
        "Databases, tables, SELECT, WHERE, ORDER BY, DISTINCT — ending in Practice Day 1 on the employees table.",
      modules: [
        { title: "Databases & First Query (Day 1)", desc: "Tables, rows, primary keys, data types — create the employees table and run your first SELECT." },
        { title: "SELECT, Calculations & WHERE (Days 2–3)", desc: "Chosen columns, calculated fields, filters with =, BETWEEN, IN, LIKE, and AND/OR/NOT." },
        { title: "ORDER BY, TOP/LIMIT, DISTINCT (Days 4–5)", desc: "Sorting, Top-N rows across dialects, deduplication, and aliases (AS)." },
        { title: "Practice Day 1 (Day 6)", desc: "5 mixed exercises on filters, sorting, Top-N, DISTINCT — 15-minute golden rule per query." },
      ],
    },
    {
      phase: "Module 2 — Aggregation",
      title: "GROUP BY, HAVING & NULL Logic (Days 7–12)",
      summary:
        "From COUNT(*) to COALESCE — the aggregation toolkit plus the exact query-execution order.",
      modules: [
        { title: "Aggregate Functions (Day 7)", desc: "COUNT/SUM/AVG/MIN/MAX and the COUNT(*) vs COUNT(column) vs COUNT(DISTINCT) distinctions." },
        { title: "GROUP BY & HAVING (Days 8–9)", desc: "Per-group metrics, the GROUP BY syntax law, WHERE vs HAVING, and the FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY pipeline." },
        { title: "NULL & COALESCE (Days 10–11)", desc: "Why = NULL never works, NULL in arithmetic and COUNT, and COALESCE/IFNULL/ISNULL across dialects." },
        { title: "Practice Day 2 (Day 12)", desc: "4 multi-metric business reports combining GROUP BY, HAVING, and COALESCE." },
      ],
    },
    {
      phase: "Module 3 — Joins",
      title: "Combining Tables (Days 13–17)",
      summary:
        "INNER to SELF to 3-table chains — relational thinking on customers, products, orders, employees.",
      modules: [
        { title: "INNER & LEFT JOIN (Days 13–14)", desc: "Key linking, join + GROUP BY metrics, orphan detection, and zero-match counting." },
        { title: "RIGHT & FULL OUTER (Day 15)", desc: "Full-set captures and the MySQL LEFT-UNION-RIGHT workaround." },
        { title: "SELF & 3-Table Joins (Days 16–17)", desc: "Employee→Manager hierarchies and customers+orders+products unified reports — Practice Day 3." },
      ],
    },
    {
      phase: "Module 4 — Subqueries & CTEs",
      title: "Query Decomposition (Days 18–21)",
      summary:
        "Break multi-layer business questions into clean, readable, modular steps.",
      modules: [
        { title: "Subqueries in WHERE (Day 18)", desc: "Scalar comparisons (price > AVG) and IN / NOT IN list filters." },
        { title: "Subqueries in SELECT & FROM (Day 19)", desc: "Inline scalar columns, derived tables, and correlated subqueries." },
        { title: "CTEs + Practice Day 4 (Days 20–21)", desc: "WITH clauses, joining and chaining CTEs, then 3 decomposition drills." },
      ],
    },
    {
      phase: "Module 5 — Window Functions",
      title: "OVER, RANK & LAG/LEAD (Days 22–25)",
      summary:
        "The analytical power set — rankings, running totals, and time-travel comparisons that interviews love.",
      modules: [
        { title: "OVER() Fundamentals (Day 22)", desc: "GROUP BY vs window functions, running sums, and PARTITION BY group averages." },
        { title: "ROW_NUMBER, RANK, DENSE_RANK (Day 23)", desc: "Tie handling and the classic Nth-highest-salary interview problem." },
        { title: "Partitioned Ranking + LAG/LEAD (Days 24–25)", desc: "Top-N per group with CTE filters, percentage shares, and MoM growth calculations." },
      ],
    },
    {
      phase: "Module 6 — DDL/DML & Capstone",
      title: "Build, Modify & the Day 30 Shop Analysis (Days 26–30)",
      summary:
        "Create schemas safely, master transactions — then prove everything on the 8-question capstone.",
      modules: [
        { title: "CREATE TABLE & Constraints (Day 26)", desc: "PRIMARY KEY, NOT NULL, DEFAULT, and what happens when rules break." },
        { title: "FOREIGN KEY & ALTER (Day 27)", desc: "Referential integrity, adding/renaming/dropping columns, and type changes." },
        { title: "INSERT/UPDATE/DELETE + Transactions (Day 28)", desc: "Safe mutations with WHERE guards, BEGIN TRANSACTION, COMMIT, and ROLLBACK." },
        { title: "DELETE vs TRUNCATE vs DROP + Capstone (Days 29–30)", desc: "The cleanup taxonomy, then the Day-30 Shop Analysis: 8 executive questions combining all modules." },
      ],
    },
  ],
  faqs: [
    {
      q: "Is 1 hour a day really enough to master SQL in 30 days?",
      a: "Yes! The curriculum is engineered around Kiran Kumar's proven 4-step daily rhythm: 1. Goal for the day, 2. Relatable everyday example, 3. Queries with exact results, 4. Try-it-yourself practice task. Small daily steps prevent burnout and build rock-solid muscle memory.",
    },
    {
      q: "Which SQL database should I use for this program?",
      a: "You can use either Microsoft SQL Server (SSMS) or MySQL (or PostgreSQL). The curriculum highlights dialect differences — like TOP vs LIMIT, or COALESCE vs IFNULL — so you learn universally portable SQL.",
    },
    {
      q: "How do the 5 practice days work?",
      a: "Days 6, 12, 17, 21, and 30 are dedicated practice days. Instead of new theory, you solve real business questions on realistic tables (employees, orders, customers, products). The golden rule is to attempt each problem for at least 15 minutes before looking at the solution.",
    },
    {
      q: "What is the Day 30 Final Project?",
      a: "On Day 30, you synthesize everything across all 6 modules to answer 8 executive business questions on a retail shop dataset — covering revenue trends, customer churn, category rankings with window functions, and month-on-month changes with LAG.",
    },
  ],
  accentColor: "#EA580C",
};

/* ---------------------------- Registry ---------------------------- */

export const NEW_COURSES: Course[] = [
  DEVOPS_COURSE,
  DATA_ANALYTICS_COURSE,
  DATA_SCIENCE_COURSE,
  BUSINESS_ANALYST_COURSE,
  GENERATIVE_AI_COURSE,
  ETL_TESTING_COURSE,
  POWER_BI_COURSE,
  SOFTWARE_TESTING_COURSE,
  SQL_30D_COURSE,
];

export const COURSE_BY_SLUG: Record<string, Course> = Object.fromEntries(
  NEW_COURSES.map((c) => [c.slug, c])
);
