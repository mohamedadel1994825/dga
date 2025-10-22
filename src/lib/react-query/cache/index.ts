import { QueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';

// Cache invalidation helpers
export function invalidateNewsQueries(queryClient: QueryClient) {
  return queryClient.invalidateQueries({ queryKey: queryKeys.news.all });
}

export function invalidateEventsQueries(queryClient: QueryClient) {
  return queryClient.invalidateQueries({ queryKey: queryKeys.events.all });
}

export function invalidateAdmissionsQueries(queryClient: QueryClient) {
  return queryClient.invalidateQueries({ queryKey: queryKeys.admissions.all });
}

// Prefetch helpers
export function prefetchNewsList(
  queryClient: QueryClient,
  params?: Record<string, unknown>
) {
  return queryClient.prefetchQuery({
    queryKey: queryKeys.news.list(params),
    queryFn: () =>
      import('@/services/newsService').then(m => m.fetchNews(params)),
  });
}

export function prefetchEventDetail(queryClient: QueryClient, id: string) {
  return queryClient.prefetchQuery({
    queryKey: queryKeys.events.detail(id),
    queryFn: () =>
      import('@/services/eventsService').then(m => m.fetchEventById(id)),
  });
}
