"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Clock, Signal, Laptop, Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { CurriculumDownloadButton } from "@/components/courses/CurriculumDownloadButton";

interface CourseItem {
  title: string;
  tag: string;
  accent: string;
  desc: string;
  duration: string;
  level: string;
  mode: string;
  learn: string[];
  skills: string[];
  roles: string;
  salary: string;
  detailedSlug: string;
}

const ALL_COURSES: CourseItem[] = [
  {
    title: "Power BI Developer Mastery Track",
    tag: "Power BI",
    accent: "#32D583",
    desc: "Transform raw business data into executive dashboards — Power Query transformations, DAX modelling and interactive storytelling.",
    duration: "80 hours",
    level: "Beginner-friendly",
    mode: "Live + labs",
    learn: [
      "Power Query (M language) ETL & data cleansing",
      "Star-schema modelling, relationships & filter propagation",
      "DAX: CALCULATE, time intelligence & iterators",
      "Executive dashboards, RLS & publishing to the Service",
    ],
    skills: ["Power BI Desktop", "DAX", "Power Query", "DAX Studio", "RLS", "PL-300"],
    roles: "Power BI Developer · BI Analyst · Reporting Specialist",
    salary: "₹4–8 LPA",
    detailedSlug: "/courses/power-bi/",
  },
  {
    title: "Business Analyst Job-Ready Program",
    tag: "BA",
    accent: "#0878E8",
    desc: "From Day 1 to Day 37 — Jira, SQL, Power BI, Postman and Notion with a real-time fintech project and 4 transition pathways.",
    duration: "37 days",
    level: "No coding needed",
    mode: "Daily hands-on",
    learn: [
      "Requirement elicitation, BRD/FRD & user stories",
      "Agile Scrum ceremonies, backlog grooming & sprints in Jira",
      "SQL data verification + Postman API testing",
      "Power BI dashboards + ATS resume & mock interviews",
    ],
    skills: ["Jira", "SQL", "Postman", "Power BI", "Notion", "BRD/FRD", "ECBA"],
    roles: "Functional BA · Technical BA · Product Analyst",
    salary: "₹5–25 LPA",
    detailedSlug: "/courses/business-analyst/",
  },
  {
    title: "Software Testing: Manual, Playwright & API",
    tag: "QA Track",
    accent: "#071D3A",
    desc: "Modern QA built for current hiring — manual to production-grade Playwright automation with API testing and Jenkins CI/CD.",
    duration: "6 modules + capstone",
    level: "Starts from zero",
    mode: "Live + labs",
    learn: [
      "Manual testing, STLC, Jira defects & RTM traceability",
      "JavaScript ES6 + async/await for automation",
      "Playwright POM frameworks with parallel execution",
      "API testing (Postman + Playwright) & Jenkins CI/CD",
    ],
    skills: ["Playwright", "JavaScript", "Postman", "Jira", "Git", "Jenkins", "ISTQB"],
    roles: "QA Automation Engineer · SDET · API Test Engineer",
    salary: "₹6–16 LPA",
    detailedSlug: "/courses/software-testing/",
  },
  {
    title: "AI-Powered Product Management",
    tag: "AI-Powered",
    accent: "#7c3aed",
    desc: "Product thinking supercharged by AI — from discovery to roadmap, using GPT tools, analytics and Agile delivery.",
    duration: "16 weeks",
    level: "Mid–senior",
    mode: "Live + mentorship",
    learn: [
      "Product discovery, problem framing & PRDs",
      "Prioritisation & roadmapping (RICE, MoSCoW)",
      "Using AI tools for research, specs & analysis",
      "Metrics, experimentation & stakeholder comms",
    ],
    skills: ["Product Strategy", "AI Tools", "Roadmapping", "Agile", "Analytics"],
    roles: "Associate PM · Product Manager · Product Owner",
    salary: "₹8–18 LPA",
    detailedSlug: "",
  },
  {
    title: "Tricentis Tosca Automation",
    tag: "Automation",
    accent: "#d97706",
    desc: "Enterprise model-based test automation — CI/CD integration, API automation and real project practice with Tosca.",
    duration: "7 weeks",
    level: "QA background",
    mode: "Live + labs",
    learn: [
      "Model-based test design & reusable modules",
      "Test-case design, recovery & maintenance",
      "API & data-driven testing",
      "CI/CD integration & execution reporting",
    ],
    skills: ["Tosca", "CI/CD", "Model-Based Testing", "API Automation"],
    roles: "Automation Engineer · Tosca Specialist · QA Lead",
    salary: "₹6–12 LPA",
    detailedSlug: "",
  },
  {
    title: "Generative AI & Azure AI Engineering",
    tag: "AI & Azure",
    accent: "#7c3aed",
    desc: "Enterprise LLM engineering on Azure — RAG, APIM AI Gateway, Azure Functions orchestration and 6 live capstones.",
    duration: "90 days",
    level: "Fresher + Exp. tracks",
    mode: "Azure-native labs",
    learn: [
      "Prompt engineering & Azure OpenAI (GPT-4) APIs",
      "RAG with Azure AI Search & Document Intelligence",
      "APIM gateway + stateless Function App orchestration",
      "LLMOps — evaluation, A/B testing & CI/CD",
    ],
    skills: ["Azure OpenAI", "RAG", "APIM", "LangChain", "Azure Functions", "AI-102"],
    roles: "Azure AI Engineer · GenAI Specialist · LLM Architect",
    salary: "₹8–18 LPA",
    detailedSlug: "/courses/generative-ai-azure/",
  },
  {
    title: "ETL Testing & Data Warehouse QA",
    tag: "Data QA",
    accent: "#0E9384",
    desc: "Zero to ETL Test Analyst in 45 days — Oracle SQL, DWH & SCD concepts, Informatica mapping analysis and reconciliation queries.",
    duration: "45 days",
    level: "Zero experience OK",
    mode: "Live + SQL labs",
    learn: [
      "Testing fundamentals, STLC & QA deliverables",
      "DWH schemas, Fact/Dim tables & SCD Type 1/2/3",
      "18-day Oracle SQL deep-dive + MINUS reconciliation",
      "Informatica mapping analysis & JIRA defect tracking",
    ],
    skills: ["Oracle SQL", "Informatica", "DWH", "SCD", "JIRA", "ISTQB"],
    roles: "ETL Test Analyst · DWH QA Specialist · Data Quality Engineer",
    salary: "₹4–9 LPA",
    detailedSlug: "/courses/etl-testing/",
  },
  {
    title: "SQL in 30 Days: Zero to Mastery",
    tag: "SQL",
    accent: "#EA580C",
    desc: "One hour a day for 30 days — from your first SELECT to window functions, CTEs and a Day-30 shop analytics capstone.",
    duration: "30 days · 1 hr/day",
    level: "Absolute beginner",
    mode: "Daily guided",
    learn: [
      "SELECT basics, filtering, sorting & aliases",
      "Aggregations, GROUP BY, HAVING & NULL handling",
      "Multi-table joins, subqueries & CTEs",
      "Window functions — OVER, RANK, LAG/LEAD + capstone",
    ],
    skills: ["SQL Server", "MySQL", "PostgreSQL", "Window Fns", "CTEs", "HackerRank"],
    roles: "Database Developer · SQL Specialist · Data Analyst",
    salary: "₹4–10 LPA",
    detailedSlug: "/courses/sql-in-30-days/",
  },
  {
    title: "DevSecOps Mastery Track",
    tag: "Cloud + Security",
    accent: "#00AFA8",
    desc: "16 modules and 25+ tools — Docker to Kubernetes, Terraform to AWS — building a full, secure delivery pipeline.",
    duration: "3 months",
    level: "Some IT exp.",
    mode: "Cloud labs",
    learn: [
      "Containers & orchestration (Docker, Kubernetes)",
      "Infrastructure as Code with Terraform",
      "CI/CD pipelines with GitHub Actions",
      "Security scanning, secrets (Vault) & AWS",
    ],
    skills: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions", "SonarQube"],
    roles: "DevOps Engineer · DevSecOps Engineer · Cloud Engineer",
    salary: "₹7–15 LPA",
    detailedSlug: "/courses/devops/",
  },
  {
    title: "Data Analytics for Freshers",
    tag: "Analytics",
    accent: "#32D583",
    desc: "A complete entry-level analytics stack — Python, SQL, Excel, Power BI and Tableau — with live projects from week one.",
    duration: "10 weeks",
    level: "Freshers welcome",
    mode: "Live + recorded",
    learn: [
      "Excel & statistics foundations",
      "SQL querying & data wrangling",
      "Python with Pandas for analysis",
      "Dashboards in Power BI & Tableau",
    ],
    skills: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
    roles: "Data Analyst · MIS Analyst · Reporting Analyst",
    salary: "₹3.5–7 LPA",
    detailedSlug: "/courses/data-analytics/",
  },
  {
    title: "Data Science & AI (DSP Track)",
    tag: "Advanced",
    accent: "#0878E8",
    desc: "Machine learning, deep learning and NLP with portfolio-grade capstone projects — for graduates ready to go deep.",
    duration: "3 months",
    level: "Graduates+",
    mode: "Live + mentorship",
    learn: [
      "Python, statistics & feature engineering",
      "Supervised & unsupervised ML (scikit-learn)",
      "Deep learning & NLP fundamentals",
      "End-to-end capstone & model deployment",
    ],
    skills: ["Python", "ML", "Deep Learning", "NLP", "scikit-learn"],
    roles: "Data Scientist · ML Engineer (Jr) · AI Analyst",
    salary: "₹6–14 LPA",
    detailedSlug: "/courses/data-science/",
  },
];

