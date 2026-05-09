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
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];