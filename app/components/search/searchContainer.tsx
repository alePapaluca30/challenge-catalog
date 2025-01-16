"use client";

import { useState } from "react";
import Search from "@/app/components/Search/search";
import { SearchContainerProps } from "@/types/types";
import { LoadingSpinner } from "../loadingSpinner";

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
          <LoadingSpinner />
        </div>
      ) : (
        children
      )}
    </>
  );
}
