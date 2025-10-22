import type {
  ID,
  Timestamp,
  Status,
  LocalizedContent,
  ContactInfo,
  SocialLinks,
} from './common.types';

export interface User {
  id: ID;
  email: string;
  username?: string;
  profile: UserProfile;
  roles: UserRole[];
  permissions: string[];
  preferences: UserPreferences;
  status: Status;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  lastLoginAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  middleName?: string;
  displayName?: string;
  title?: LocalizedContent;
  bio?: LocalizedContent;
  avatar?: string;
  coverImage?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  nationality?: string;
  nationalId?: string;
  passportNumber?: string;
  contact: ContactInfo;
  social: SocialLinks;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
  };
}

export interface UserRole {
  id: ID;
  name: string;
  displayName: LocalizedContent;
  description?: LocalizedContent;
  permissions: string[];
  isSystem: boolean;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'friends';
    showEmail: boolean;
    showPhone: boolean;
    showAddress: boolean;
  };
  accessibility: {
    fontSize: number;
    contrast: 'normal' | 'high';
    spacing: number;
    motion: 'normal' | 'reduced';
    screenReader: boolean;
  };
}

export interface UserSession {
  id: ID;
  userId: ID;
  token: string;
  refreshToken: string;
  device: {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    ip: string;
    userAgent: string;
  };
  location?: {
    country: string;
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  isActive: boolean;
  expiresAt: Timestamp;
  lastActivityAt: Timestamp;
  createdAt: Timestamp;
}

export interface UserActivity {
  id: ID;
  userId: ID;
  type:
    | 'login'
    | 'logout'
    | 'profile_update'
    | 'password_change'
    | 'email_change'
    | 'permission_change';
  description: LocalizedContent;
  metadata?: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  createdAt: Timestamp;
}

export interface UserNotification {
  id: ID;
  userId: ID;
  type: 'info' | 'success' | 'warning' | 'error' | 'system';
  title: LocalizedContent;
  message: LocalizedContent;
  isRead: boolean;
  isImportant: boolean;
  actionUrl?: string;
  actionText?: LocalizedContent;
  metadata?: Record<string, any>;
  sentAt: Timestamp;
  readAt?: Timestamp;
  expiresAt?: Timestamp;
}

export interface UserGroup {
  id: ID;
  name: LocalizedContent;
  description?: LocalizedContent;
  type: 'department' | 'committee' | 'project' | 'interest';
  members: User[];
  administrators: User[];
  isPublic: boolean;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface UserPermission {
  id: ID;
  name: string;
  displayName: LocalizedContent;
  description?: LocalizedContent;
  resource: string;
  action: string;
  conditions?: Record<string, any>;
  isSystem: boolean;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface UserFormData {
  email: string;
  password: string;
  confirmPassword: string;
  profile: {
    firstName: string;
    lastName: string;
    middleName?: string;
    title?: string;
    bio?: string;
    dateOfBirth?: string;
    gender?: 'male' | 'female' | 'other';
    nationality?: string;
    nationalId?: string;
    phone?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
  preferences?: {
    language: string;
    timezone: string;
    theme: 'light' | 'dark' | 'auto';
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };
}

export interface UserFilters {
  search?: string;
  role?: string;
  status?: Status;
  department?: string;
  dateFrom?: string;
  dateTo?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  lastLoginFrom?: string;
  lastLoginTo?: string;
}

export interface UserListParams {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'email' | 'createdAt' | 'lastLoginAt';
  order?: 'asc' | 'desc';
  filters?: UserFilters;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  newUsers: number;
  verifiedUsers: number;
  unverifiedUsers: number;
  usersByRole: Array<{
    role: UserRole;
    count: number;
  }>;
  usersByDepartment: Array<{
    department: string;
    count: number;
  }>;
  loginStats: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    totalLogins: number;
  };
  registrationStats: Array<{
    month: string;
    count: number;
  }>;
}

export interface UserSearchResult {
  users: User[];
  roles: UserRole[];
  departments: string[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
}

export interface UserExport {
  users: User[];
  exportedAt: Timestamp;
  exportedBy: ID;
  format: 'csv' | 'excel' | 'pdf';
  filters?: UserFilters;
}

export interface UserImport {
  file: File;
  mapping: Record<string, string>;
  options: {
    updateExisting: boolean;
    skipDuplicates: boolean;
    sendWelcomeEmail: boolean;
  };
  results?: {
    total: number;
    successful: number;
    failed: number;
    errors: Array<{
      row: number;
      field: string;
      message: string;
    }>;
  };
}
