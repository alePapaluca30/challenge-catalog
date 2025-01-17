import ProductDetailCard from "@/app/components/Product/productDetail";
import { getProductBySku } from "@/lib/getProductBySku";
import { ProductDetail } from "@/types/types";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<ProductDetail>;
}) {
  const { sku } = await params;
  const result = await getProductBySku(sku);

  return (
    <main className="container mx-auto py-8 px-4 justify-center items-center">
      <div className="relative">
        <Link className="absolute top-1.5" href={"/"}>
          <ChevronLeft />
        </Link>
      </div>

      {typeof result === "string" ? (
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">{result}</h1>
        </main>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8 pl-5 text-center">
            Detalle del Producto
          </h1>
          <ProductDetailCard product={result} />
        </>
      )}
    </main>
  );
}
