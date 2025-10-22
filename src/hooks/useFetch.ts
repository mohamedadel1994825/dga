import { useState, useEffect, useCallback } from 'react';
import type { ApiResponse, LoadingState } from '@/types';

interface UseFetchOptions {
  immediate?: boolean;
  retries?: number;
  retryDelay?: number;
}

interface UseFetchReturn<T> extends LoadingState {
  data: T | null;
  refetch: () => Promise<void>;
  mutate: (data: T) => void;
}

export function useFetch<T>(
  url: string | null,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const { immediate = true, retries = 3, retryDelay = 1000 } = options;

  const [state, setState] = useState<LoadingState & { data: T | null }>({
    data: null,
    isLoading: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    if (!url) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse<T> = await response.json();

        setState({
          data: data.data,
          isLoading: false,
          error: null,
        });

        return;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error('Unknown error');

        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, retryDelay));
        }
      }
    }

    setState(prev => ({
      ...prev,
      isLoading: false,
      error: lastError?.message || 'Failed to fetch data',
    }));
  }, [url, retries, retryDelay]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  const mutate = useCallback((data: T) => {
    setState(prev => ({ ...prev, data }));
  }, []);

  useEffect(() => {
    if (immediate && url) {
      fetchData();
    }
  }, [immediate, url, fetchData]);

  return {
    ...state,
    refetch,
    mutate,
  };
}
