import React from "react";
import { Film } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film size={18} style={{ color: "var(--gold)" }} />
          <span className="rp-serif text-lg tracking-wide">Reel</span>
        </div>
        <div className="hidden sm:flex items-center gap-5 rp-sans text-sm" style={{ color: "var(--muted)" }}>
          <a href="#work" className="hover:text-[var(--cream)] rp-focus">Explorer</a>
          <a href="#about" className="hover:text-[var(--cream)] rp-focus">About</a>
          <a href="#contact" className="hover:text-[var(--cream)] rp-focus">Contact</a>
        </div>
      </div>
    </header>
  );
}