import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery, genre, setGenre, sort, setSort, genres }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-8">
      <div className="relative flex-1 max-w-sm">
        <Search size={16} style={{ color: "var(--muted)" }} className="absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies by title"
          className="w-full rp-sans text-sm py-2.5 pl-9 pr-3 rounded-sm rp-focus"
          style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", color: "var(--cream)" }}
        />
      </div>
      <div className="flex gap-2 rp-sans text-sm">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rp-focus px-3 py-2 rounded-sm"
          style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", color: "var(--cream)" }}
        >
          <option value="All">All genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rp-focus px-3 py-2 rounded-sm"
          style={{ background: "var(--bg-alt)", border: "1px solid var(--line)", color: "var(--cream)" }}
        >
          <option value="rating">Sort: Rating</option>
          <option value="year">Sort: Year</option>
          <option value="title">Sort: Title</option>
        </select>
      </div>
    </div>
  );
}