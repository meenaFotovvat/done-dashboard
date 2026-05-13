import { ColumnDef } from "@tanstack/react-table";
import { Item } from "@/lib/mockData";

export const columns: ColumnDef<Item>[] = [
  {
    id: "select",
    header: () => "Select",
    cell: ({ row }) => {
      return (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    size: 220,
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 160,
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 120,
  },
  {
    accessorKey: "email",
    header: "Email",
    size: 320,
  },
];
