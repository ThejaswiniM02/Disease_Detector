import { useState, useCallback } from "react";
import { sendChatMessage } from "@/services/api";

const INITIAL_MESSAGES = [
  {
    role: "bot",
    text: "Hi! I'm your health assistant. Ask me anything about heart disease, diabetes, symptoms, or general wellness. I'm here to inform — not diagnose.",
    id: Date.now()
  }
];

export function useChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", text, id: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await sendChatMessage(text);
      const botMsg = { role: "bot", text: res.data.reply, id: Date.now() + 1 };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errMsg = {
        role: "bot",
        text: "Sorry, I couldn't connect to the health assistant. Please try again.",
        id: Date.now() + 1,
        isError: true
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { messages, loading, sendMessage };
}