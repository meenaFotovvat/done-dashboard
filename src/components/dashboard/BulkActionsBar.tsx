"use client";

import { useBulkStore } from "@/store/useBulkStore";

export default function BulkActionsBar() {
  const { selectedIds, clear, markAsActive } = useBulkStore();

  if (selectedIds.length === 0) return null;

  return (
    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded">
      <span className="text-sm font-medium">
        {selectedIds.length} selected
      </span>

      <button
        className="px-3 py-1 bg-green-500 text-white rounded"
        onClick={markAsActive}
      >
        Mark Active
      </button>

      <button
        className="px-3 py-1 bg-gray-500 text-white rounded"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
}
