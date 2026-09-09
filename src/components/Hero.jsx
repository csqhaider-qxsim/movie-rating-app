import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { IMG_BASE } from "../api/tmdb.js";
import StarRating from "./StarRating.jsx";

export default function Hero({ featured, onSelect }) {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-14 pb-10 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
      <div>
        <p className="rp-sans text-sm mb-3" style={{ color: "var(--muted)" }}>
          A portfolio project by <span style={{ color: "var(--cream)" }}>Qasim Haider</span> — full-stack developer
        </p>
        <h1 className="rp-serif leading-[1.05] mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
          A small, well-lit place to browse films worth watching.
        </h1>
        <p className="rp-sans mb-7" style={{ color: "var(--muted)", maxWidth: "38ch", lineHeight: 1.6 }}>
          Search live movie data, sort by what matters to you, and open any title for the full synopsis,
          cast, and rating.
        </p>
        <div className="flex items-center gap-4 rp-sans text-sm">
          <a
            href="#work"
            className="px-4 py-2 rounded-sm rp-focus"
            style={{ background: "var(--gold)", color: "#1a1408", fontWeight: 600 }}
          >
            Browse the collection
          </a>
          <div className="flex items-center gap-3" style={{ color: "var(--muted)" }}>
            <Github size={16} />
            <Linkedin size={16} />
            <Mail size={16} />
          </div>
        </div>
      </div>

      <div className="rp-stub" style={{ minHeight: 320 }}>
        {featured.poster_path ? (
          <img
            src={`${IMG_BASE}${featured.poster_path}`}
            alt={`${featured.title} poster`}
            className="h-56 w-full object-cover"
          />
        ) : (
          <div className="h-56" style={{ background: "var(--bg-alt)" }} />
        )}
        <div className="p-5 rp-perf">
          <p className="rp-sans text-xs uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
            Highest rated
          </p>
          <h3 className="rp-serif text-2xl mb-3" style={{ color: "var(--cream)" }}>{featured.title}</h3>
          <div className="flex items-center justify-between">
            <StarRating value={featured.vote_average || 0} />
            <button
              onClick={() => onSelect(featured)}
              className="rp-sans text-sm flex items-center gap-1 rp-focus"
              style={{ color: "var(--gold)" }}
            >
              Details <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}