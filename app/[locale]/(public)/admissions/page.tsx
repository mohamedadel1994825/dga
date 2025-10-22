import React from 'react';
import AdmissionsHero from './_components/AdmissionsHero';
import ProgramsOverview from './_components/ProgramsOverview';
import ImportantDates from './_components/ImportantDates';
import QuickLinks from './_components/QuickLinks';

export default function AdmissionsPage() {
  // Sample data - in a real app, this would come from an API
  const programs = [
    {
      id: '1',
      name: 'Bachelor of Computer Science',
      description:
        'Comprehensive computer science program covering software development, algorithms, and system design.',
      duration: '4 years',
      degree: 'Bachelor',
      requirements: [
        'High school diploma',
        'SAT score 1200+',
        'Math and Science courses',
      ],
    },
    {
      id: '2',
      name: 'Master of Business Administration',
      description:
        'Advanced business administration program for future leaders.',
      duration: '2 years',
      degree: 'Master',
      requirements: [
        'Bachelor degree',
        'GMAT score 600+',
        'Work experience 2+ years',
      ],
    },
    {
      id: '3',
      name: 'Bachelor of Engineering',
      description: 'Engineering program with focus on practical applications.',
      duration: '4 years',
      degree: 'Bachelor',
      requirements: [
        'High school diploma',
        'Physics and Math courses',
        'English proficiency',
      ],
    },
  ];

  const importantDates = [
    {
      id: '1',
      title: 'Application Deadline',
      date: 'March 15, 2024',
      description: 'Last day to submit applications for Fall 2024',
      isUpcoming: true,
      isPast: false,
    },
    {
      id: '2',
      title: 'Document Submission',
      date: 'March 30, 2024',
      description: 'Deadline for submitting required documents',
      isUpcoming: true,
      isPast: false,
    },
    {
      id: '3',
      title: 'Entrance Exam',
      date: 'April 15, 2024',
      description: 'University entrance examination',
      isUpcoming: true,
      isPast: false,
    },
    {
      id: '4',
      title: 'Application Opens',
      date: 'January 1, 2024',
      description: 'Applications for Fall 2024 opened',
      isUpcoming: false,
      isPast: true,
    },
  ];

  const quickLinks = [
    {
      id: '1',
      title: 'Apply Now',
      description: 'Start your application process',
      href: '/admissions/apply',
      icon: '📝',
      color: 'blue' as const,
    },
    {
      id: '2',
      title: 'Requirements',
      description: 'Check admission requirements',
      href: '/admissions/requirements',
      icon: '📋',
      color: 'green' as const,
    },
    {
      id: '3',
      title: 'Check Status',
      description: 'Track your application',
      href: '/admissions/status',
      icon: '🔍',
      color: 'purple' as const,
    },
    {
      id: '4',
      title: 'Programs',
      description: 'Explore our programs',
      href: '/admissions/programs',
      icon: '🎓',
      color: 'orange' as const,
    },
  ];

  return (
    <main>
      <AdmissionsHero
        title='Join Imam University'
        subtitle='Begin your journey towards academic excellence and personal growth'
        ctaText='Apply Now'
        ctaHref='/admissions/apply'
      />

      <ProgramsOverview
        programs={programs}
        title='Academic Programs'
        subtitle='Choose from our wide range of undergraduate and graduate programs'
      />

      <ImportantDates
        dates={importantDates}
        title='Important Dates'
        subtitle='Stay updated with key deadlines and important dates'
      />

      <QuickLinks
        links={quickLinks}
        title='Quick Actions'
        subtitle='Get started with your application or learn more about our process'
      />
    </main>
  );
}
