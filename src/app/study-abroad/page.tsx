"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StudyAbroadDestinations } from "@/components/sections/StudyAbroadDestinations";
import { StudyAbroadServices } from "@/components/sections/StudyAbroadServices";
import {
  Globe,
  Plane,
  GraduationCap,
  Stamp,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SITE_WHATSAPP_URL } from "@/lib/site";

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Free Counselling",
    desc: "A one-hour deep-dive maps your goals, budget, and qualification fit — and shortlists 5–8 realistic targets.",
  },
  {
    step: "02",
    title: "Shortlist & Tests",
    desc: "Ambitious / target / safe picks across intakes, plus a diagnostic-led IELTS / PTE / GRE / GMAT prep plan.",
  },
  {
    step: "03",
    title: "Applications & SOPs",
    desc: "SOPs, LORs, resumes, transcripts, and financial docs — we draft, you approve. No template-y AI SOPs.",
  },
  {
    step: "04",
    title: "Visa & Offers",
    desc: "Country-specific visa paperwork, mock interviews, and financial documentation — with a 96% visa success rate.",
  },
  {
    step: "05",
    title: "Fly Prepared",
    desc: "Forex, accommodation, flights, sim cards, packing lists, and cultural orientation before you board.",
  },
];

const WHY_POINTS = [
  {
    title: "Official Partner — SIG Global Edu",
    desc: "A dedicated study-abroad desk operating with Greenroots' counselling standards — not a referral commission machine.",
  },
  {
    title: "96% Visa Success Rate",
    desc: "Country-specific paperwork prep, mock interviews, and financial documentation that stands up to scrutiny.",
  },
  {
    title: "One Roof — Training + Abroad",
    desc: "Upskill with our job-ready tech tracks and pursue your masters abroad — career strategy aligned end to end.",
  },
];

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(8,120,232,0.14)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#32D583]/25 via-[#0878E8]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.2)]">
              <Globe className="h-3.5 w-3.5 text-amber-400" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2}>
                Greenroots × SIG Global Edu — Official Partner
              </ShineText>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Study Abroad —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6]">
                Where do you want to land?
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              From your first question to your boarding pass — free counselling, university
              shortlisting, applications, visa guidance, test prep, and pre-departure support.
              Eight popular destinations our students choose.
            </p>

            {/* Badges */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                🎓 8 Popular Destinations
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                🛂 96% Visa Success Rate
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                📋 6 Structured Service Stages
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                📝 IELTS · PTE · GRE · GMAT · TOEFL
              </span>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
              <MagneticButton asChild strength={14} className="w-full sm:w-auto">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/25 hover:shadow-xl inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                >
                  Get Free Counselling →
                </Link>
              </MagneticButton>
              <MagneticButton asChild strength={10} className="w-full sm:w-auto">
                <a
                  href="#destinations"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/[0.15] hover:border-white/30 transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                >
                  Explore Destinations ↓
                </a>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Destinations — live-site section component (same styling) */}
        <div id="destinations" className="scroll-mt-20">
          <StudyAbroadDestinations />
        </div>

        {/* Services — live-site section component (same styling) */}
        <StudyAbroadServices />

        {/* Journey timeline */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
                Your Journey
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
                Five Steps to Your First Semester Abroad
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
                Each stage has clear deliverables, named owners, and a timeline you can hold us to.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
              {JOURNEY_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300/80 transition-all duration-300 flex items-start gap-5 sm:gap-6 group"
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-[#0878E8] to-[#03101F] text-white font-black flex items-center justify-center text-base sm:text-xl shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Greenroots × SIG */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              Counselling That Puts You First
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {WHY_POINTS.map((w) => (
              <TiltCard
                key={w.title}
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.08}
                className="h-full rounded-3xl"
              >
                <div className="h-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col">
                  <div className="h-11 w-11 rounded-xl bg-[#0878E8]/10 text-[#0878E8] flex items-center justify-center mb-4">
                    {w.title.includes("Visa") ? (
                      <Stamp className="h-5 w-5" />
                    ) : w.title.includes("Partner") ? (
                      <ShieldCheck className="h-5 w-5" />
                    ) : (
                      <GraduationCap className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2.5">{w.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#03101F] via-[#04132A] to-[#03101F] rounded-3xl p-8 sm:p-12 lg:p-14 text-white text-center shadow-2xl border border-emerald-500/25">
            <BorderBeam
              colorFrom="#00B8E6"
              colorTo="#00B8E6"
              duration={6}
              size={140}
              borderWidth={1.5}
              radius={24}
            />
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                Ready to board? Start with a free counselling hour.
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/80 mt-3 max-w-xl mx-auto leading-relaxed">
                Walk in with questions, walk out with a country shortlist, a budget map, and a
                test-prep plan — free, at our Kukatpally campus or over a call.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
                <MagneticButton asChild strength={15} className="w-full sm:w-auto">
                  <Link
                    href="/contact/"
                    className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/30 inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                  >
                    <Plane className="h-4 w-4" />
                    Book Free Counselling →
                  </Link>
                </MagneticButton>
                <a
                  href={SITE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/[0.15] hover:border-white/30 transition-all inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
              <p className="mt-6 text-xs text-emerald-100/60 inline-flex items-center gap-1.5">
                Free diagnostic test included · No advance for counselling
                <ArrowRight className="h-3 w-3" />
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
