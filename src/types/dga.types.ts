import type { ID, Timestamp, LocalizedContent } from './common.types';

// DGA Compliance types
export interface DGACompliance {
  wcag: {
    version: string;
    level: 'A' | 'AA' | 'AAA';
    conformance: number; // percentage
    issues: DGAIssue[];
  };
  accessibility: {
    score: number;
    tests: DGAAccessibilityTest[];
  };
  performance: {
    score: number;
    metrics: DGAPerformanceMetric[];
  };
  security: {
    score: number;
    vulnerabilities: DGASecurityVulnerability[];
  };
  lastAudit: Timestamp;
  nextAudit: Timestamp;
}

export interface DGAIssue {
  id: ID;
  type: 'error' | 'warning' | 'info';
  category: 'accessibility' | 'performance' | 'security' | 'seo';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  element?: string;
  line?: number;
  column?: number;
  solution: string;
  resources: string[];
  isFixed: boolean;
  fixedAt?: Timestamp;
}

export interface DGAAccessibilityTest {
  id: ID;
  name: string;
  description: string;
  category:
    | 'keyboard'
    | 'screen_reader'
    | 'color_contrast'
    | 'focus_management'
    | 'aria';
  status: 'pass' | 'fail' | 'warning' | 'not_applicable';
  details: string;
  recommendations: string[];
  automated: boolean;
  manual: boolean;
}

export interface DGAPerformanceMetric {
  id: ID;
  name: string;
  value: number;
  unit: string;
  threshold: number;
  status: 'good' | 'needs_improvement' | 'poor';
  description: string;
  recommendations: string[];
}

export interface DGASecurityVulnerability {
  id: ID;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  impact: string;
  solution: string;
  references: string[];
  isFixed: boolean;
  fixedAt?: Timestamp;
}

// DGA Design System types
export interface DGADesignToken {
  id: ID;
  name: string;
  category:
    | 'color'
    | 'typography'
    | 'spacing'
    | 'border'
    | 'shadow'
    | 'animation';
  value: string | number;
  description: string;
  usage: string[];
  isDeprecated: boolean;
  replacement?: string;
}

