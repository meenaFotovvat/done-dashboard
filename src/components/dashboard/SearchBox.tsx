"use client";

import { useState, useEffect } from "react";
import { useFilters } from "@/hooks/useFilters";

export default function SearchBox() {
  const { filters, setFilters } = useFilters();

  const [value, setValue] = useState(filters.search || "");

  useEffect(() => {
    setValue(filters.search || "");
  }, [filters.search]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters({ search: value });
    }, 400);

    return () => clearTimeout(handler);
  }, [value, setFilters]);

  return (
    <input
      className="w-full rounded border p-2"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