// Show all programs that have detailed subpages.
const VISIBLE_COURSES = ALL_COURSES.filter((c) => c.detailedSlug !== "");

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />

      <main className="flex-1 pt-18 lg:pt-20 pb-20 bg-slate-50/60">
        {/* Page Hero Header */}
        <section className="relative bg-[#03101F] overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 text-white">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(234,88,12,0.12),transparent_60%)] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2}>
                9 High-Demand Programs · Industry-Mapped Curriculums
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              High-Demand Tech Tracks<br />
              <span className="bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6] bg-clip-text text-transparent">
                Built for 2026.
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              Nine focused tracks — Data Analytics, Data Science, DevSecOps, Business Analyst, Generative AI,
              ETL Testing, Power BI, Software Testing, and SQL — each with a detailed curriculum you can download.
              Training at our Hyderabad campus and Bengaluru office, with placement support in both cities.
            </p>

            {/* Pricing Banner */}
            <div className="relative overflow-hidden mt-8 sm:mt-10 max-w-4xl mx-auto bg-gradient-to-r from-[#03101F] via-[#04132A] to-[#03101F] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-left">
              <BorderBeam
                colorFrom="#00B8E6"
                colorTo="#00B8E6"
                duration={7}
                size={130}
                borderWidth={1.5}
                radius={16}
              />
              <div className="relative z-10 w-full sm:w-auto text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">From ₹20,000 onwards</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-200 mt-1 font-medium">
                  All programs · <strong className="text-white">2 to 3 months</strong> · EMI available on request
                </div>
              </div>
              <div className="relative z-10 w-full sm:w-auto shrink-0">
                <MagneticButton asChild strength={14} className="w-full sm:w-auto">
                  <Link
                    href="/contact/"
                    className="w-full sm:w-auto min-h-[48px] justify-center px-6 py-3 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/25 shrink-0 inline-flex items-center gap-2 cursor-pointer"
                  >
                    Get Fee Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Smooth bottom transition */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-b from-transparent to-slate-50/60 pointer-events-none" />
        </section>

        {/* Courses Grid — all programs with detailed subpages */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {VISIBLE_COURSES.map((course, idx) => (
              <TiltCard
                key={course.title}
                maxTilt={4}
                scale={1.012}
                glare={true}
                glareOpacity={0.08}
                className="h-full rounded-2xl"
              >
                <div className="gr-accent-top relative h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300/90 transition-all duration-300 flex flex-col overflow-hidden">
                  {idx === 0 && (
                    <BorderBeam
                      colorFrom="#0878E8"
                      colorTo="#00B8E6"
                      duration={6}
                      size={100}
                      borderWidth={1.5}
                      radius={16}
                    />
                  )}
                  {/* Card Top */}
                  <div className="p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs"
                        style={{ backgroundColor: course.accent }}
                      >
                        {course.tag}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">{course.mode}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {course.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium text-slate-500 pt-3 border-t border-slate-100">
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Clock className="h-3.5 w-3.5 text-[#0878E8]" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Signal className="h-3.5 w-3.5 text-[#0878E8]" /> {course.level}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                        <Laptop className="h-3.5 w-3.5 text-[#0878E8]" /> {course.mode}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3.5">
                        What you&apos;ll master
                      </h4>
                      <ul className="space-y-2.5">
                        {course.learn.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <span className="h-4.5 w-4.5 rounded-full bg-emerald-50 text-[#0878E8] flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                              <Check className="h-3 w-3 stroke-[2.5]" />
                            </span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {course.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-lg bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 font-semibold border border-slate-200/60 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome + Action */}
                    <div className="pt-5 border-t border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                        <div>
                          <div className="text-[11px] uppercase font-bold text-slate-400">Leads to roles</div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-800">{course.roles}</div>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <div className="text-[11px] uppercase font-bold text-slate-400">Typical pay</div>
                          <div className="text-sm sm:text-base font-black text-[#0878E8]">{course.salary}</div>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <Link
                          href={course.detailedSlug}
                          className="w-full min-h-[48px] py-3.5 px-4 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold text-sm rounded-xl text-center transition-all shadow-md shadow-[#32D583]/20 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                        >
                          Explore Detailed Curriculum →
                        </Link>
                        <CurriculumDownloadButton
                          variant="ghost"
                          label="Download Curriculum"
                          className="w-full !min-h-[44px] !py-2.5 !text-xs !font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Career Audit Callout */}
          <div className="mt-12 sm:mt-16 relative overflow-hidden bg-gradient-to-r from-[#03101F] via-[#04132A] to-[#03101F] text-white rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-500/25">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Not sure which course is right for you?
              </h2>
              <p className="mt-2.5 text-xs sm:text-base text-emerald-100/80 max-w-2xl leading-relaxed">
                Book a free career audit session. We&apos;ll review your background, market demand, and salary potential — then recommend the exact track that gives you the strongest return.
              </p>
            </div>
            <MagneticButton asChild strength={14} className="w-full md:w-auto shrink-0 relative z-10">
              <Link
                href="/contact/"
                className="w-full md:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/25 shrink-0 inline-flex items-center gap-2 text-center cursor-pointer"
              >
                Book Free Audit →
              </Link>
            </MagneticButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
