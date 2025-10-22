import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SearchParams, FilterOptions } from '@/types';

interface SearchState {
  // Search query and filters
  query: string;
  filters: SearchParams;
  sortBy: string;
  sortOrder: 'asc' | 'desc';

  // Search results
  results: any[];
  totalResults: number;
  currentPage: number;
  resultsPerPage: number;
  totalPages: number;

  // Search state
  isSearching: boolean;
  hasSearched: boolean;
  searchTime: number;
  lastSearchQuery: string;

  // Filter options
  filterOptions: FilterOptions | null;

  // Search history
  searchHistory: string[];
  maxHistoryItems: number;

  // Actions
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchParams>) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setResults: (results: any[], totalResults: number) => void;
  setCurrentPage: (page: number) => void;
  setResultsPerPage: (perPage: number) => void;
  setSearching: (isSearching: boolean) => void;
  setSearchTime: (time: number) => void;
  setFilterOptions: (options: FilterOptions) => void;
  addToHistory: (query: string) => void;
  clearHistory: () => void;
  removeFromHistory: (query: string) => void;
  clearSearch: () => void;
  resetSearch: () => void;
}

const initialState = {
  query: '',
  filters: {},
  sortBy: 'relevance',
  sortOrder: 'desc' as const,
  results: [],
  totalResults: 0,
  currentPage: 1,
  resultsPerPage: 10,
  totalPages: 0,
  isSearching: false,
  hasSearched: false,
  searchTime: 0,
  lastSearchQuery: '',
  filterOptions: null,
  searchHistory: [],
  maxHistoryItems: 10,
};

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setQuery: query => {
        set({ query });
      },

      setFilters: filters => {
        set(state => ({
          filters: { ...state.filters, ...filters },
        }));
      },

      setSortBy: sortBy => {
        set({ sortBy });
      },

      setSortOrder: sortOrder => {
        set({ sortOrder });
      },

      setResults: (results, totalResults) => {
        const totalPages = Math.ceil(totalResults / get().resultsPerPage);
        set({
          results,
          totalResults,
          totalPages,
          hasSearched: true,
        });
      },

      setCurrentPage: currentPage => {
        set({ currentPage });
      },

      setResultsPerPage: resultsPerPage => {
        const totalPages = Math.ceil(get().totalResults / resultsPerPage);
        set({ resultsPerPage, totalPages });
      },

      setSearching: isSearching => {
        set({ isSearching });
      },

      setSearchTime: searchTime => {
        set({ searchTime });
      },

      setFilterOptions: filterOptions => {
        set({ filterOptions });
      },

      addToHistory: query => {
        if (!query.trim()) return;

        set(state => {
          const history = state.searchHistory.filter(item => item !== query);
          const newHistory = [query, ...history].slice(
            0,
            state.maxHistoryItems
          );

          return { searchHistory: newHistory };
        });
      },

      clearHistory: () => {
        set({ searchHistory: [] });
      },

      removeFromHistory: query => {
        set(state => ({
          searchHistory: state.searchHistory.filter(item => item !== query),
        }));
      },

      clearSearch: () => {
        set({
          query: '',
          filters: {},
          results: [],
          totalResults: 0,
          currentPage: 1,
          totalPages: 0,
          hasSearched: false,
          isSearching: false,
        });
      },

      resetSearch: () => {
        set(initialState);
      },
    }),
    {
      name: 'search-store',
      partialize: state => ({
        searchHistory: state.searchHistory,
        resultsPerPage: state.resultsPerPage,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
      }),
    }
  )
);
