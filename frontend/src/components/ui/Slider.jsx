"use client";

export default function Slider({ label, id, min, max, step, value, unit, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-lg font-medium" style={{ color: "#475569" }}>{label}</label>
        <span className="text-lg font-semibold px-4 py-1.5 rounded-lg"
          style={{ background: "#0f172a", color: "#ffffff", border: "none" }}>
          {typeof value === "number" && step < 1 ? value.toFixed(2) : value}{unit}
        </span>
      </div>
      <input
        type="range" id={id} min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(id, step < 1 ? parseFloat(e.target.value) : parseInt(e.target.value))}
        className="w-full"
        style={{ background: `linear-gradient(to right, #0f172a ${pct}%, #e2e8f0 ${pct}%)` }}
      />
      <div className="flex justify-between text-base" style={{ color: "#94a3b8" }}>
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}