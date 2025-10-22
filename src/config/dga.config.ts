import type { Locale } from './site.config';

export const dgaConfig = {
  // DGA Compliance Settings
  compliance: {
    wcag: '2.1',
    level: 'AA',
    version: '2023',
  },

  // Accessibility Settings
  accessibility: {
    fontSize: {
      min: 14,
      max: 24,
      default: 16,
      step: 2,
    },
    contrast: {
      normal: 4.5,
      large: 3,
      enhanced: 7,
    },
    spacing: {
      min: 1.5,
      max: 2.5,
      default: 1.5,
    },
    motion: {
      reduce: false,
      respectPrefersReducedMotion: true,
    },
  },

  // DGA Design System
  designSystem: {
    colors: {
      primary: '#1E40AF', // Blue
      secondary: '#059669', // Green
      accent: '#DC2626', // Red
      neutral: '#6B7280', // Gray
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
    typography: {
      fontFamily: {
        arabic: 'IBM Plex Sans Arabic',
        latin: 'Geist',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  // DGA Components Configuration
  components: {
    button: {
      variants: ['primary', 'secondary', 'outline', 'ghost'],
      sizes: ['sm', 'md', 'lg'],
      disabled: true,
    },
    form: {
      validation: 'real-time',
      errorDisplay: 'inline',
      requiredIndicator: true,
    },
    navigation: {
      keyboardAccessible: true,
      ariaLabels: true,
      skipLinks: true,
    },
    modal: {
      focusTrap: true,
      escapeKey: true,
      backdrop: true,
    },
  },

  // DGA Web Components
  webComponents: {
    searchBox: {
      enabled: true,
      placeholder: {
        ar: 'البحث في الموقع...',
        en: 'Search the website...',
      },
      speechRecognition: true,
    },
    header: {
      enabled: true,
      logo: true,
      navigation: true,
      languageToggle: true,
    },
    footer: {
      enabled: true,
      links: true,
      social: true,
      contact: true,
    },
  },

  // DGA Analytics
  analytics: {
    enabled: true,
    trackingId: process.env.NEXT_PUBLIC_DGA_ANALYTICS_ID,
    events: {
      pageView: true,
      click: true,
      formSubmit: true,
      download: true,
      search: true,
    },
  },

  // DGA Security
  security: {
    csp: {
      enabled: true,
      directives: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          'https://www.googletagmanager.com',
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
        ],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'img-src': ["'self'", 'data:', 'https:'],
        'connect-src': ["'self'", 'https://api.imamu.edu.sa'],
      },
    },
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  },
} as const;

export const dgaValidationRules = {
  // Form validation rules
  form: {
    required: {
      message: {
        ar: 'هذا الحقل مطلوب',
        en: 'This field is required',
      },
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: {
        ar: 'يرجى إدخال بريد إلكتروني صحيح',
        en: 'Please enter a valid email address',
      },
    },
    phone: {
      pattern: /^(\+966|0)?[5-9][0-9]{8}$/,
      message: {
        ar: 'يرجى إدخال رقم هاتف صحيح',
        en: 'Please enter a valid phone number',
      },
    },
    nationalId: {
      pattern: /^[1-2][0-9]{9}$/,
      message: {
        ar: 'يرجى إدخال رقم هوية صحيح',
        en: 'Please enter a valid national ID',
      },
    },
  },

  // File upload rules
  file: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'application/pdf',
      'application/msword',
    ],
    message: {
      ar: 'نوع الملف غير مدعوم أو حجمه كبير جداً',
      en: 'File type not supported or file too large',
    },
  },
} as const;

export function getDGAConfig(locale: Locale) {
  return {
    ...dgaConfig,
    locale,
    isRTL: locale === 'ar',
  };
}
