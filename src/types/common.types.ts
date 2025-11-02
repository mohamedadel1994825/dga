import type { Locale } from '../config/site.config';

// Base types
export type ID = string | number;
export type Timestamp = string | Date;
export type Status =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'approved'
  | 'rejected';

// Localized content
export interface LocalizedContent {
  ar: string;
  en: string;
}

export interface LocalizedRichContent {
  ar: {
    title: string;
    content: string;
    excerpt?: string;
  };
  en: {
    title: string;
    content: string;
    excerpt?: string;
  };
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, unknown>;
}

// Pagination
export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Search and filtering
export interface SearchParams {
  query?: string;
  category?: string;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
  status?: Status;
}

export interface FilterOptions {
  categories: Array<{
    id: string;
    name: LocalizedContent;
    count: number;
  }>;
  tags: Array<{
    id: string;
    name: string;
    count: number;
  }>;
  dateRanges: Array<{
    label: LocalizedContent;
    value: string;
  }>;
}

// File upload
export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  thumbnail?: string;
  uploadedAt: Timestamp;
}

// Contact information
export interface ContactInfo {
  email: string;
  phone: string;
  address: LocalizedContent;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Social media links
export interface SocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
}

// SEO metadata
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

// Breadcrumb navigation
export interface BreadcrumbItem {
  label: LocalizedContent;
  href: string;
  current?: boolean;
}

// Form validation
export interface ValidationError {
  field: string;
  message: LocalizedContent;
  code: string;
}

export interface FormState<T = unknown> {
  data: T;
  errors: ValidationError[];
  isSubmitting: boolean;
  isDirty: boolean;
  isValid: boolean;
}

// Accessibility
export interface AccessibilitySettings {
  fontSize: number;
  contrast: 'normal' | 'high';
  spacing: number;
  motion: 'normal' | 'reduced';
  screenReader: boolean;
}

// Theme
export interface Theme {
  mode: 'light' | 'dark' | 'auto';
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  direction: 'ltr' | 'rtl';
}

// User preferences
export interface UserPreferences {
  language: Locale;
  theme: Theme;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Event handlers
export type EventHandler<T = unknown> = (event: T) => void;
export type AsyncEventHandler<T = unknown> = (event: T) => Promise<void>;

// Component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface AsyncState<T> extends LoadingState {
  data?: T;
}
