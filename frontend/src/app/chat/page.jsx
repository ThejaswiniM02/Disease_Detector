"use client";
import ChatWindow from "@/components/chat/ChatWindow";
import ChatInput from "@/components/chat/ChatInput";
import { useChat } from "@/hooks/useChat";
import Link from "next/link";

export default function ChatPage() {
  const { messages, loading, sendMessage } = useChat();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "#0d0d0f" }}>
      <div className="w-full max-w-xl flex flex-col" style={{ height: "80vh" }}>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs mb-4 transition-colors"
          style={{ color: "#3a3a40" }}>
          ← Home
        </Link>
        <div className="flex-1 rounded-2xl flex flex-col overflow-hidden"
          style={{ background: "#111113", border: "1px solid #1e1e24" }}>
          <div className="px-6 py-4" style={{ borderBottom: "1px solid #1a1a1e" }}>
            <h1 className="text-sm font-semibold" style={{ color: "#e8e8ea" }}>Health Assistant</h1>
            <p className="text-xs mt-0.5" style={{ color: "#3a3a40" }}>
              Powered by LLaMA · Not medical advice
            </p>
          </div>
          <ChatWindow messages={messages} loading={loading} />
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      </div>
    </main>
  );
}