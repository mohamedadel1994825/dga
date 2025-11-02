import React, { useState, useCallback } from 'react';
import { Button, Input, Card } from '../../../ui';
import { useForm } from '@/hooks';
import type { BaseComponentProps, ValidationError } from '@/types';

export interface AdmissionFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationalId: string;
  };
  education: {
    highSchool: string;
    graduationYear: string;
    gpa: string;
    satScore?: string;
  };
  program: {
    programId: string;
    specialization: string;
  };
}

export interface AdmissionFormProps extends BaseComponentProps {
  programs: Array<{ id: string; name: string; description: string }>;
  onSubmit: (data: AdmissionFormData) => void;
  isLoading?: boolean;
}

const AdmissionForm: React.FC<AdmissionFormProps> = ({
  programs,
  onSubmit,
  isLoading = false,
  className,
  ...props
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const { values, setValue, setFieldValue, handleSubmit, getFieldError } =
    useForm({
      initialValues: {
        personalInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          nationalId: '',
        },
        education: {
          highSchool: '',
          graduationYear: '',
          gpa: '',
          satScore: '',
        },
        program: {
          programId: '',
          specialization: '',
        },
      },
      validate: values => {
        const errors: ValidationError[] = [];

        if (currentStep === 1) {
          if (!values.personalInfo.firstName)
            errors.push({
              field: 'personalInfo.firstName',
              message: {
                ar: 'First name is required',
                en: 'First name is required',
              },
              code: 'required',
            });
          if (!values.personalInfo.lastName)
            errors.push({
              field: 'personalInfo.lastName',
              message: {
                ar: 'Last name is required',
                en: 'Last name is required',
              },
              code: 'required',
            });
          if (!values.personalInfo.email)
            errors.push({
              field: 'personalInfo.email',
              message: { ar: 'Email is required', en: 'Email is required' },
              code: 'required',
            });
          if (!values.personalInfo.phone)
            errors.push({
              field: 'personalInfo.phone',
              message: { ar: 'Phone is required', en: 'Phone is required' },
              code: 'required',
            });
          if (!values.personalInfo.nationalId)
            errors.push({
              field: 'personalInfo.nationalId',
              message: {
                ar: 'National ID is required',
                en: 'National ID is required',
              },
              code: 'required',
            });
        }

        if (currentStep === 2) {
          if (!values.education.highSchool)
            errors.push({
              field: 'education.highSchool',
              message: {
                ar: 'High school is required',
                en: 'High school is required',
              },
              code: 'required',
            });
          if (!values.education.graduationYear)
            errors.push({
              field: 'education.graduationYear',
              message: {
                ar: 'Graduation year is required',
                en: 'Graduation year is required',
              },
              code: 'required',
            });
          if (!values.education.gpa)
            errors.push({
              field: 'education.gpa',
              message: { ar: 'GPA is required', en: 'GPA is required' },
              code: 'required',
            });
        }

        if (currentStep === 3) {
          if (!values.program.programId)
            errors.push({
              field: 'program.programId',
              message: {
                ar: 'Program selection is required',
                en: 'Program selection is required',
              },
              code: 'required',
            });
        }

        return errors;
      },
      onSubmit: values => {
        onSubmit(values);
      },
    });

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper function to set nested values (handles paths like 'personalInfo.firstName')
  const setNestedValue = useCallback(
    (path: string, value: string | number) => {
      const keys = path.split('.');
      if (keys.length === 2) {
        // For 2-level nesting like 'personalInfo.firstName', update the parent object
        const parentKey = keys[0];
        const childKey = keys[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parent = (values as Record<string, any>)[parentKey];
        setValue(parentKey, { ...parent, [childKey]: value });
      } else {
        // For other cases, use setFieldValue
        setFieldValue(path, value);
      }
    },
    [setValue, setFieldValue, values]
  );

  // Handle change for nested field paths
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const name = e.target.name;
      const value =
        e.target.type === 'number' ? Number(e.target.value) : e.target.value;
      setNestedValue(name, value);
    },
    [setNestedValue]
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4'>Personal Information</h3>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                name='personalInfo.firstName'
                label='First Name'
                value={values.personalInfo.firstName}
                onChange={handleChange}
                error={getFieldError('personalInfo.firstName')?.message.ar}
                required
              />
              <Input
                name='personalInfo.lastName'
                label='Last Name'
                value={values.personalInfo.lastName}
                onChange={handleChange}
                error={getFieldError('personalInfo.lastName')?.message.ar}
                required
              />
              <Input
                name='personalInfo.email'
                label='Email'
                type='email'
                value={values.personalInfo.email}
                onChange={handleChange}
                error={getFieldError('personalInfo.email')?.message.ar}
                required
              />
              <Input
                name='personalInfo.phone'
                label='Phone Number'
                value={values.personalInfo.phone}
                onChange={handleChange}
                error={getFieldError('personalInfo.phone')?.message.ar}
                required
              />
              <Input
                name='personalInfo.nationalId'
                label='National ID'
                value={values.personalInfo.nationalId}
                onChange={handleChange}
                error={getFieldError('personalInfo.nationalId')?.message.ar}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4'>
              Educational Background
            </h3>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                name='education.highSchool'
                label='High School Name'
                value={values.education.highSchool}
                onChange={handleChange}
                error={getFieldError('education.highSchool')?.message.ar}
                required
              />
              <Input
                name='education.graduationYear'
                label='Graduation Year'
                type='number'
                value={values.education.graduationYear}
                onChange={handleChange}
                error={getFieldError('education.graduationYear')?.message.ar}
                required
              />
              <Input
                name='education.gpa'
                label='GPA'
                type='number'
                step='0.01'
                value={values.education.gpa}
                onChange={handleChange}
                error={getFieldError('education.gpa')?.message.ar}
                required
              />
              <Input
                name='education.satScore'
                label='SAT Score (Optional)'
                type='number'
                value={values.education.satScore}
                onChange={handleChange}
                error={getFieldError('education.satScore')?.message.ar}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold mb-4'>Program Selection</h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Select Program *
                </label>
                <select
                  name='program.programId'
                  value={values.program.programId}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Choose a program</option>
                  {programs.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
                {getFieldError('program.programId') && (
                  <p className='text-red-500 text-sm mt-1'>
                    {getFieldError('program.programId')?.message.ar}
                  </p>
                )}
              </div>
              <Input
                name='program.specialization'
                label='Specialization (Optional)'
                value={values.program.specialization}
                onChange={handleChange}
                error={getFieldError('program.specialization')?.message.ar}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className={`p-6 ${className || ''}`} {...props}>
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold'>Admission Application</h2>
          <span className='text-sm text-gray-500'>
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-600 h-2 rounded-full transition-all duration-300'
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        <div className='flex justify-between mt-8'>
          <Button
            type='button'
            variant='outline'
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button type='button' onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type='submit' disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default AdmissionForm;
