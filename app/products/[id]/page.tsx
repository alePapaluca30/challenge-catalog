import ProductDetailCard from "@/app/components/productDetail/productDetail";
import { getProductBySku } from "@/lib/getProductBySku";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getProductBySku(params.id);

  if (typeof result === "string") {
    return (
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{result}</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Detalle del Producto
      </h1>
      <ProductDetailCard product={result} />
    </main>
  );
}
