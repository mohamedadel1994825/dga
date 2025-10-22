import React from 'react';
import { Button } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface AdmissionsHeroProps extends BaseComponentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
}

const AdmissionsHero: React.FC<AdmissionsHeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  className,
  ...props
}) => {
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
        <div className='max-w-3xl'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h1>
          <p className='text-xl mb-8 opacity-90'>{subtitle}</p>
          <Button
            href={ctaHref}
            size='lg'
            className='bg-white text-blue-600 hover:bg-gray-100'
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;
