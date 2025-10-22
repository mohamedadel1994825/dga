import { http } from './http';
import { apiConfig } from '@/config/api.config';
import type { Event } from '@/types/events.types';
import type { PaginatedResponse } from '@/types/common.types';

export async function fetchEvents(
  params?: Record<string, string | number | boolean>
) {
  const { data } = await http.get(`${apiConfig.endpoints.events}`, { params });
  return data as { data: PaginatedResponse<Event> };
}

export async function fetchEventById(id: string) {
  const { data } = await http.get(`${apiConfig.endpoints.events}/${id}`);
  return data as { data: Event };
}
