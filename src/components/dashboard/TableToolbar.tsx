"use client";

import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";

export default function TableToolbar() {
  return (
    <div className="flex gap-4">
      <SearchBox />
      <CategoryFilter />
    </div>
  );
}