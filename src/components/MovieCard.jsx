import React from "react";
import { IMG_BASE } from "../api/tmdb.js";
import { fallbackPoster } from "../utils/poster.js";
import StarRating from "./StarRating.jsx";

export default function MovieCard({ movie, onSelect, genreMap }) {
  const genreName =
    genreMap && movie.genre_ids && movie.genre_ids.length > 0 ? genreMap[movie.genre_ids[0]] : null;
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <button onClick={() => onSelect(movie)} className="rp-stub text-left rp-focus">
      {movie.poster_path ? (
        <img
          src={`${IMG_BASE}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div style={fallbackPoster(movie.title)} className="h-48" />
      )}
      <div className="p-4 rp-perf">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="rp-serif text-lg leading-tight">{movie.title}</h3>
          <span className="rp-sans text-xs shrink-0 mt-1" style={{ color: "var(--muted)" }}>
            {year}
          </span>
        </div>
        <p className="rp-sans text-xs mb-3" style={{ color: "var(--muted)" }}>
          {genreName || "—"}
        </p>
        <StarRating value={movie.vote_average || 0} />
      </div>
    </button>
  );
}