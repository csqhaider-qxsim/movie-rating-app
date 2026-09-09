import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ value }) {
  return (
    <div className="flex items-center gap-1.5">
      <Star size={14} style={{ fill: "var(--gold)", color: "var(--gold)" }} />
      <span className="text-sm" style={{ color: "var(--gold)", fontWeight: 600 }}>
        {value.toFixed(1)}
      </span>
      <span className="text-xs" style={{ color: "var(--muted)" }}>
        / 10
      </span>
    </div>
  );
}