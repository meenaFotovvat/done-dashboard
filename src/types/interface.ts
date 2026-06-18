import { Filters } from "@/lib/urlSync";

export default interface filterProps {
  filters: Filters;
  onChange: (
    newFilters: Partial<Filters>,
  ) => void;
}
