"use client";

import { useState } from "react";
import Search from "@/app/components/search/search";
import { SearchContainerProps } from "@/types/types";
import { LoadingComponent } from "../loader/page";

export default function SearchContainer({ children }: SearchContainerProps) {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchStart = () => setIsSearching(true);
  const handleSearchEnd = () => setIsSearching(false);

  return (
    <>
      <div className="flex flex-col border rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-bold mb-4 w-full">Búsqueda</h1>
        <Search
          onSearchStart={handleSearchStart}
          onSearchEnd={handleSearchEnd}
        />
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center h-64 bg-ye">
          <LoadingComponent />
        </div>
      ) : (
        children
      )}
    </>
  );
}
