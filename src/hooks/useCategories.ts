import { useMemo } from "react";
import { useItems } from "@/hooks/useItems";

export function useCategories() {
  const { data: items = [] } = useItems();

  return useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category))).sort();
  }, [items]);
}
