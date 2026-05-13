"use client";

import { useQueryClient } from "@tanstack/react-query";

import { useTableStore } from "@/store/useTableStore";

import { Item } from "@/lib/mockData";

export default function BulkActionsBar() {
  const queryClient = useQueryClient();

  const { rowSelection, clearSelection } = useTableStore();

  const selectedIds = Object.keys(rowSelection).filter(
    (id) => rowSelection[id]
  );

  if (selectedIds.length === 0) {
    return null;
  }

  const markSelectedAsActive = () => {
    queryClient.setQueryData<Item[]>(["items"], (oldData = []) => {
      return oldData.map((item) => {
        if (selectedIds.includes(item.id)) {
          return {
            ...item,
            status: "active",
          };
        }

        return item;
      });
    });

    clearSelection();
  };

  return (
    <div className="flex items-center gap-3 rounded bg-gray-100 p-2">
      <span className="text-sm font-medium">{selectedIds.length} selected</span>

      <button
        onClick={markSelectedAsActive}
        className="rounded bg-green-500 px-3 py-1 text-white"
      >
        Mark Active
      </button>

      <button
        onClick={clearSelection}
        className="rounded bg-gray-500 px-3 py-1 text-white"
      >
        Clear
      </button>
    </div>
  );
}
