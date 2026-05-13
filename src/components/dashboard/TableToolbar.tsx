"use client";

import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";
import BulkActionsBar from "./BulkActionsBar";
import StatusFilter from "./StatusFilter";

export default function TableToolbar() {
  return (
    <div>
      <div className="flex gap-4">
        <SearchBox />
        <CategoryFilter />
        <StatusFilter />
      </div>
      <BulkActionsBar />
    </div>
  );
}
