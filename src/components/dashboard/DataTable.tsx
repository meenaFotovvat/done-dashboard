"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  RowSelectionState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useBulkStore } from "@/store/useBulkStore";

type DataTableProps<T extends { id: string }> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};

export default function DataTable<T extends { id: string }>({
  data,
  columns,
}: DataTableProps<T>) {
  const setSelected = useBulkStore((s) => s.setSelected);

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    enableRowSelection: true,

    // ✅ باگ انتخاب رفع شد
    onRowSelectionChange: (updater) => {
      setRowSelection(updater);

      const nextSelection =
        typeof updater === "function" ? updater(rowSelection) : updater;

      const selectedIds = Object.keys(nextSelection).filter(
        (key) => nextSelection[key]
      );

      setSelected(selectedIds);
    },

    getCoreRowModel: getCoreRowModel(),

    // ✅ این باعث می‌شود selection بر اساس id واقعی آیتم باشد
    getRowId: (row) => row.id,
  });

  return (
    <div className="rounded border">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-3 py-2 text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
