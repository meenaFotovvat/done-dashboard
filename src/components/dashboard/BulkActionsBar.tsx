"use client";

import { useBulkStore } from "@/store/useBulkStore";

export default function BulkActionsBar() {
  const { rowSelection, clear } = useBulkStore();

  const selectedIds = Object.keys(rowSelection).filter(
    (key) => rowSelection[key]
  );

  if (selectedIds.length === 0) return null;

  return (
    <div className="flex items-center gap-3 rounded bg-gray-100 p-2">
      <span className="text-sm font-medium">
        {selectedIds.length} selected
      </span>

      <button
        className="rounded bg-green-500 px-3 py-1 text-white"
      >
        Mark Active
      </button>

      <button
        className="rounded bg-gray-500 px-3 py-1 text-white"
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
}
