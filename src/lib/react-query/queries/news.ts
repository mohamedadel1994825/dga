'use client';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchNews, fetchNewsById } from '@/services/newsService';
import { queryKeys } from '../keys';
import type { NewsItem } from '@/types/news.types';
import type { PaginatedResponse } from '@/types/common.types';

export function useNewsList(
  params?: Record<string, string | number | boolean>,
  options?: UseQueryOptions<{ data: PaginatedResponse<NewsItem> }, Error>
) {
  return useQuery({
    queryKey: queryKeys.news.list(params),
    queryFn: () => fetchNews(params),
    ...options,
  });
}

export function useNewsItem(
  id: string,
  options?: UseQueryOptions<{ data: NewsItem }, Error>
) {
  return useQuery({
    queryKey: queryKeys.news.detail(id),
    queryFn: () => fetchNewsById(id),
    enabled: Boolean(id),
    ...options,
  });
}
