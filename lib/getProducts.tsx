import { FetchParams, ProductListProps } from "@/types/types";

export async function getProducts({
  search = "",
  searchType = "sku",
  page = 1,
  size = 10,
}: FetchParams): Promise<ProductListProps> {
  const query = new URLSearchParams();

  if (search) {
    query.append(searchType, search);
  }

  query.append("page", page.toString());
  query.append("size", size.toString());

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `http://localhost:3001/products?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
