"use client";

import { useMemo } from "react";
import { useFilters } from "@/hooks/useFilters";
import { useItems } from "@/hooks/useItems";

import DataTable from "./DataTable";
import TableToolbar from "./TableToolbar";
import { columns } from "./columns";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

export default function DashboardContainer() {
  const { filters } = useFilters();
  const { data: items = [], isLoading, isError } = useItems();

  const filteredData = useMemo(() => {
    return items.filter((item) => {
      const search = (filters.search ?? "").toLowerCase();

      const searchMatch =
        !filters.search || item.name.toLowerCase().includes(search);

      const categoryMatch =
        !filters.category || item.category === filters.category;

      const statusMatch = !filters.status || item.status === filters.status;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [items, filters.search, filters.category, filters.status]);

  const memoizedColumns = useMemo(() => columns, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="space-y-4">
      <TableToolbar />
      <DataTable data={filteredData} columns={memoizedColumns} />
    </div>
  );
}
