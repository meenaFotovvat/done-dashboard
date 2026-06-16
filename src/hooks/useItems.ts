import { useQuery } from "@tanstack/react-query";
import { generateMockData } from "@/lib/mockData";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      // simulate real API latency
      await new Promise((res) => setTimeout(res, 800));
      return generateMockData(1000);
    },
    staleTime: Infinity,
  });
};
