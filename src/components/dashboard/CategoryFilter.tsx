"use client";

import { useCategories } from "@/hooks/useCategories";
import filterProps from "@/types/interface";

export default function CategoryFilter({
  filters,
  onChange,
}: filterProps) {
  const categories = useCategories();

  return (
    <select
      value={filters.category || ""}
      onChange={(e) =>
        onChange({ category: e.target.value })
      }
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
