"use client";
import Link from "next/link";
import { Heart, Activity, Shield, Zap, Lock } from "lucide-react";

const CARDS = [
  {
    href: "/heart",
    icon: Heart,
    title: "Heart Disease Check",
    description: "Answer 13 clinical questions to assess your cardiovascular risk using a trained ML model.",
    questions: "13 questions",
    time: "~3 mins"
  },
  {
    href: "/diabetes",
    icon: Activity,
    title: "Diabetes Risk Check",
    description: "Evaluate your diabetes risk based on glucose levels, BMI, insulin, and lifestyle factors.",
    questions: "8 questions",
    time: "~2 mins"
  }
];

const FEATURES = [
  { icon: Zap, title: "Instant Results", desc: "ML-powered predictions in seconds" },
  { icon: Shield, title: "Clinically Informed", desc: "Based on UCI medical datasets" },
  { icon: Lock, title: "Private & Local", desc: "Your data never leaves your device" }
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#ffffff" }}>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ background: "#f1f5f9", color: "#0f172a", border: "1px solid #e2e8f0" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#0f172a" }} />
          AI-Powered Health Assessment
        </div>

        <h1 className="text-6xl font-bold tracking-tight mb-4" style={{ color: "#0f172a", letterSpacing: "-0.03em" }}>
          Know Your Risk.
        </h1>
        <h1 className="text-6xl font-bold tracking-tight mb-6" style={{ color: "#64748b", letterSpacing: "-0.03em" }}>
          Take Control.
        </h1>
        <p className="text-xl max-w-xl mx-auto mb-8" style={{ color: "#64748b", lineHeight: "1.7" }}>
          Answer a few guided questions and get an instant AI-powered health risk assessment for heart disease and diabetes.
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm mb-16"
          style={{ background: "#fefce8", border: "1px solid #fde68a", color: "#92400e" }}>
          ⚠️ For informational purposes only — not a substitute for professional medical advice.
        </div>

        {/* Cards */}
        <div className="grid gap-4 max-w-2xl mx-auto">
          {CARDS.map(({ href, icon: Icon, title, description, questions, time }) => (
            <Link key={href} href={href}
              className="group flex items-center gap-6 p-7 rounded-2xl text-left transition-all duration-200"
              style={{ background: "#ffffff", border: "1.5px solid #e2e8f0" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#0f172a";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(15,23,42,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "#f1f5f9" }}>
                <Icon size={24} style={{ color: "#0f172a" }} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl font-semibold" style={{ color: "#0f172a" }}>{title}</span>
                  <span className="text-sm px-3 py-1 rounded-full"
                    style={{ background: "#f1f5f9", color: "#64748b" }}>
                    {questions}
                  </span>
                  <span className="text-sm px-3 py-1 rounded-full"
                    style={{ background: "#f1f5f9", color: "#64748b" }}>
                    {time}
                  </span>
                </div>
                <p className="text-base" style={{ color: "#64748b", lineHeight: "1.6" }}>{description}</p>
              </div>

              <span className="flex-shrink-0 text-2xl transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: "#cbd5e1" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Features strip */}
      <div className="border-t" style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}>
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#0f172a" }}>
                <Icon size={20} style={{ color: "#ffffff" }} />
              </div>
              <p className="font-semibold text-base mb-1" style={{ color: "#0f172a" }}>{title}</p>
              <p className="text-sm" style={{ color: "#64748b" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "82%", label: "Heart Model Accuracy" },
            { value: "75%", label: "Diabetes Model Accuracy" },
            { value: "100%", label: "Private & Local" }
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-6 rounded-2xl"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div className="text-4xl font-bold mb-1" style={{ color: "#0f172a" }}>{value}</div>
              <div className="text-sm" style={{ color: "#94a3b8" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm pb-8" style={{ color: "#cbd5e1" }}>
        Next.js · Spring Boot · FastAPI · LangChain · Ollama
      </p>
    </main>
  );
}