import { Suspense } from "react";
import ProductList from "./components/productList/page";
import { Loader } from "./components/loader/page";
import SearchContainer from "./components/search/searchContainer";
import { ProductListProps } from "@/types/types";

export default function Page({
  searchParams,
}: {
  searchParams?: ProductListProps;
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const searchType = searchParams?.searchType || "sku";

  return (
    <div className="container mx-auto">
      <SearchContainer>
        <Suspense fallback={<Loader />}>
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