export interface DGAColorPalette {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  semantic: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export interface DGATypography {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}

export interface DGASpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

// DGA Component types
export interface DGAComponent {
  id: ID;
  name: string;
  category: 'layout' | 'navigation' | 'form' | 'feedback' | 'data' | 'media';
  description: LocalizedContent;
  props: DGAComponentProp[];
  variants: DGAComponentVariant[];
  examples: DGAComponentExample[];
  accessibility: DGAAccessibilityGuidelines;
  usage: LocalizedContent;
  isDeprecated: boolean;
  replacement?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface DGAComponentProp {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: unknown;
  description: string;
  options?: unknown[];
}

export interface DGAComponentVariant {
  name: string;
  description: string;
  props: Record<string, unknown>;
  code: string;
}

export interface DGAComponentExample {
  title: string;
  description: string;
  code: string;
  preview: string;
  isInteractive: boolean;
}

export interface DGAAccessibilityGuidelines {
  keyboard: string[];
  screenReader: string[];
  colorContrast: string[];
  focusManagement: string[];
  aria: string[];
  testing: string[];
}

// DGA Form types
export interface DGAFormField {
  id: ID;
  name: string;
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'url'
    | 'number'
    | 'date'
    | 'time'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea'
    | 'file';
  label: LocalizedContent;
  placeholder?: LocalizedContent;
  description?: LocalizedContent;
  required: boolean;
  validation: DGAFormValidation;
  accessibility: DGAFormAccessibility;
  options?: DGAFormOption[];
  conditional?: DGAFormConditional;
}

export interface DGAFormValidation {
  rules: DGAValidationRule[];
  messages: Record<string, LocalizedContent>;
}

export interface DGAValidationRule {
  type:
    | 'required'
    | 'email'
    | 'phone'
    | 'url'
    | 'min'
    | 'max'
    | 'pattern'
    | 'custom';
  value?: unknown;
  message: LocalizedContent;
}

export interface DGAFormAccessibility {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaRequired?: boolean;
  ariaInvalid?: boolean;
  role?: string;
  tabIndex?: number;
}

export interface DGAFormOption {
  value: string;
  label: LocalizedContent;
  disabled?: boolean;
}

export interface DGAFormConditional {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains';
  value: unknown;
  show: boolean;
}

// DGA Navigation types
export interface DGANavigationItem {
  id: ID;
  label: LocalizedContent;
  href: string;
  icon?: string;
  badge?: string;
  children?: DGANavigationItem[];
  isExternal: boolean;
  isActive: boolean;
  isDisabled: boolean;
  accessibility: {
    ariaLabel?: string;
    ariaExpanded?: boolean;
    ariaCurrent?: boolean;
  };
}

export interface DGANavigation {
  id: ID;
  name: string;
  type: 'main' | 'secondary' | 'footer' | 'breadcrumb';
  items: DGANavigationItem[];
  accessibility: {
    ariaLabel: string;
    role: string;
  };
}

// DGA Analytics types
export interface DGAAnalyticsEvent {
  id: ID;
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  metadata: Record<string, unknown>;
  timestamp: Timestamp;
  userId?: ID;
  sessionId?: ID;
  page: string;
  referrer?: string;
  userAgent: string;
  ipAddress: string;
}

export interface DGAAnalyticsReport {
  period: {
    startDate: Timestamp;
    endDate: Timestamp;
  };
  metrics: {
    pageViews: number;
    uniqueVisitors: number;
    sessions: number;
    bounceRate: number;
    averageSessionDuration: number;
    topPages: Array<{
      page: string;
      views: number;
      uniqueViews: number;
    }>;
    topReferrers: Array<{
      referrer: string;
      visits: number;
    }>;
    deviceTypes: Array<{
      type: string;
      count: number;
      percentage: number;
    }>;
    browsers: Array<{
      browser: string;
      count: number;
      percentage: number;
    }>;
    countries: Array<{
      country: string;
      count: number;
      percentage: number;
    }>;
  };
  accessibility: {
    totalTests: number;
    passedTests: number;
    failedTests: number;
    warnings: number;
    averageScore: number;
    improvements: string[];
  };
  performance: {
    averageLoadTime: number;
    averageFirstContentfulPaint: number;
    averageLargestContentfulPaint: number;
    averageCumulativeLayoutShift: number;
    averageFirstInputDelay: number;
    recommendations: string[];
  };
}

// DGA Security types
export interface DGASecurityScan {
  id: ID;
  type: 'automated' | 'manual' | 'penetration';
  status: 'pending' | 'running' | 'completed' | 'failed';
  vulnerabilities: DGASecurityVulnerability[];
  recommendations: string[];
  scanDate: Timestamp;
  scanDuration: number;
  scanner: string;
  version: string;
}

export interface DGASecurityPolicy {
  id: ID;
  name: string;
  description: LocalizedContent;
  rules: DGASecurityRule[];
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface DGASecurityRule {
  id: ID;
  name: string;
  description: string;
  type:
    | 'content_security_policy'
    | 'x_frame_options'
    | 'x_content_type_options'
    | 'referrer_policy';
  value: string;
  isRequired: boolean;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// DGA Monitoring types
export interface DGAMonitoringAlert {
  id: ID;
  type: 'performance' | 'accessibility' | 'security' | 'uptime' | 'error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  metrics: Record<string, unknown>;
  threshold: number;
  currentValue: number;
  isResolved: boolean;
  resolvedAt?: Timestamp;
  createdAt: Timestamp;
}

export interface DGAMonitoringDashboard {
  id: ID;
  name: string;
  widgets: DGAMonitoringWidget[];
  layout: DGAMonitoringLayout;
  isPublic: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface DGAMonitoringWidget {
  id: ID;
  type: 'chart' | 'metric' | 'table' | 'alert';
  title: string;
  data: unknown;
  config: Record<string, unknown>;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface DGAMonitoringLayout {
  columns: number;
  rows: number;
  gap: number;
}
