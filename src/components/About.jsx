import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-14 border-t" style={{ borderColor: "var(--line)" }}>
      <h2 className="rp-serif text-2xl mb-4">About this project</h2>
      <p className="rp-sans max-w-2xl" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
        Reel is a dynamic frontend web application built to showcase modern component architecture, global state management, and responsive layout work. While originally conceptualised around a static sample dataset, this production version features a fully integrated live data layer powered by the TMDB API. The core interface seamlessly handles complex client-side interactions, including:Real-Time Search & Filtering: Instantly discover titles across TMDB's massive library. Dynamic Sorting: Organise movie lists by top ratings and release timelines. Detailed Context Views: Deep-dive into individual movie profiles, rich media assets, and user metrics.Robust Component Architecture: Modular, reusable UI elements (like MovieCard.jsx and StarRating.jsx) designed to handle changing live data states gracefully.
      </p>
    </section>
  );
}