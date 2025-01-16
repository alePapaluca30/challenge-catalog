import { useInfiniteQuery } from '@tanstack/react-query'
import { getProducts } from '@/lib/getProducts'
import { Product, UseInfiniteProductsProps } from '@/types/types'

export function useInfiniteProducts({ query, searchType, initialData, totalItems }: UseInfiniteProductsProps) {
  return useInfiniteQuery<{ products: Product[], total: number }>({
    queryKey: ['products', query, searchType],
    queryFn: async ({ pageParam = 1 }) => {
      return getProducts({
        search: query,
        searchType,
        page: pageParam as number,
        size: 6,
      })
    },
    getNextPageParam: (lastPage, allPages) => {
      const loadedProducts = allPages.reduce((total, page) => total + page.products.length, 0)
      return loadedProducts < totalItems ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    initialData: { pages: [{ products: initialData, total: 20 }], pageParams: [1] },
  })
}

