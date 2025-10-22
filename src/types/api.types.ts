import type { ID, Timestamp, Status } from './common.types';

// API Request/Response types
export interface ApiRequest<T = any> {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: T;
  timeout?: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ApiError[];
  meta?: ApiMeta;
  timestamp: Timestamp;
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, any>;
  timestamp: Timestamp;
}

export interface ApiMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  requestId?: string;
  processingTime?: number;
}

// Authentication types
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
}

export interface LoginResponse {
  user: {
    id: ID;
    email: string;
    profile: {
      firstName: string;
      lastName: string;
      avatar?: string;
    };
    roles: string[];
    permissions: string[];
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
  session: {
    id: ID;
    device: string;
    location?: string;
  };
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LogoutRequest {
  sessionId?: ID;
  allSessions?: boolean;
}

// File upload types
export interface FileUploadRequest {
  file: File;
  type: 'image' | 'document' | 'avatar' | 'gallery';
  category?: string;
  metadata?: Record<string, any>;
}

export interface FileUploadResponse {
  id: ID;
  url: string;
  thumbnail?: string;
  metadata: {
    name: string;
    size: number;
    type: string;
    width?: number;
    height?: number;
  };
  uploadedAt: Timestamp;
}

// Search types
export interface SearchRequest {
  query: string;
  type?: 'all' | 'news' | 'events' | 'people' | 'academics';
  filters?: Record<string, any>;
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export interface SearchResponse<T = any> {
  results: T[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
  filters?: Record<string, any>;
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
  timestamp: Timestamp;
  userId?: ID;
  sessionId?: ID;
}

export interface AnalyticsRequest {
  events: AnalyticsEvent[];
  userId?: ID;
  sessionId?: ID;
  userAgent?: string;
  ipAddress?: string;
}

export interface AnalyticsResponse {
  success: boolean;
  processedEvents: number;
  failedEvents: number;
  errors?: ApiError[];
}

// Notification types
export interface NotificationRequest {
  userId: ID;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  title: string;
  message: string;
  isImportant?: boolean;
  actionUrl?: string;
  actionText?: string;
  metadata?: Record<string, any>;
  scheduledAt?: Timestamp;
}

export interface NotificationResponse {
  id: ID;
  status: 'sent' | 'scheduled' | 'failed';
  sentAt?: Timestamp;
  scheduledAt?: Timestamp;
  error?: string;
}

// Audit log types
export interface AuditLogEntry {
  id: ID;
  userId?: ID;
  action: string;
  resource: string;
  resourceId?: ID;
  details: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  timestamp: Timestamp;
}

export interface AuditLogRequest {
  action: string;
  resource: string;
  resourceId?: ID;
  details: Record<string, any>;
}

export interface AuditLogResponse {
  id: ID;
  timestamp: Timestamp;
}

// Health check types
export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: Timestamp;
  services: {
    database: ServiceStatus;
    cache: ServiceStatus;
    storage: ServiceStatus;
    email: ServiceStatus;
    sms: ServiceStatus;
  };
  metrics: {
    uptime: number;
    memory: {
      used: number;
      total: number;
      percentage: number;
    };
    cpu: {
      usage: number;
    };
    requests: {
      total: number;
      successful: number;
      failed: number;
      averageResponseTime: number;
    };
  };
}

export interface ServiceStatus {
  status: 'up' | 'down' | 'degraded';
  responseTime?: number;
  lastCheck: Timestamp;
  error?: string;
}

// Rate limiting types
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: Timestamp;
  retryAfter?: number;
}

export interface RateLimitResponse {
  success: boolean;
  rateLimit: RateLimitInfo;
  message?: string;
}

// Webhook types
export interface WebhookRequest {
  url: string;
  events: string[];
  secret?: string;
  isActive: boolean;
  retryPolicy?: {
    maxRetries: number;
    retryDelay: number;
  };
}

export interface WebhookResponse {
  id: ID;
  url: string;
  events: string[];
  isActive: boolean;
  createdAt: Timestamp;
  lastTriggeredAt?: Timestamp;
}

export interface WebhookEvent {
  id: ID;
  webhookId: ID;
  event: string;
  payload: Record<string, any>;
  status: 'pending' | 'sent' | 'failed';
  attempts: number;
  maxAttempts: number;
  nextRetryAt?: Timestamp;
  lastAttemptAt?: Timestamp;
  error?: string;
  createdAt: Timestamp;
}

// API Client configuration
export interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  headers: Record<string, string>;
  interceptors?: {
    request?: (config: ApiRequest) => ApiRequest;
    response?: (response: ApiResponse) => ApiResponse;
    error?: (error: ApiError) => ApiError;
  };
}

// Error handling
export interface ApiException extends Error {
  code: string;
  status: number;
  details?: Record<string, any>;
  timestamp: Timestamp;
}

// Request/Response interceptors
export interface RequestInterceptor {
  onRequest: (config: ApiRequest) => ApiRequest | Promise<ApiRequest>;
  onRequestError: (error: any) => any;
}

export interface ResponseInterceptor {
  onResponse: (response: ApiResponse) => ApiResponse | Promise<ApiResponse>;
  onResponseError: (error: any) => any;
}
