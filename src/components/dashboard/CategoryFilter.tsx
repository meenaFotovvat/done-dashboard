"use client";

import { useFilters } from "@/hooks/useFilters";

export default function CategoryFilter() {
  const { filters, setFilters } = useFilters();

  return (
    <select
      value={filters.category || ""}
      onChange={(e) => setFilters({ category: e.target.value })}
      className="rounded border p-2"
    >
      <option value="">All</option>
      <option value="Movies">Movies</option>
      <option value="Baby">Baby</option>
      <option value="Home">Home</option>
    </select>
  );
}
