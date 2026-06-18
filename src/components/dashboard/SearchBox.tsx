"use client";

import { useState, useEffect } from "react";
import filterProps from "@/types/interface";

export default function SearchBox({
  filters,
  onChange,
}: filterProps) {
  const [value, setValue] = useState(
    filters.search || "",
  );

  useEffect(() => {
    setValue(filters.search || "");
  }, [filters.search]);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange({ search: value });
    }, 400);

    return () => clearTimeout(handler);
  }, [value, onChange]);

  return (
    <input
      className="w-full rounded border p-2"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
