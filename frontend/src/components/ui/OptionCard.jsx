"use client";

export default function OptionCard({ option, selected, onSelect }) {
  return (
    <button onClick={() => onSelect(option.value)}
      className="w-full p-5 rounded-xl text-left transition-all duration-150"
      style={{
        background: selected ? "#0f172a" : "#ffffff",
        border: `1.5px solid ${selected ? "#0f172a" : "#e2e8f0"}`,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
          style={{ borderColor: selected ? "#ffffff" : "#cbd5e1" }}>
          {selected && <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffffff" }} />}
        </div>
        <span className="text-lg font-medium" style={{ color: selected ? "#ffffff" : "#475569" }}>
          {option.label}
        </span>
      </div>
    </button>
  );
}