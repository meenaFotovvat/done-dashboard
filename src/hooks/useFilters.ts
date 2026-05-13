"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString, Filters } from "@/lib/urlSync";

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo<Filters>(
    () => ({
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      status: searchParams.get("status") || "",
    }),
    [searchParams]
  );

  const setFilters = useCallback(
    (newFilters: Partial<Filters>) => {
      const next = { ...filters, ...newFilters };

      const nextQuery = createQueryString(next);
      const currentQuery = createQueryString(filters);

      if (nextQuery === currentQuery) return;

      router.replace(`?${nextQuery}`);
    },
    [filters, router]
  );

  return { filters, setFilters };
};
