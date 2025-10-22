import React from 'react';
import { Card } from '@/components/ui';
import type { BaseComponentProps } from '@/types';

export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  degree: string;
  requirements: string[];
}

export interface ProgramsOverviewProps extends BaseComponentProps {
  programs: Program[];
  title: string;
  subtitle: string;
}

const ProgramsOverview: React.FC<ProgramsOverviewProps> = ({
  programs,
  title,
  subtitle,
  className,
  ...props
}) => {
  return (
    <section className={`py-16 ${className || ''}`} {...props}>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{title}</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>{subtitle}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {programs.map(program => (
            <Card
              key={program.id}
              className='p-6 hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold mb-2'>{program.name}</h3>
              <p className='text-gray-600 mb-4'>{program.description}</p>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-sm text-gray-500'>Duration:</span>
                  <span className='text-sm font-medium'>
                    {program.duration}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm text-gray-500'>Degree:</span>
                  <span className='text-sm font-medium'>{program.degree}</span>
                </div>
              </div>
              <div className='mt-4'>
                <h4 className='text-sm font-medium text-gray-700 mb-2'>
                  Requirements:
                </h4>
                <ul className='text-sm text-gray-600 space-y-1'>
                  {program.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className='flex items-center'>
                      <span className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-2'></span>
                      {req}
                    </li>
                  ))}
                  {program.requirements.length > 3 && (
                    <li className='text-blue-600 text-xs'>
                      +{program.requirements.length - 3} more requirements
                    </li>
                  )}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
