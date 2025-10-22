export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.imamu.edu.sa',
  version: 'v1',
  timeout: 30000, // 30 seconds
  retries: 3,
  retryDelay: 1000, // 1 second
  endpoints: {
    news: '/news',
    events: '/events',
    admissions: '/admissions',
    auth: {
      login: '/auth/login',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
      profile: '/auth/profile',
    },
  },
} as const;

export const apiEndpoints = {
  // News endpoints
  news: {
    list: '/news',
    detail: (id: string) => `/news/${id}`,
    categories: '/news/categories',
    search: '/news/search',
  },

  // Events endpoints
  events: {
    list: '/events',
    detail: (id: string) => `/events/${id}`,
    upcoming: '/events/upcoming',
    past: '/events/past',
    categories: '/events/categories',
  },

  // Admissions endpoints
  admissions: {
    programs: '/admissions/programs',
    requirements: '/admissions/requirements',
    apply: '/admissions/apply',
    status: (id: string) => `/admissions/status/${id}`,
    documents: '/admissions/documents',
  },

  // Authentication endpoints
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    profile: '/auth/profile',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },

  // Search endpoints
  search: {
    global: '/search',
    news: '/search/news',
    events: '/search/events',
    academics: '/search/academics',
    people: '/search/people',
  },

  // Contact endpoints
  contact: {
    send: '/contact/send',
    departments: '/contact/departments',
    offices: '/contact/offices',
  },

  // User management
  users: {
    profile: '/users/profile',
    update: '/users/update',
    avatar: '/users/avatar',
  },

  // File upload
  upload: {
    image: '/upload/image',
    document: '/upload/document',
    avatar: '/upload/avatar',
  },
} as const;

export const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
} as const;

export const apiErrorMessages = {
  network: 'Network error. Please check your connection.',
  timeout: 'Request timeout. Please try again.',
  unauthorized: 'Unauthorized access. Please login.',
  forbidden: 'Access denied. You do not have permission.',
  notFound: 'Resource not found.',
  serverError: 'Server error. Please try again later.',
  validation: 'Validation error. Please check your input.',
} as const;

export const apiStatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;
