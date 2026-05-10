"use client";

import {
  useReactTable,
  getCoreRowModel,
  RowSelectionState,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import { columns } from "./columns";
import { Item } from "@/lib/mockData";

type Props = {
  data: Item[];
  onSelectionChange?: (ids: string[]) => void;
};

export default function DataTable({ data, onSelectionChange }: Props) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: (updater) => {
      setRowSelection(updater);

      const selectedIds = table
        .getSelectedRowModel()
        .rows.map((row) => row.original.id);

      onSelectionChange?.(selectedIds);
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full border">
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th key={header.id} className="p-2 text-left">
                {header.column.columnDef.header?.toString()}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-t">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2">
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
  );
}