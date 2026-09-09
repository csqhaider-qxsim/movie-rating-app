import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="rp-sans text-sm" style={{ color: "var(--muted)" }}>
          Built by Qasim — <a href="#" className="rp-focus" style={{ color: "var(--gold)" }}>cs.qhaider@gmail.com</a>
        </p>
        <div className="flex items-center gap-4" style={{ color: "var(--muted)" }}>
          <Github size={16} />
          <Linkedin size={16} />
        </div>
      </div>
    </footer>
  );
}