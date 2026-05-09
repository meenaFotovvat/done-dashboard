"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createQueryString, Filters } from "@/lib/urlSync";

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getFilters = (): Filters => {
    return {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      status: searchParams.get("status") || "",
    };
  };

  const setFilters = (filters: Filters) => {
    const query = createQueryString({
      ...getFilters(),
      ...filters,
    });

    router.push(`?${query}`);
  };

  return { getFilters, setFilters };
};