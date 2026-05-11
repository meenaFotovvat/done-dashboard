"use client";

import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";
import BulkActionsBar from "./BulkActionsBar";

export default function TableToolbar() {
  return (
    <div>

    <div className="flex gap-4">
      <SearchBox />
      <CategoryFilter />
    </div>
    <BulkActionsBar />
    </div>
  );
}