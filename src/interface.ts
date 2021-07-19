export interface Character {
  name: string;
  portrayed: string;
  img: string;
}

export interface SortType {
  label: string;
  sortFn: (a: any, b: any) => any;
}

export interface SortTypeDictionary {
  [index: string]: SortType;
}

export interface Filters {
  searchTerm: string;
  sortType: string;
}

export interface FilterActions {
  setSearchTerm: (value: string) => void;
  setSortType: (value: string) => void;
}

export interface UseFilterOptions {
  initialSearchTerm?: string;
  initialSortType?: string;
  searchFn: (list: Array<any>, searchTerm: string) => Array<any>;
  sortTypes: SortTypeDictionary;
}

export interface UseFilterReturnValue {
  filteredList: Array<any>;
  filters: Filters;
  actions: FilterActions;
}
