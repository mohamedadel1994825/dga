'use client';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchEvents, fetchEventById } from '@/services/eventsService';
import { queryKeys } from '../keys';
import type { EventItem } from '@/types/events.types';
import type { PaginatedResponse } from '@/types/common.types';

export function useEventsList(
  params?: Record<string, string | number | boolean>,
  options?: UseQueryOptions<{ data: PaginatedResponse<EventItem> }, Error>
) {
  return useQuery({
    queryKey: queryKeys.events.list(params),
    queryFn: () => fetchEvents(params),
    ...options,
  });
}

export function useEventItem(
  id: string,
  options?: UseQueryOptions<{ data: EventItem }, Error>
) {
  return useQuery({
    queryKey: queryKeys.events.detail(id),
    queryFn: () => fetchEventById(id),
    enabled: Boolean(id),
    ...options,
  });
}
