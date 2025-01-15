import { FetchParams, FetchResponse } from "@/types/types";

export async function getProducts({
  search = "",
  searchType = "sku",
  page = 1,
  size = 10,
}: FetchParams): Promise<any> {
  const query = new URLSearchParams();

  if (search) {
    query.append(searchType, search);
  }

  query.append("page", page.toString());
  query.append("size", size.toString());

  // Simulate a slow network connection
  await new Promise(resolve => setTimeout(resolve, 2000));

  const res = await fetch(`http://localhost:3001/products?${query.toString()}`, {
    cache: 'no-store', // Disable caching to always show loading state
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

