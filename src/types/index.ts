// Common types
export * from './common.types';

// Domain-specific types
export * from './news.types';
export * from './events.types';
export * from './admission.types';
export * from './user.types';

// API types
export * from './api.types';

// DGA types
export * from './dga.types';

// Re-export commonly used types for convenience
export type {
  ID,
  Timestamp,
  Status,
  LocalizedContent,
  LocalizedRichContent,
  ApiResponse,
  PaginationParams,
  SearchParams,
  BreadcrumbItem,
  ValidationError,
  FormState,
  AccessibilitySettings,
  Theme,
  UserPreferences,
} from './common.types';

export type { Locale, isRTL, getDirection } from '../config/site.config';
