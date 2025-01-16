import { getProducts } from "@/lib/getProducts";
import ProductList from "./components/Product/productList";
import SearchContainer from "./components/Search/searchContainer";
import { Suspense } from "react";
import { LoadingSpinner } from "./components/loadingSpinner";
import { SearchParams } from "@/types/types";


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  
  const query = (params.query as string) || "";
  const searchType = (params.searchType as string) || "";

  const { products } = await getProducts({
    search: query,
    searchType,
    page: 1,
  });

  const isSearchMode = !!query || !!searchType;

  return (
    <div className="container mx-auto">
      <SearchContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductList
            query={query}
            searchType={searchType}
            initialData={products}
            isSearchMode={isSearchMode}
          />
        </Suspense>
      </SearchContainer>
    </div>
  );
}
