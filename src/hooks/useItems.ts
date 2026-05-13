import { useQuery } from "@tanstack/react-query";
import { generateMockData } from "@/lib/mockData";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      return generateMockData(1000);
    },
    staleTime: Infinity,
  });
};
