import React from 'react';
import { Card } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface ImportantDate {
  id: string;
  title: string;
  date: string;
  description: string;
  isUpcoming: boolean;
  isPast: boolean;
}

export interface ImportantDatesProps extends BaseComponentProps {
  dates: ImportantDate[];
  title: string;
  subtitle: string;
}

const ImportantDates: React.FC<ImportantDatesProps> = ({
  dates,
  title,
  subtitle,
  className,
  ...props
}) => {
  const upcomingDates = dates.filter(date => date.isUpcoming);
  const pastDates = dates.filter(date => date.isPast);

  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`} {...props}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Upcoming Dates */}
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-green-500 rounded-full mr-3'></span>
              Upcoming Dates
            </h3>
            <div className='space-y-4'>
              {upcomingDates.map(date => (
                <Card key={date.id} className='p-4 border-l-4 border-green-500'>
                  <div className='flex justify-between items-start mb-2'>
                    <h4 className='font-medium text-gray-900'>{date.title}</h4>
                    <span className='text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded'>
                      {date.date}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600'>{date.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Dates */}
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-6 flex items-center'>
              <span className='w-3 h-3 bg-gray-400 rounded-full mr-3'></span>
              Past Dates
            </h3>
            <div className='space-y-4'>
              {pastDates.map(date => (
                <Card
                  key={date.id}
                  className='p-4 border-l-4 border-gray-300 opacity-75'
                >
                  <div className='flex justify-between items-start mb-2'>
                    <h4 className='font-medium text-gray-700'>{date.title}</h4>
                    <span className='text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded'>
                      {date.date}
                    </span>
                  </div>
                  <p className='text-sm text-gray-500'>{date.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
