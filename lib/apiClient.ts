import { Product } from "@/types/types";

const API_URL = process.env.NODE_ENV === 'production'
  ? "https://challenge-back-catalog.onrender.com"
  : "http://localhost:3001";
const API_TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 5000;
const MAX_RETRIES = Number(process.env.NEXT_PUBLIC_API_MAX_RETRIES) || 3;

interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = MAX_RETRIES
): Promise<Response> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), API_TIMEOUT);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying fetch, attempts left: ${retries - 1}`);
      return fetchWithRetry(url, options, retries - 1);
    }
    throw error;
  }
}

function buildQueryString(params: QueryParams): string {
  return Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");
}

async function apiRequest<T>(
  endpoint: string,
  params: QueryParams = {}
): Promise<T> {
  const queryString = buildQueryString(params);
  const url = `${API_URL}${endpoint}?${queryString}`;

  try {
    const response = await fetchWithRetry(url);
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

export async function getProducts({
  search = "",
  searchType = "",
  page = 1,
  size = 6,
}: {
  search?: string;
  searchType?: string;
  page?: number;
  size?: number;
}): Promise<{ products: Product[]; total: number }> {
  const params: QueryParams = {
    _page: page,
    _per_page: size,
  };

  if (search) params[searchType] = search;

  try {
    const responseData = await apiRequest<{
      data: Product[];
      items: number;
    }>("/products", params);
    return {
      products: responseData.data || [],
      total: responseData.items,
    };
  } catch (error) {
    throw error;
  }
}

export async function getProductBySku(sku: string): Promise<Product | string> {
  const params: QueryParams = { sku };

  try {
    const responseData = await apiRequest<Product[]>("/products", params);

    if (responseData.length === 0) return "No encontrado";

    return responseData[0];
  } catch (error) {
    console.error("Error in getProductBySku:", error);
    return "No se pudo cargar";
  }
}

const apiClient = {
  getProducts,
  getProductBySku
};

export default apiClient;
