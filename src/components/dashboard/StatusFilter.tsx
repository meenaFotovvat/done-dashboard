"use client";

import filterProps from "@/types/interface";

export default function StatusFilter({
  filters,
  onChange,
}: filterProps) {
  return (
    <select
      value={filters.status || ""}
      onChange={(e) =>
        onChange({ status: e.target.value })
      }
      className="rounded border p-2"
    >
      <option value="">status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  );
}
