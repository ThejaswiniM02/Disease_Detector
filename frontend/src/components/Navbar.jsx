"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Activity, Home } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/heart", label: "Heart", icon: Heart },
  { href: "/diabetes", label: "Diabetes", icon: Activity },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4"
      style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e2e8f0" }}>

      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "#0f172a" }}>
          <span style={{ color: "#ffffff", fontSize: "14px" }}>⚕</span>
        </div>
        <span className="font-bold text-base" style={{ color: "#0f172a", letterSpacing: "-0.02em" }}>
          Disease Detector
        </span>
      </Link>

      <div className="flex items-center gap-1">
        {LINKS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                background: active ? "#0f172a" : "transparent",
                color: active ? "#ffffff" : "#64748b",
                border: "1px solid transparent"
              }}>
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}