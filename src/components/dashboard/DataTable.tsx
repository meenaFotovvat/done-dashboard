"use client";

import React, { useMemo, useRef } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { RowData } from "@tanstack/react-table";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useTableStore } from "@/store/useTableStore";

type DataTableProps<T extends RowData> = {
  data: T[];
  columns: ColumnDef<T, unknown>[];
};

export default function DataTable<T extends { id: string }>({
  data,
  columns,
}: DataTableProps<T>) {
  const rowSelection = useTableStore((s) => s.rowSelection);

  const setRowSelection = useTableStore((s) => s.setRowSelection);

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
        typeof updater === "function" ? updater(rowSelection) : updater;

      setRowSelection(nextSelection);
    },

    getCoreRowModel: getCoreRowModel(),

    getRowId: (row) => row.id,
  });

  const rows = useMemo(() => table.getRowModel().rows, [table, data]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,

    getScrollElement: () => parentRef.current,

    estimateSize: () => 48,

    overscan: 10,
  });

  return (
    <div className="rounded border">
      {/* Scroll Container */}
      <div ref={parentRef} className="h-[600px] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 flex w-max border-b bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
                key={header.id}
                className="shrink-0 px-3 py-2 font-medium"
                style={{
                  width: header.getSize(),
                  minWidth: header.getSize(),
                }}
              >
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
          }}
          className="w-max"
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = rows[virtualRow.index];

            return (
              <div
                key={row.id}
                className="absolute flex border-b bg-white"
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <div
                    key={cell.id}
                    className="shrink-0 px-3 py-2 whitespace-nowrap"
                    style={{
                      width: cell.column.getSize(),
                      minWidth: cell.column.getSize(),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
