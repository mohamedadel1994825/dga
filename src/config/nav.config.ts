import type { Locale } from './site.config';

export interface NavItem {
  id: string;
  label: Record<Locale, string>;
  href: string;
  children?: NavItem[];
  external?: boolean;
  icon?: string;
}

export const mainNavigation: NavItem[] = [
  {
    id: 'home',
    label: {
      ar: 'الرئيسية',
      en: 'Home',
    },
    href: '/',
  },
  {
    id: 'about',
    label: {
      ar: 'عن الجامعة',
      en: 'About',
    },
    href: '/about',
    children: [
      {
        id: 'history',
        label: {
          ar: 'تاريخ الجامعة',
          en: 'University History',
        },
        href: '/about/history',
      },
      {
        id: 'vision',
        label: {
          ar: 'الرؤية والرسالة',
          en: 'Vision & Mission',
        },
        href: '/about/vision',
      },
      {
        id: 'leadership',
        label: {
          ar: 'القيادة',
          en: 'Leadership',
        },
        href: '/about/leadership',
      },
    ],
  },
  {
    id: 'admissions',
    label: {
      ar: 'الالتحاق',
      en: 'Admissions',
    },
    href: '/admissions',
    children: [
      {
        id: 'apply',
        label: {
          ar: 'التقديم',
          en: 'Apply',
        },
        href: '/admissions/apply',
      },
      {
        id: 'requirements',
        label: {
          ar: 'المتطلبات',
          en: 'Requirements',
        },
        href: '/admissions/requirements',
      },
      {
        id: 'programs',
        label: {
          ar: 'البرامج',
          en: 'Programs',
        },
        href: '/admissions/programs',
      },
    ],
  },
  {
    id: 'academics',
    label: {
      ar: 'الأكاديمية',
      en: 'Academics',
    },
    href: '/academics',
    children: [
      {
        id: 'colleges',
        label: {
          ar: 'الكليات',
          en: 'Colleges',
        },
        href: '/academics/colleges',
      },
      {
        id: 'departments',
        label: {
          ar: 'الأقسام',
          en: 'Departments',
        },
        href: '/academics/departments',
      },
      {
        id: 'programs',
        label: {
          ar: 'البرامج',
          en: 'Programs',
        },
        href: '/academics/programs',
      },
    ],
  },
  {
    id: 'research',
    label: {
      ar: 'البحث العلمي',
      en: 'Research',
    },
    href: '/research',
    children: [
      {
        id: 'centers',
        label: {
          ar: 'مراكز البحوث',
          en: 'Research Centers',
        },
        href: '/research/centers',
      },
      {
        id: 'publications',
        label: {
          ar: 'المنشورات',
          en: 'Publications',
        },
        href: '/research/publications',
      },
      {
        id: 'grants',
        label: {
          ar: 'المنح البحثية',
          en: 'Research Grants',
        },
        href: '/research/grants',
      },
    ],
  },
  {
    id: 'news',
    label: {
      ar: 'الأخبار',
      en: 'News',
    },
    href: '/news',
  },
  {
    id: 'events',
    label: {
      ar: 'الفعاليات',
      en: 'Events',
    },
    href: '/events',
  },
  {
    id: 'contact',
    label: {
      ar: 'اتصل بنا',
      en: 'Contact',
    },
    href: '/contact',
  },
];

export const footerNavigation = {
  quickLinks: [
    {
      id: 'student-portal',
      label: {
        ar: 'البوابة الطلابية',
        en: 'Student Portal',
      },
      href: '/student-portal',
    },
    {
      id: 'faculty-portal',
      label: {
        ar: 'بوابة أعضاء هيئة التدريس',
        en: 'Faculty Portal',
      },
      href: '/faculty-portal',
    },
    {
      id: 'library',
      label: {
        ar: 'المكتبة الرقمية',
        en: 'Digital Library',
      },
      href: '/library',
    },
    {
      id: 'jobs',
      label: {
        ar: 'الوظائف',
        en: 'Jobs',
      },
      href: '/jobs',
    },
  ],
  academic: [
    {
      id: 'colleges',
      label: {
        ar: 'الكليات',
        en: 'Colleges',
      },
      href: '/academics/colleges',
    },
    {
      id: 'departments',
      label: {
        ar: 'الأقسام',
        en: 'Departments',
      },
      href: '/academics/departments',
    },
    {
      id: 'programs',
      label: {
        ar: 'البرامج الأكاديمية',
        en: 'Academic Programs',
      },
      href: '/academics/programs',
    },
  ],
  services: [
    {
      id: 'admissions',
      label: {
        ar: 'الالتحاق',
        en: 'Admissions',
      },
      href: '/admissions',
    },
    {
      id: 'registration',
      label: {
        ar: 'التسجيل',
        en: 'Registration',
      },
      href: '/registration',
    },
    {
      id: 'grades',
      label: {
        ar: 'الدرجات',
        en: 'Grades',
      },
      href: '/grades',
    },
  ],
} as const;
