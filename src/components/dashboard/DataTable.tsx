"use client";

import React, { useRef, useState } from "react";

import {
  ColumnDef,
  RowSelectionState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useVirtualizer } from "@tanstack/react-virtual";

import { useBulkStore } from "@/store/useBulkStore";

type DataTableProps<T extends { id: string }> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};

export default function DataTable<T extends { id: string }>({
  data,
  columns,
}: DataTableProps<T>) {
const columnWidth = 180;
  const setSelected = useBulkStore((s) => s.setSelected);

  const [rowSelection, setRowSelection] =
    useState<RowSelectionState>({});

  const parentRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,

    state: {
      rowSelection,
    },

    enableRowSelection: true,

    onRowSelectionChange: (updater) => {
      const nextSelection =
        typeof updater === "function"
          ? updater(rowSelection)
          : updater;

      setRowSelection(nextSelection);

      const selectedIds = Object.keys(nextSelection).filter(
        (key) => nextSelection[key]
      );

      setSelected(selectedIds);
    },

    getCoreRowModel: getCoreRowModel(),

    getRowId: (row) => row.id,
  });

  const rows = table.getRowModel().rows;

  const rowVirtualizer = useVirtualizer({
    count: rows.length,

    getScrollElement: () => parentRef.current,

    estimateSize: () => 48,

    overscan: 10,
  });

  return (
    <div className="rounded border">
      {/* Scroll Container */}
      <div
        ref={parentRef}
        className="h-[600px] overflow-auto"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex border-b bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
              style={{
  width: columnWidth,
  minWidth: columnWidth,
}}
                key={header.id}
className="px-3 py-2 font-medium shrink-0"              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </div>
            ))
          )}
        </div>

        {/* Virtualized Body */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
             width: "max-content",
          }}
        >
          {rowVirtualizer
            .getVirtualItems()
            .map((virtualRow) => {
              const row = rows[virtualRow.index];

              return (
                <div
                  key={row.id}
                  className="absolute flex w-full border-b bg-white"
                  style={{
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div
                      key={cell.id}
                      style={{
  width: columnWidth,
  minWidth: columnWidth,
}}
className="shrink-0 px-3 py-2"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}