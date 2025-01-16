export interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: {
    id: string;
    name: string;
  };
  brand: string;
  price: number;
  stock: number;
  specifications: Array<{
    name: string;
    value: string;
  }>;
}

export type FetchResponse = {
  content: Product[];
  metadata: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
};

export type FetchParams = {
  search?: any;
  page?: number;
  size?: number;
  searchType?: string;
};

export interface SearchParams {
  query?: string;
  page?: string;
  searchType?: string;
}

export interface ProductListProps {
  query: string;
  searchType: string;
  initialData: Product[];
  isSearchMode: boolean;
  totalItems: number
}

//Detail product
export type ProductDetailProps = {
  params: {
    id: string;
  };
};

export interface ProductDetailCardProps {
  product: Product;
}

// Search Props
export interface SearchProps {
  onSearchStart: () => void;
  onSearchEnd: () => void;
}

// SearchContainer Props
export interface SearchContainerProps {
  children: React.ReactNode;
}

//ProductCard Props
export interface ProductCardProps {
  sku: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  imageUrl?: string;
}

export interface ProductDetail {
  sku: string;
}

export interface GetProductsParams {
  search?: string;
  searchType?: string;
  page?: number;
  size?: number;
}

export interface ApiResponse {
  data: Product[];
  items: number;
}

//Hook Pagination aans scroll
export interface UseInfiniteProductsProps {
  query: string;
  searchType: string;
  initialData: Product[];
  totalItems: number
}
export interface UseInfiniteScrollProps {
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
  isSearchMode: boolean;
}
export interface ProductGridProps {
  products: Product[];
}

export interface ProductListStatusProps {
  isFetchingNextPage: boolean;
  isSearchMode: boolean;
  hasNextPage: boolean | undefined;
  totalProducts: number;
}
