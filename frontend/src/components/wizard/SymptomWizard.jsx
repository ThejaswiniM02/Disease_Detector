"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionStep from "./QuestionStep";
import ResultCard from "./ResultCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { usePrediction } from "@/hooks/usePrediction";

export default function SymptomWizard({ questions, type, title }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(
    Object.fromEntries(questions.map((q) => [q.id, q.default]))
  );
  const [direction, setDirection] = useState(1);
  const { result, loading, error, submit, reset } = usePrediction(type);

  const current = questions[step];
  const isLast = step === questions.length - 1;

  const handleChange = (id, value) => setForm((prev) => ({ ...prev, [id]: value }));
  const goNext = () => { setDirection(1); if (isLast) submit(form); else setStep(s => s + 1); };
  const goBack = () => { setDirection(-1); setStep(s => s - 1); };
  const handleReset = () => {
    reset(); setStep(0);
    setForm(Object.fromEntries(questions.map((q) => [q.id, q.default])));
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -30 : 30, opacity: 0 })
  };

  if (result) return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <ResultCard result={result} onReset={handleReset} type={type} />
    </motion.div>
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold" style={{ color: "#0f172a", letterSpacing: "-0.02em" }}>{title}</h1>
          <span className="text-base px-3 py-1.5 rounded-lg"
            style={{ background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }}>
            {step + 1} / {questions.length}
          </span>
        </div>
        <ProgressBar current={step + 1} total={questions.length} />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={step} custom={direction} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}>
          <QuestionStep question={current} value={form[current.id]} onChange={handleChange} />
        </motion.div>
      </AnimatePresence>

      {error && (
        <p className="text-base p-4 rounded-lg"
          style={{ color: "#dc2626", background: "#fef2f2", border: "1px solid #fecaca" }}>
          {error}
        </p>
      )}

      <div className="flex gap-3 pt-2">
        {step > 0 && (
          <button onClick={goBack}
            className="flex-1 py-4 rounded-xl text-lg font-medium transition-all"
            style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", color: "#64748b" }}>
            ← Back
          </button>
        )}
        <button onClick={goNext} disabled={loading}
          className="flex-1 py-4 rounded-xl text-lg font-semibold transition-all disabled:opacity-40"
          style={{ background: loading ? "#f1f5f9" : "#0f172a", color: loading ? "#94a3b8" : "#ffffff" }}>
          {loading ? "Analyzing..." : isLast ? "Get Results →" : "Continue →"}
        </button>
      </div>
    </div>
  );
}