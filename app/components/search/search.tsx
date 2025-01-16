"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SearchProps } from "@/types/types";

export default function Search({ onSearchStart, onSearchEnd }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchType, setSearchType] = useState(
    searchParams.get("searchType") || "sku"
  );
  const [inputValue, setInputValue] = useState(searchParams.get("query") || "");

  useEffect(() => {
    setSearchType(searchParams.get("searchType") || "sku");
    setInputValue(searchParams.get("query") || "");
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term) => {
    onSearchStart();
    updateSearchParams(term, searchType);

    setTimeout(() => {
      onSearchEnd();
    }, 1000);
  }, 500);

  const handleSearchTypeChange = (value: string) => {
    setSearchType(value);
    setInputValue("");
    updateSearchParams("", value);
  };

  const updateSearchParams = (term: string, type: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      params.set("searchType", type);
    } else {
      params.delete("query");
      params.set("searchType", type);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const placeholderInput = `Buscar por ${
    searchType === "name" ? "nombre" : searchType
  }`;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <RadioGroup
        value={searchType}
        onValueChange={handleSearchTypeChange}
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sku" id="sku" />
          <Label htmlFor="sku" className="font-bold text-base">
            Por SKU
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="name" id="name" />
          <Label htmlFor="name" className="font-bold text-base">
            Por Nombre
          </Label>
        </div>
      </RadioGroup>

      <div className="flex-1 relative">
        <div className="flex">
          <Input
            placeholder={placeholderInput}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleSearch(e.target.value);
            }}
            value={inputValue}
          />
          <Button
            className="right-0 absolute"
            variant="ghost"
            onClick={() => {
              setInputValue("");
              updateSearchParams("", searchType);
            }}
          >
            Limpiar campo
          </Button>
        </div>
      </div>
    </div>
  );
}
