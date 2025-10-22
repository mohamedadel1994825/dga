import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export interface NewsCategoriesProps extends BaseComponentProps {
  categories: NewsCategory[];
  title: string;
  activeCategory?: string;
}

const NewsCategories: React.FC<NewsCategoriesProps> = ({
  categories,
  title,
  activeCategory,
  className,
  ...props
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    green: 'bg-green-100 text-green-800 hover:bg-green-200',
    purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    orange: 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    red: 'bg-red-100 text-red-800 hover:bg-red-200',
  };

  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`} {...props}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
          <p className='text-lg text-gray-600'>Browse news by category</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {categories.map(category => (
            <Link
              key={category.id}
              href={`/news?category=${category.slug}`}
              className={`block p-4 rounded-lg text-center transition-colors ${
                activeCategory === category.slug
                  ? 'bg-blue-600 text-white'
                  : colorClasses[category.color]
              }`}
            >
              <div className='text-lg font-semibold mb-1'>{category.name}</div>
              <div className='text-sm opacity-75'>
                {category.count} articles
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
