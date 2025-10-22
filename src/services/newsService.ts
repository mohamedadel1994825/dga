import { http } from './http';
import { apiConfig } from '@/config/api.config';
import type { NewsArticle } from '@/types/news.types';
import type { PaginatedResponse } from '@/types/common.types';

export async function fetchNews(
  params?: Record<string, string | number | boolean>
) {
  const { data } = await http.get(`${apiConfig.endpoints.news}`, { params });
  return data as { data: PaginatedResponse<NewsArticle> };
}

export async function fetchNewsById(id: string) {
  const { data } = await http.get(`${apiConfig.endpoints.news}/${id}`);
  return data as { data: NewsArticle };
}
