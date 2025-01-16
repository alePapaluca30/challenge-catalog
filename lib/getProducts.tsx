import { FetchParams, Product } from "@/types/types";

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://challenge-back-catalog-1.onrender.com'
    : 'http://localhost:3001';

export async function getProducts({
  search = "",
  searchType = "sku",
  page = 1,
  size = 10,
}: FetchParams): Promise<Product[]> {
  const query = new URLSearchParams();

  if (search) {
    query.append(searchType, search);
  }

  query.append("page", page.toString());
  query.append("size", size.toString());

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `${API_BASE_URL}/products?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
