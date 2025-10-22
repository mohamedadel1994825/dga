import type {
  ID,
  Timestamp,
  Status,
  LocalizedContent,
  LocalizedRichContent,
  PaginationParams,
  SearchParams,
} from './common.types';

export interface EventCategory {
  id: ID;
  name: LocalizedContent;
  slug: string;
  description?: LocalizedContent;
  color?: string;
  icon?: string;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface EventLocation {
  id: ID;
  name: LocalizedContent;
  address: LocalizedContent;
  city: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  venue?: LocalizedContent;
  capacity?: number;
  accessibility?: {
    wheelchair: boolean;
    parking: boolean;
    publicTransport: boolean;
  };
}

export interface EventSpeaker {
  id: ID;
  name: string;
  title?: LocalizedContent;
  organization?: string;
  bio?: LocalizedContent;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface EventSchedule {
  id: ID;
  title: LocalizedContent;
  description?: LocalizedContent;
  startTime: Timestamp;
  endTime: Timestamp;
  location?: EventLocation;
  speaker?: EventSpeaker;
  isBreak?: boolean;
  order: number;
}

export interface EventRegistration {
  id: ID;
  eventId: ID;
  attendee: {
    name: string;
    email: string;
    phone?: string;
    organization?: string;
    title?: string;
  };
  status: 'pending' | 'confirmed' | 'cancelled' | 'waitlist';
  registrationDate: Timestamp;
  confirmationCode?: string;
  notes?: string;
  dietaryRequirements?: string;
  accessibilityNeeds?: string;
}

export interface EventItem {
  id: ID;
  title: LocalizedRichContent;
  slug: string;
  description: LocalizedRichContent;
  excerpt: LocalizedContent;
  category: EventCategory;
  location: EventLocation;
  speakers: EventSpeaker[];
  schedule: EventSchedule[];
  startDate: Timestamp;
  endDate: Timestamp;
  registrationStart?: Timestamp;
  registrationEnd?: Timestamp;
  maxAttendees?: number;
  currentAttendees: number;
  isRegistrationOpen: boolean;
  isFree: boolean;
  price?: {
    amount: number;
    currency: string;
    earlyBird?: {
      amount: number;
      endDate: Timestamp;
    };
  };
  status: Status;
  isFeatured: boolean;
  isRecurring: boolean;
  recurrencePattern?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    endDate?: Timestamp;
  };
  image?: {
    url: string;
    alt: LocalizedContent;
    caption?: LocalizedContent;
  };
  gallery?: Array<{
    url: string;
    alt: LocalizedContent;
    caption?: LocalizedContent;
  }>;
  tags: string[];
  allowRegistration: boolean;
  requireApproval: boolean;
  sendReminders: boolean;
  reminderDays?: number[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt?: Timestamp;
  seo?: {
    metaTitle?: LocalizedContent;
    metaDescription?: LocalizedContent;
    keywords?: string[];
    canonical?: string;
  };
}

export interface EventFilters extends SearchParams {
  category?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
  isFree?: boolean;
  isRegistrationOpen?: boolean;
  isFeatured?: boolean;
  status?: Status;
}

export interface EventListParams extends PaginationParams, EventFilters {
  search?: string;
  sortBy?: 'startDate' | 'createdAt' | 'title' | 'popularity';
  upcoming?: boolean;
  past?: boolean;
}

export interface EventFormData {
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  categoryId: ID;
  locationId: ID;
  speakerIds: ID[];
  startDate: string;
  endDate: string;
  registrationStart?: string;
  registrationEnd?: string;
  maxAttendees?: number;
  isFree: boolean;
  price?: {
    amount: number;
    currency: string;
    earlyBird?: {
      amount: number;
      endDate: string;
    };
  };
  isFeatured: boolean;
  isRecurring: boolean;
  recurrencePattern?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    endDate?: string;
  };
  imageId?: ID;
  galleryIds?: ID[];
  tags: string[];
  allowRegistration: boolean;
  requireApproval: boolean;
  sendReminders: boolean;
  reminderDays?: number[];
  publishedAt?: string;
  seo?: {
    metaTitle?: {
      ar: string;
      en: string;
    };
    metaDescription?: {
      ar: string;
      en: string;
    };
    keywords?: string[];
  };
}

export interface EventStats {
  totalEvents: number;
  upcomingEvents: number;
  pastEvents: number;
  totalAttendees: number;
  totalRegistrations: number;
  popularCategories: Array<{
    category: EventCategory;
    count: number;
  }>;
  popularLocations: Array<{
    location: EventLocation;
    count: number;
  }>;
  topSpeakers: Array<{
    speaker: EventSpeaker;
    eventCount: number;
    totalAttendees: number;
  }>;
  monthlyStats: Array<{
    month: string;
    events: number;
    attendees: number;
    registrations: number;
  }>;
}

export interface EventCalendar {
  events: Array<{
    id: ID;
    title: LocalizedContent;
    start: Timestamp;
    end: Timestamp;
    color?: string;
    category: EventCategory;
    location: EventLocation;
    isRegistrationOpen: boolean;
    maxAttendees?: number;
    currentAttendees: number;
  }>;
  categories: EventCategory[];
  locations: EventLocation[];
}

export interface EventSearchResult {
  events: EventItem[];
  categories: EventCategory[];
  locations: EventLocation[];
  speakers: EventSpeaker[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
}

export interface EventRelated {
  id: ID;
  title: LocalizedRichContent;
  slug: string;
  excerpt: LocalizedContent;
  startDate: Timestamp;
  location: EventLocation;
  category: EventCategory;
  isRegistrationOpen: boolean;
  currentAttendees: number;
  maxAttendees?: number;
}

export interface EventReminder {
  id: ID;
  eventId: ID;
  attendeeEmail: string;
  reminderDate: Timestamp;
  isSent: boolean;
  sentAt?: Timestamp;
  type: 'registration' | 'reminder' | 'cancellation';
}

export interface EventFeedback {
  id: ID;
  eventId: ID;
  attendeeId: ID;
  rating: number;
  comments?: string;
  suggestions?: string;
  wouldRecommend: boolean;
  submittedAt: Timestamp;
}
