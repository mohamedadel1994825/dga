import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export interface QuickLinksProps extends BaseComponentProps {
  links: QuickLink[];
  title: string;
  subtitle: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({
  links,
  title,
  subtitle,
  className,
  ...props
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
  };

  return (
    <section className={`py-16 ${className || ''}`} {...props}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {links.map(link => (
            <Card
              key={link.id}
              className='p-6 text-center hover:shadow-lg transition-shadow'
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${colorClasses[link.color]}`}
              >
                <span className='text-2xl'>{link.icon}</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                {link.title}
              </h3>
              <p className='text-sm text-gray-600 mb-4'>{link.description}</p>
              <Link href={link.href}>
                <Button variant='outline' className='w-full'>
                  Get Started
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
