"use client";

import { useFilters } from "@/hooks/useFilters";

export default function StatusFilter() {
  const { filters, setFilters } = useFilters();

  return (
    <select
      value={filters.status || ""}
      onChange={(e) => setFilters({ status: e.target.value })}
      className="rounded border p-2"
    >
      <option value="">status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  );
}
