import { ProductListStatusProps } from "@/types/types";

export function ProductListStatus({ isFetchingNextPage, isSearchMode, hasNextPage, totalProducts }: ProductListStatusProps) {
  if (!isSearchMode && hasNextPage) {
    return (
      <div className="h-10 mt-4">
        {isFetchingNextPage ? (
          <p className="text-center">Cargando más productos...</p>
        ) : (
          <p className="text-center">Carga más</p>
        )}
      </div>
    );
  }

  if ((isSearchMode || !hasNextPage) && totalProducts > 0) {
    return (
      <p className="text-center text-gray-500 mt-4">
        {isSearchMode
          ? `Se encontraron ${totalProducts} productos.`
          : `Has visto todos los productos (${totalProducts} en total).`}
      </p>
    );
  }

  return null;
}

