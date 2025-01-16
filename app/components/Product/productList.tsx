"use client";

import {  ProductListProps } from "@/types/types";
import { LoadingSpinner } from "../loadingSpinner";
import { useInfiniteProducts } from "@/hook/useInfiniteProducts";
import { useInfiniteScroll } from "@/hook/useInfiniteScroll";
import { ProductListStatus } from "./productListStatus";
import { ProductGrid } from "./productGrid";

export default function ProductList({
  query,
  searchType,
  initialData,
  isSearchMode,
  totalItems
}: ProductListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteProducts({ query, searchType, initialData, totalItems });

  const { ref } = useInfiniteScroll({ fetchNextPage, hasNextPage, isSearchMode });

  const allProducts = data
    ? data.pages.flatMap((page) => page.products)
    : initialData;
  const totalProducts = data?.pages[0]?.total || 0;

  if (status === "error") return <p>Error al cargar los productos</p>;

  if (allProducts.length === 0)
    return (
      <p className="text-center text-gray-500 mt-8">
        No se encontraron productos.
      </p>
    );

  return (
    <>
      <ProductGrid products={allProducts} />
      <div ref={ref}>
        <ProductListStatus
          isFetchingNextPage={isFetchingNextPage}
          isSearchMode={isSearchMode}
          hasNextPage={hasNextPage}
          totalProducts={totalProducts}
        />
      </div>
      {isFetchingNextPage && <LoadingSpinner />}
    </>
  );
}

