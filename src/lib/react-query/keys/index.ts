// Query key factories for consistent cache keys
export const queryKeys = {
  news: {
    all: ['news'] as const,
    lists: () => [...queryKeys.news.all, 'list'] as const,
    list: (params?: Record<string, string | number | boolean>) =>
      [...queryKeys.news.lists(), params] as const,
    details: () => [...queryKeys.news.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.news.details(), id] as const,
  },
  events: {
    all: ['events'] as const,
    lists: () => [...queryKeys.events.all, 'list'] as const,
    list: (params?: Record<string, unknown>) =>
      [...queryKeys.events.lists(), params] as const,
    details: () => [...queryKeys.events.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.events.details(), id] as const,
  },
  admissions: {
    all: ['admissions'] as const,
    programs: () => [...queryKeys.admissions.all, 'programs'] as const,
    requirements: () => [...queryKeys.admissions.all, 'requirements'] as const,
    applications: () => [...queryKeys.admissions.all, 'applications'] as const,
  },
} as const;
