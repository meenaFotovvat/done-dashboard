"use client";

import { useFilters } from "@/hooks/useFilters";

export default function CategoryFilter() {
  const { getFilters, setFilters } = useFilters();

  return (
    <select
      value={getFilters().category}
      onChange={(e) => setFilters({ category: e.target.value })}
      className="border p-2 rounded"
    >
      <option value="">All</option>
      <option value="tech">Tech</option>
      <option value="finance">Finance</option>
      <option value="design">Design</option>
    </select>
  );
}