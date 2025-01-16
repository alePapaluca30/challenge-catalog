import { Product } from "@/types/types";

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://challenge-back-catalog-1.onrender.com'
    : 'http://localhost:3001';
    
export async function getProductBySku(sku: string): Promise<Product | string> {
  try {
    const res = await fetch(`${API_BASE_URL}/products?sku=${sku}`);

    if (res.status === 404) return "No encontrado";
    if (res.status === 500) return "No se pudo cargar";

    if (!res.ok) throw new Error("Error inesperado al obtener el producto");

    const [product]: Product[] = await res.json();

    if (!product) return "No encontrado";

    return product;
  } catch (error) {
    console.log(error);
    
    return "No se pudo cargar";
  }
}
