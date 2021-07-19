import { useState, useMemo } from "react";

import { UseFilterOptions } from "./interface";

export default function useFilters(
  list: Array<any>,
  { initialSearchTerm, initialSortType, searchFn, sortTypes }: UseFilterOptions
) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");
  const [sortType, setSortType] = useState(
    initialSortType || Object.keys(sortTypes)[0]
  );

  const filteredList = useMemo(() => {
    let filtered = list;

    filtered = searchFn(list, searchTerm as string);

    return filtered.sort(sortTypes[sortType].sortFn);
  }, [list, searchTerm, sortType, sortTypes, searchFn]);

  return {
    filteredList,
    filters: {
      searchTerm,
      sortType,
    },
    actions: {
      setSearchTerm,
      setSortType,
    },
  };
}
