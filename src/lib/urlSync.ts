export type Filters = {
  search?: string;
  category?: string;
  status?: string;
};

export const createQueryString = (filters: Filters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  return params.toString();
};
