"use client";

import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";
import BulkActionsBar from "./BulkActionsBar";
import StatusFilter from "./StatusFilter";
import { useFilters } from "@/hooks/useFilters";

export default function TableToolbar() {
  const { filters, setFilters } = useFilters();
  return (
    <div>
      <div className="flex gap-4">
        <SearchBox
          filters={filters}
          onChange={setFilters}
        />
        <CategoryFilter
          filters={filters}
          onChange={setFilters}
        />
        <StatusFilter
          filters={filters}
          onChange={setFilters}
        />
      </div>
      <BulkActionsBar />
    </div>
  );
}
