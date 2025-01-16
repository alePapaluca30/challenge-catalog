import { Product, ProductGridProps } from "@/types/types";
import ProductCard from "./productCard";

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {products.map((product: Product, index: number) => (
        <ProductCard
          key={`${product.sku}-${index}`}
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

