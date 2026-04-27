"use client";
import Slider from "@/components/ui/Slider";
import OptionCard from "@/components/ui/OptionCard";

export default function QuestionStep({ question, value, onChange }) {
  return (
    <div className="space-y-8">
      <p className="text-2xl font-medium leading-relaxed" style={{ color: "#0f172a", letterSpacing: "-0.01em" }}>
        {question.question}
      </p>
      {question.type === "slider" && (
        <Slider id={question.id} label={question.label}
          min={question.min} max={question.max} step={question.step}
          unit={question.unit} value={value} onChange={onChange} />
      )}
      {question.type === "select" && (
        <div className="space-y-3">
          {question.options.map((opt) => (
            <OptionCard key={opt.value} option={opt}
              selected={value === opt.value}
              onSelect={(val) => onChange(question.id, val)} />
          ))}
        </div>
      )}
    </div>
  );
}