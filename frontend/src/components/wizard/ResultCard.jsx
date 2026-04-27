"use client";
import RiskBadge from "@/components/ui/RiskBadge";

export default function ResultCard({ result, onReset, type }) {
  const label = type === "heart" ? "Heart Disease" : "Diabetes";

  return (
    <div className="space-y-5">
      <div className="text-center py-8 rounded-2xl space-y-4"
        style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
          {label} Risk Assessment
        </p>
        <div className="text-7xl font-bold tracking-tight" style={{ color: "#0f172a", letterSpacing: "-0.04em" }}>
          {(result.probability * 100).toFixed(1)}
          <span className="text-3xl font-normal" style={{ color: "#94a3b8" }}>%</span>
        </div>
        <RiskBadge level={result.riskLevel} />
      </div>

      <div className="p-6 rounded-2xl" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#94a3b8" }}>
          Recommendation
        </p>
        <p className="text-lg" style={{ color: "#0f172a", lineHeight: "1.7" }}>{result.recommendation}</p>
      </div>

      <div className="p-6 rounded-2xl space-y-5" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>
          Top Contributing Factors
        </p>
        {(result.topFactors || []).map((f, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-base" style={{ color: "#475569" }}>{f.feature}</span>
              <span className="text-base font-semibold" style={{ color: "#0f172a" }}>{(f.importance * 100).toFixed(1)}%</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "#e2e8f0" }}>
              <div className="h-full rounded-full"
                style={{ width: `${f.importance * 100}%`, background: "#0f172a" }} />
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-center" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
        ⚠️ {result.disclaimer}
      </p>

      <button onClick={onReset}
        className="w-full py-4 rounded-xl text-lg font-medium transition-all"
        style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0", color: "#64748b" }}>
        Start Over
      </button>
    </div>
  );
}