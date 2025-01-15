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

export interface ProductListProps {
  query: string;
  currentPage: number;
  searchType?: string;
  page?: string;
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
