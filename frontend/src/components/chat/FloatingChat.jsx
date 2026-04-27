"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ArrowUp } from "lucide-react";
import { useChat } from "@/hooks/useChat";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const { messages, loading, sendMessage } = useChat();
  const [value, setValue] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!value.trim() || loading) return;
    sendMessage(value.trim());
    setValue("");
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col rounded-2xl overflow-hidden"
          style={{
            width: "380px", height: "540px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)"
          }}>

          <div className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: "1px solid #f1f5f9", background: "#0f172a" }}>
            <div>
              <p className="text-base font-semibold" style={{ color: "#ffffff" }}>Health Assistant</p>
              <p className="text-sm mt-0.5" style={{ color: "#94a3b8" }}>Ask anything about your symptoms</p>
            </div>
            <button onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)" }}>
              <X size={15} style={{ color: "#ffffff" }} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "#f8fafc" }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%] px-4 py-3 text-base leading-relaxed"
                  style={{
                    background: msg.role === "user" ? "#0f172a" : "#ffffff",
                    border: msg.role === "user" ? "none" : "1px solid #e2e8f0",
                    color: msg.role === "user" ? "#ffffff" : "#0f172a",
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    boxShadow: msg.role === "bot" ? "0 1px 2px rgba(0,0,0,0.04)" : "none"
                  }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm"
                  style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: "#0f172a", animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-4" style={{ borderTop: "1px solid #f1f5f9", background: "#ffffff" }}>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}>
              <input value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder="Ask about symptoms..."
                disabled={loading}
                className="flex-1 text-base bg-transparent outline-none disabled:opacity-40"
                style={{ color: "#0f172a" }} />
              <button onClick={handleSend} disabled={!value.trim() || loading}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: value.trim() ? "#0f172a" : "#e2e8f0" }}>
                <ArrowUp size={15} style={{ color: value.trim() ? "#ffffff" : "#94a3b8" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200"
        style={{
          background: open ? "#f1f5f9" : "#0f172a",
          border: open ? "1.5px solid #e2e8f0" : "none",
          boxShadow: open ? "none" : "0 8px 30px rgba(15,23,42,0.25)"
        }}>
        {open
          ? <X size={20} style={{ color: "#64748b" }} />
          : <MessageCircle size={20} style={{ color: "#ffffff" }} />
        }
      </button>
    </>
  );
}