"use client";

import { useCategories } from "@/hooks/useCategories";
import { useFilters } from "@/hooks/useFilters";

export default function CategoryFilter() {
  const { filters, setFilters } = useFilters();
  const categories = useCategories();

  return (
    <select
      value={filters.category || ""}
      onChange={(e) => setFilters({ category: e.target.value })}
      className="rounded border p-2"
    >
      <option value="">category</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
