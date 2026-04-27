import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const FloatingChat = dynamic(() => import("@/components/chat/FloatingChat"), { ssr: false });

export const metadata = {
  title: "Disease Detector",
  description: "AI-powered health risk assessment"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen" style={{ background: "#ffffff", fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        <div style={{ paddingTop: "64px" }}>
          {children}
        </div>
        <FloatingChat />
      </body>
    </html>
  );
}