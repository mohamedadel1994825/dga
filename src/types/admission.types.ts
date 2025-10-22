import type {
  ID,
  Timestamp,
  Status,
  LocalizedContent,
  LocalizedRichContent,
  PaginationParams,
  SearchParams,
} from './common.types';

export interface AcademicProgram {
  id: ID;
  name: LocalizedContent;
  code: string;
  description: LocalizedRichContent;
  degree: 'bachelor' | 'master' | 'phd' | 'diploma' | 'certificate';
  duration: number; // in years
  credits: number;
  college: {
    id: ID;
    name: LocalizedContent;
    code: string;
  };
  department: {
    id: ID;
    name: LocalizedContent;
    code: string;
  };
  requirements: AdmissionRequirement[];
  isActive: boolean;
  applicationDeadline?: Timestamp;
  startDate?: Timestamp;
  maxCapacity?: number;
  currentEnrolled: number;
  tuitionFee?: {
    amount: number;
    currency: string;
    paymentPlan?: 'full' | 'semester' | 'monthly';
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AdmissionRequirement {
  id: ID;
  programId: ID;
  type: 'academic' | 'language' | 'health' | 'document' | 'test' | 'interview';
  title: LocalizedContent;
  description: LocalizedContent;
  isRequired: boolean;
  isActive: boolean;
  order: number;
  validationRules?: {
    minScore?: number;
    maxScore?: number;
    passingScore?: number;
    fileTypes?: string[];
    maxFileSize?: number;
  };
}

export interface AdmissionDocument {
  id: ID;
  name: LocalizedContent;
  description?: LocalizedContent;
  type: 'required' | 'optional' | 'conditional';
  fileTypes: string[];
  maxSize: number; // in bytes
  isActive: boolean;
  order: number;
}

export interface AdmissionTest {
  id: ID;
  name: LocalizedContent;
  description: LocalizedContent;
  type: 'aptitude' | 'achievement' | 'language' | 'interview';
  duration: number; // in minutes
  passingScore: number;
  maxAttempts?: number;
  isOnline: boolean;
  isActive: boolean;
  schedule?: {
    startDate: Timestamp;
    endDate: Timestamp;
    registrationDeadline: Timestamp;
  };
}

export interface AdmissionApplication {
  id: ID;
  applicationNumber: string;
  programId: ID;
  applicant: {
    personalInfo: {
      firstName: string;
      lastName: string;
      middleName?: string;
      dateOfBirth: string;
      gender: 'male' | 'female';
      nationality: string;
      nationalId: string;
      passportNumber?: string;
    };
    contactInfo: {
      email: string;
      phone: string;
      address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
      };
    };
    academicInfo: {
      highSchool: {
        name: string;
        graduationYear: number;
        gpa: number;
        major: string;
      };
      previousEducation?: Array<{
        institution: string;
        degree: string;
        year: number;
        gpa: number;
      }>;
    };
    documents: Array<{
      documentId: ID;
      fileName: string;
      fileUrl: string;
      uploadedAt: Timestamp;
      status: 'pending' | 'approved' | 'rejected';
      rejectionReason?: string;
    }>;
    testScores?: Array<{
      testId: ID;
      score: number;
      testDate: Timestamp;
      certificate?: string;
    }>;
  };
  status:
    | 'draft'
    | 'submitted'
    | 'under_review'
    | 'approved'
    | 'rejected'
    | 'waitlist';
  submissionDate?: Timestamp;
  reviewDate?: Timestamp;
  decisionDate?: Timestamp;
  reviewer?: {
    id: ID;
    name: string;
    title: string;
  };
  notes?: string;
  rejectionReason?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AdmissionFilters extends SearchParams {
  program?: string;
  status?: string;
  year?: number;
  semester?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface AdmissionListParams
  extends PaginationParams,
    AdmissionFilters {
  search?: string;
  sortBy?: 'submissionDate' | 'name' | 'status' | 'program';
}

export interface AdmissionFormData {
  programId: ID;
  personalInfo: {
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth: string;
    gender: 'male' | 'female';
    nationality: string;
    nationalId: string;
    passportNumber?: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
  };
  academicInfo: {
    highSchool: {
      name: string;
      graduationYear: number;
      gpa: number;
      major: string;
    };
    previousEducation?: Array<{
      institution: string;
      degree: string;
      year: number;
      gpa: number;
    }>;
  };
  documents: Array<{
    documentId: ID;
    file: File;
  }>;
  testScores?: Array<{
    testId: ID;
    score: number;
    testDate: string;
    certificate?: File;
  }>;
  additionalInfo?: {
    specialNeeds?: string;
    emergencyContact?: {
      name: string;
      relationship: string;
      phone: string;
    };
    statement?: string;
  };
}

export interface AdmissionStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  waitlistApplications: number;
  applicationsByProgram: Array<{
    program: AcademicProgram;
    count: number;
    approved: number;
    rejected: number;
  }>;
  applicationsByMonth: Array<{
    month: string;
    count: number;
    approved: number;
    rejected: number;
  }>;
  averageProcessingTime: number; // in days
  acceptanceRate: number;
  topPrograms: Array<{
    program: AcademicProgram;
    applications: number;
    acceptanceRate: number;
  }>;
}

export interface AdmissionReport {
  period: {
    startDate: Timestamp;
    endDate: Timestamp;
  };
  summary: {
    totalApplications: number;
    newApplications: number;
    processedApplications: number;
    pendingApplications: number;
    approvedApplications: number;
    rejectedApplications: number;
  };
  programs: Array<{
    program: AcademicProgram;
    applications: number;
    approved: number;
    rejected: number;
    acceptanceRate: number;
  }>;
  demographics: {
    byGender: {
      male: number;
      female: number;
    };
    byNationality: Array<{
      nationality: string;
      count: number;
    }>;
    byAge: Array<{
      range: string;
      count: number;
    }>;
  };
  processing: {
    averageProcessingTime: number;
    fastestProcessing: number;
    slowestProcessing: number;
    backlog: number;
  };
}

export interface AdmissionWorkflow {
  id: ID;
  name: LocalizedContent;
  description: LocalizedContent;
  steps: Array<{
    id: ID;
    name: LocalizedContent;
    type: 'form' | 'document' | 'test' | 'interview' | 'review' | 'decision';
    isRequired: boolean;
    order: number;
    assignee?: {
      role: string;
      department: string;
    };
    deadline?: number; // in days
    autoAdvance?: boolean;
  }>;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AdmissionNotification {
  id: ID;
  applicationId: ID;
  type:
    | 'status_change'
    | 'document_required'
    | 'test_scheduled'
    | 'decision_ready';
  title: LocalizedContent;
  message: LocalizedContent;
  isRead: boolean;
  sentAt: Timestamp;
  readAt?: Timestamp;
  actionUrl?: string;
}
