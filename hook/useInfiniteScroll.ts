import { UseInfiniteScrollProps } from "@/types/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInfiniteScroll({
  fetchNextPage,
  hasNextPage,
  isSearchMode,
}: UseInfiniteScrollProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isSearchMode) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage, isSearchMode]);

  return { ref };
}
