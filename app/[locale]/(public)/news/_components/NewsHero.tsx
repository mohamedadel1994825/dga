import React from 'react';
import { Button } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface NewsHeroProps extends BaseComponentProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

const NewsHero: React.FC<NewsHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  searchPlaceholder = 'Search news...',
  onSearch,
  className,
  ...props
}) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section
      className={`relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 ${
        className || ''
      }`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
      {...props}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h1>
          <p className='text-xl mb-8 opacity-90'>{subtitle}</p>

          {onSearch && (
            <form onSubmit={handleSearch} className='max-w-md mx-auto'>
              <div className='flex'>
                <input
                  type='text'
                  name='search'
                  placeholder={searchPlaceholder}
                  className='flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <Button
                  type='submit'
                  className='px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-l-none rounded-r-lg'
                >
                  Search
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
