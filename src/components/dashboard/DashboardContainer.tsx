"use client";

import { useMemo } from "react";
import { useItems } from "@/hooks/useItems";
import { useFilters } from "@/hooks/useFilters";

import DataTable from "./DataTable";
import TableToolbar from "./TableToolbar";

export default function DashboardContainer() {
  console.log("DashboardContainer render");
  const { data = [] } = useItems();
  const { filters } = useFilters();

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const searchMatch =
        !filters.search ||
        item.name.toLowerCase().includes(filters.search.toLowerCase());

      const categoryMatch =
        !filters.category || item.category === filters.category;

      const statusMatch =
        !filters.status || item.status === filters.status;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [data, filters]);

  return (
    <div className="space-y-4">
      <TableToolbar />
      <DataTable data={filteredData} />
    </div>
  );
}
