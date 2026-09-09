import React, { useState, useEffect, useMemo, useRef } from "react";
import { fetchPopularMovies, searchMovies, fetchGenres } from "../api/tmdb.js";
import SearchBar from "./SearchBar.jsx";
import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ onSelect }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [query, setQuery] = useState("");
  const [genreId, setGenreId] = useState("All");
  const [sort, setSort] = useState("rating");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);

  const genreMap = useMemo(
    () => Object.fromEntries(genres.map((g) => [g.id, g.name])),
    [genres]
  );

  useEffect(() => {
    fetchGenres()
      .then(setGenres)
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const request = query.trim() ? searchMovies(query.trim()) : fetchPopularMovies();
      request
        .then((results) => setMovies(results))
        .catch(() => setError("Couldn't load movies. Check that your TMDB API key is set in .env."))
        .finally(() => setLoading(false));
    }, 400);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  const filtered = useMemo(() => {
    let list = movies.filter((m) =>
      genreId === "All" ? true : m.genre_ids?.includes(Number(genreId))
    );
    if (sort === "rating") list = [...list].sort((a, b) => b.vote_average - a.vote_average);
    if (sort === "year")
      list = [...list].sort((a, b) => (b.release_date || "").localeCompare(a.release_date || ""));
    if (sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [movies, genreId, sort]);

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-12 border-t" style={{ borderColor: "var(--line)" }}>
      <SearchBar
        query={query}
        setQuery={setQuery}
        genre={genreId}
        setGenre={setGenreId}
        sort={sort}
        setSort={setSort}
        genres={genres}
      />

      {loading ? (
        <div className="text-center py-16 rp-sans" style={{ color: "var(--muted)" }}>
          Loading movies…
        </div>
      ) : error ? (
        <div className="text-center py-16 rp-sans" style={{ color: "var(--velvet)" }}>
          {error}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 rp-sans" style={{ color: "var(--muted)" }}>
          Nothing matches that search.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((m) => (
            <MovieCard key={m.id} movie={m} onSelect={onSelect} genreMap={genreMap} />
          ))}
        </div>
      )}
    </section>
  );
}