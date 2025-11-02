import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, Badge } from '../../../ui';
import type { BaseComponentProps } from '@/types';

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  readTime?: string;
}

export interface NewsCardProps extends BaseComponentProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
  showImage?: boolean;
  showAuthor?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  article,
  variant = 'default',
  showImage = true,
  showAuthor = true,
  showCategory = true,
  showTags = false,
  className,
  ...props
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'featured':
        return 'md:col-span-2 lg:col-span-2';
      case 'compact':
        return 'flex flex-row space-x-4';
      default:
        return '';
    }
  };

  const getImageClasses = () => {
    switch (variant) {
      case 'featured':
        return 'h-64 md:h-80';
      case 'compact':
        return 'w-32 h-24 flex-shrink-0';
      default:
        return 'h-48';
    }
  };

  const getContentClasses = () => {
    switch (variant) {
      case 'compact':
        return 'flex-1 min-w-0';
      default:
        return '';
    }
  };

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow ${getVariantClasses()} ${className || ''}`}
      {...props}
    >
      <Link href={`/news/${article.slug}`} className='block'>
        {showImage && article.imageUrl && (
          <div className={`relative ${getImageClasses()}`}>
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className='object-cover'
            />
            {showCategory && (
              <div className='absolute top-4 left-4'>
                <Badge variant='info' className='bg-white/90 text-gray-800'>
                  {article.category}
                </Badge>
              </div>
            )}
          </div>
        )}

        <div className={`p-6 ${getContentClasses()}`}>
          <div className='flex items-center justify-between mb-2'>
            <span className='text-sm text-gray-500'>
              {formatDate(article.publishedAt)}
            </span>
            {article.readTime && (
              <span className='text-sm text-gray-500'>{article.readTime}</span>
            )}
          </div>

          <h3
            className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${
              variant === 'featured' ? 'text-xl' : 'text-lg'
            }`}
          >
            {article.title}
          </h3>

          <p
            className={`text-gray-600 mb-4 ${
              variant === 'compact' ? 'line-clamp-2' : 'line-clamp-3'
            }`}
          >
            {article.excerpt}
          </p>

          <div className='flex items-center justify-between'>
            {showAuthor && (
              <span className='text-sm text-gray-500'>By {article.author}</span>
            )}

            {showTags && article.tags.length > 0 && (
              <div className='flex flex-wrap gap-1'>
                {article.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant='outline' size='sm'>
                    {tag}
                  </Badge>
                ))}
                {article.tags.length > 2 && (
                  <span className='text-xs text-gray-500'>
                    +{article.tags.length - 2} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default NewsCard;
