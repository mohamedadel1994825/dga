import React from 'react';
import { NewsCard } from '@/components/features/news/NewsCard';
import type { BaseComponentProps } from '@/types';
import type { NewsArticle } from '@/components/features/news/NewsCard';

export interface FeaturedNewsProps extends BaseComponentProps {
  articles: NewsArticle[];
  title: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({
  articles,
  title,
  showViewAll = true,
  viewAllHref = '/news',
  className,
  ...props
}) => {
  return (
    <section className={`py-16 ${className || ''}`} {...props}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold text-gray-900'>{title}</h2>
          {showViewAll && (
            <a
              href={viewAllHref}
              className='text-blue-600 hover:text-blue-800 font-medium'
            >
              View All News →
            </a>
          )}
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              variant={index === 0 ? 'featured' : 'default'}
              showImage={true}
              showAuthor={true}
              showCategory={true}
              showTags={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
