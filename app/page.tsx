import { Suspense } from "react";
import SearchContainer from "./components/search/searchContainer";
import { LoadingSpinner } from "./components/LoadingSpinner";
import ProductList from "./components/Product/productList";
import { SearchParams } from "@/types/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const query = params.query || "";
  const currentPage = Number(params.page) || 1;
  const searchType = params.searchType || "sku";

  return (
    <div className="container mx-auto">
      <SearchContainer>
        <Suspense fallback={<LoadingSpinner />}>
          <ProductList
            query={query}
            searchType={searchType}
            currentPage={currentPage}
          />
        </Suspense>
      </SearchContainer>
    </div>
  );
}

