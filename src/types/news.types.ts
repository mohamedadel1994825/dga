import type {
  ID,
  Timestamp,
  Status,
  LocalizedContent,
  LocalizedRichContent,
  PaginationParams,
  SearchParams,
} from './common.types';

export interface NewsCategory {
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

export interface NewsTag {
  id: ID;
  name: string;
  slug: string;
  color?: string;
  usageCount: number;
}

export interface NewsAuthor {
  id: ID;
  name: string;
  title?: LocalizedContent;
  avatar?: string;
  bio?: LocalizedContent;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface NewsImage {
  id: ID;
  url: string;
  alt: LocalizedContent;
  caption?: LocalizedContent;
  width: number;
  height: number;
  thumbnail?: string;
}

export interface NewsItem {
  id: ID;
  title: LocalizedRichContent;
  slug: string;
  excerpt: LocalizedContent;
  content: LocalizedRichContent;
  featuredImage?: NewsImage;
  gallery?: NewsImage[];
  category: NewsCategory;
  tags: NewsTag[];
  author: NewsAuthor;
  status: Status;
  isFeatured: boolean;
  isBreaking: boolean;
  allowComments: boolean;
  commentCount: number;
  viewCount: number;
  shareCount: number;
  likeCount: number;
  publishedAt: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  seo?: {
    metaTitle?: LocalizedContent;
    metaDescription?: LocalizedContent;
    keywords?: string[];
    canonical?: string;
  };
}

export interface NewsComment {
  id: ID;
  newsId: ID;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  content: string;
  parentId?: ID;
  replies: NewsComment[];
  isApproved: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface NewsFilters extends SearchParams {
  category?: string;
  tags?: string[];
  author?: string;
  dateFrom?: string;
  dateTo?: string;
  isFeatured?: boolean;
  isBreaking?: boolean;
  status?: Status;
}

export interface NewsListParams extends PaginationParams, NewsFilters {
  search?: string;
  sortBy?: 'publishedAt' | 'createdAt' | 'viewCount' | 'likeCount' | 'title';
}

export interface NewsFormData {
  title: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  categoryId: ID;
  tags: string[];
  featuredImageId?: ID;
  galleryIds?: ID[];
  isFeatured: boolean;
  isBreaking: boolean;
  allowComments: boolean;
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

export interface NewsStats {
  totalNews: number;
  publishedNews: number;
  draftNews: number;
  featuredNews: number;
  breakingNews: number;
  totalViews: number;
  totalComments: number;
  totalLikes: number;
  totalShares: number;
  popularCategories: Array<{
    category: NewsCategory;
    count: number;
  }>;
  popularTags: Array<{
    tag: NewsTag;
    count: number;
  }>;
  recentNews: NewsItem[];
  topAuthors: Array<{
    author: NewsAuthor;
    newsCount: number;
    totalViews: number;
  }>;
}

export interface NewsSearchResult {
  news: NewsItem[];
  categories: NewsCategory[];
  tags: NewsTag[];
  authors: NewsAuthor[];
  totalResults: number;
  searchTime: number;
  suggestions?: string[];
}

export interface NewsRelated {
  id: ID;
  title: LocalizedRichContent;
  slug: string;
  excerpt: LocalizedContent;
  featuredImage?: NewsImage;
  category: NewsCategory;
  publishedAt: Timestamp;
  viewCount: number;
}

export interface NewsArchive {
  year: number;
  month: number;
  count: number;
  news: NewsItem[];
}

export interface NewsRSS {
  title: LocalizedContent;
  description: LocalizedContent;
  link: string;
  language: string;
  lastBuildDate: Timestamp;
  items: Array<{
    title: LocalizedContent;
    description: LocalizedContent;
    link: string;
    guid: string;
    pubDate: Timestamp;
    category: string;
    author: string;
  }>;
}
