export default function ChatBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[78%] px-4 py-2.5 text-sm leading-relaxed"
        style={{
          background: isUser ? "#f97316" : "#161618",
          border: isUser ? "none" : "1px solid #1e1e24",
          color: isUser ? "#0d0d0f" : "#c8c8cc",
          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          fontWeight: isUser ? "500" : "400"
        }}>
        {message.text}
      </div>
    </div>
  );
}