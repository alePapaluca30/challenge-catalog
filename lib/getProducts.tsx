import { ApiResponse, GetProductsParams, Product } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function getProducts({
  search = "",
  searchType = "",
  page = 1,
  size = 6,
}: GetProductsParams): Promise<{ products: Product[]; total: number }> {
  const url = new URL(`${API_URL}/products`);
  const params = new URLSearchParams();

  if (search) params.append(searchType, search);

  params.append("_per_page", size.toString());
  params.append("_page", page.toString());

  url.search = params.toString();

  try {
    const res = await fetch(url.toString());

    if (!res.ok) {
      const errorMessage = `HTTP error! status: ${res.status}`;
      throw new Error(errorMessage);
    }

    const responseData: ApiResponse = await res.json();

    const products = responseData.data || [];
    const total = responseData.items || 0;

    return { products, total };
  } catch (error) {
    throw error;
  }
}
