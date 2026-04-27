import SymptomWizard from "@/components/wizard/SymptomWizard";
import { DIABETES_QUESTIONS } from "@/config/diabetesQuestions";
import Link from "next/link";

export default function DiabetesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "#f8fafc" }}>
      <div className="w-full max-w-xl">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors"
          style={{ color: "#94a3b8" }}>
          ← Home
        </Link>
        <div className="p-8 rounded-2xl" style={{ background: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <SymptomWizard questions={DIABETES_QUESTIONS} type="diabetes" title="Diabetes Risk Assessment" />
        </div>
      </div>
    </main>
  );
}