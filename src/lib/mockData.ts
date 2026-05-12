import { faker } from "@faker-js/faker";

export type Item = {
  id: string;
  name: string;
  category: string;
  status: "active" | "inactive";
  email: string;
};

export const generateMockData = (count = 1000): Item[] => {
  faker.seed(12345); 
  return Array.from({ length: count }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    category: faker.commerce.department(),
    status: faker.datatype.boolean() ? "active" : "inactive",
    email: faker.internet.email(),
  }));
};