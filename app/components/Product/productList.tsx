import { Product, ProductListProps } from "@/types/types";
import { getProducts } from "@/lib/getProducts";
import ProductCard from "./productCard";

export default async function ProductList({
  query,
  searchType,
  currentPage,
}: ProductListProps) {
  const data = await getProducts({
    search: query,
    searchType,
    page: currentPage,
    size: 10,
  });

  if (data.length === 0)
    return (
      <p className="text-center text-gray-500 mt-8">
        No se encontraron productos.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {data.map((product: Product) => (
        <ProductCard
          key={product.sku}
          sku={product.sku}
          name={product.name}
          price={product.price}
          brand={product.brand}
          category={product.category.name}
          imageUrl={product.image}
        />
      ))}
    </div>
  );
}
