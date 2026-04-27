"use client";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue("");
  };

  return (
    <div className="p-4" style={{ borderTop: "1px solid #1a1a1e" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
        style={{ background: "#161618", border: "1px solid #232328" }}>
        <input value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          placeholder="Ask about symptoms, risk factors, diet..."
          disabled={disabled}
          className="flex-1 text-sm bg-transparent outline-none disabled:opacity-40"
          style={{ color: "#c8c8cc" }} />
        <button onClick={handleSend} disabled={!value.trim() || disabled}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
          style={{ background: value.trim() ? "#f97316" : "#1e1e24" }}>
          <ArrowUp size={14} style={{ color: value.trim() ? "#0d0d0f" : "#3a3a40" }} />
        </button>
      </div>
    </div>
  );
}