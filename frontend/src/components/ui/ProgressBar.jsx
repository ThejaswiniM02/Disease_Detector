export default function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-base" style={{ color: "#94a3b8" }}>
        <span>{current} / {total}</span>
        <span style={{ color: "#0f172a", fontWeight: "600" }}>{pct}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full" style={{ background: "#e2e8f0" }}>
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: "#0f172a" }} />
      </div>
    </div>
  );
}