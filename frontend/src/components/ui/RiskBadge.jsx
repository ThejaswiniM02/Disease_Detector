const STYLES = {
  High: { bg: "#fef2f2", color: "#dc2626", border: "#fecaca" },
  Moderate: { bg: "#fffbeb", color: "#d97706", border: "#fde68a" },
  Low: { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" }
};

export default function RiskBadge({ level }) {
  const s = STYLES[level];
  return (
    <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-semibold uppercase tracking-wider"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
      <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
      {level} Risk
    </span>
  );
}