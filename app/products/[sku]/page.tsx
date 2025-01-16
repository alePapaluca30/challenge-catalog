import ProductDetailCard from "@/app/components/Product/productDetail";
import { getProductBySku } from "@/lib/getProductBySku";
import { ProductDetail } from "@/types/types";

export default async function ProductPage({
  params,
}: {
  params: Promise<ProductDetail>;
}) {
  const { sku } = await params;
  const result = await getProductBySku(sku);

  if (typeof result === "string") {
    return (
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{result}</h1>d
      </main>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4 justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Detalle del Producto
      </h1>
      <ProductDetailCard product={result} />
    </main>
  );
}
