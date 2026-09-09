import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "./api/tmdb.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import MovieModal from "./components/MovieModal.jsx";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetchPopularMovies()
      .then((results) => {
        const top = results.reduce((a, b) => (b.vote_average > a.vote_average ? b : a), results[0]);
        setFeatured(top);
      })
      .catch(() => setFeatured(null));
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--cream)" }} className="w-full">
      <Navbar />
      {featured && <Hero featured={featured} onSelect={setSelected} />}
      <MovieGrid onSelect={setSelected} />
      <About />
      <Footer />
      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}