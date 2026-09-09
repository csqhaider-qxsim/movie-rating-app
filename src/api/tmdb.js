const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG_BASE = "https://image.tmdb.org/t/p/w500";
export const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";

async function tmdbFetch(path, params = {}) {
  const url = new URL(BASE_URL + path);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`TMDB request failed (${res.status}). Check that your API key is set correctly in .env`);
  }
  return res.json();
}

export function fetchGenres() {
  return tmdbFetch("/genre/movie/list").then((data) => data.genres);
}

export function fetchPopularMovies(page = 1) {
  return tmdbFetch("/movie/popular", { page }).then((data) => data.results);
}

export function searchMovies(query, page = 1) {
  return tmdbFetch("/search/movie", { query, page }).then((data) => data.results);
}

export function fetchMovieDetails(id) {
  return tmdbFetch(`/movie/${id}`, { append_to_response: "credits" });
}