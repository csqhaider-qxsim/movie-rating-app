import React, { useEffect, useState } from "react";
import { X, Clock } from "lucide-react";
import { fetchMovieDetails, BACKDROP_BASE } from "../api/tmdb.js";
import { fallbackPoster } from "../utils/poster.js";
import StarRating from "./StarRating.jsx";

export default function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(true);

  useEffect(() => {
    setLoadingDetails(true);
    fetchMovieDetails(movie.id)
      .then(setDetails)
      .catch(() => setDetails(null))
      .finally(() => setLoadingDetails(false));
  }, [movie.id]);

  const director = details?.credits?.crew?.find((c) => c.job === "Director");
  const cast = details?.credits?.cast?.slice(0, 5).map((c) => c.name) || [];
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(10,10,12,0.75)" }}
      onClick={onClose}
    >
      <div
        className="rp-stub rp-scrollbar w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {movie.backdrop_path || movie.poster_path ? (
          <img
            src={`${BACKDROP_BASE}${movie.backdrop_path || movie.poster_path}`}
            alt={`${movie.title} backdrop`}
            className="h-40 w-full object-cover"
          />
        ) : (
          <div style={fallbackPoster(movie.title)} className="h-40" />
        )}
        <div className="relative px-5 pt-4">
          <button
            onClick={onClose}
            className="absolute top-3 right-5 p-1.5 rounded-full rp-focus"
            style={{ background: "rgba(0,0,0,0.5)" }}
            aria-label="Close"
          >
            <X size={16} color="var(--cream)" />
          </button>
          <h3 className="rp-serif text-2xl" style={{ color: "var(--cream)" }}>{movie.title}</h3>
        </div>
        <div className="p-6 rp-perf mt-3">
          <div className="flex items-center gap-4 mb-4 rp-sans text-sm" style={{ color: "var(--muted)" }}>
            <span>{year}</span>
            {details?.runtime ? (
              <span className="flex items-center gap-1">
                <Clock size={13} /> {details.runtime} min
              </span>
            ) : null}
          </div>
          <StarRating value={movie.vote_average || 0} />
          <p className="rp-sans text-sm mb-5 mt-4" style={{ lineHeight: 1.7 }}>
            {movie.overview || "No synopsis available."}
          </p>
          {loadingDetails ? (
            <p className="rp-sans text-sm" style={{ color: "var(--muted)" }}>Loading cast & crew…</p>
          ) : (
            <>
              {director && (
                <>
                  <p className="rp-sans text-xs uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                    Director
                  </p>
                  <p className="rp-sans text-sm mb-4">{director.name}</p>
                </>
              )}
              {cast.length > 0 && (
                <>
                  <p className="rp-sans text-xs uppercase tracking-wide mb-1" style={{ color: "var(--muted)" }}>
                    Cast
                  </p>
                  <p className="rp-sans text-sm">{cast.join(", ")}</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}