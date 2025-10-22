import React, { useState } from 'react';
import { Button, Input, Card } from '../../../ui';
import { useForm } from '../../../hooks';
import type { BaseComponentProps } from '../../../types';

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

  const { values, errors, handleChange, handleSubmit, setValues } = useForm({
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
      const errors: Record<string, string> = {};

      if (currentStep === 1) {
        if (!values.personalInfo.firstName)
          errors['personalInfo.firstName'] = 'First name is required';
        if (!values.personalInfo.lastName)
          errors['personalInfo.lastName'] = 'Last name is required';
        if (!values.personalInfo.email)
          errors['personalInfo.email'] = 'Email is required';
        if (!values.personalInfo.phone)
          errors['personalInfo.phone'] = 'Phone is required';
        if (!values.personalInfo.nationalId)
          errors['personalInfo.nationalId'] = 'National ID is required';
      }

      if (currentStep === 2) {
        if (!values.education.highSchool)
          errors['education.highSchool'] = 'High school is required';
        if (!values.education.graduationYear)
          errors['education.graduationYear'] = 'Graduation year is required';
        if (!values.education.gpa) errors['education.gpa'] = 'GPA is required';
      }

      if (currentStep === 3) {
        if (!values.program.programId)
          errors['program.programId'] = 'Program selection is required';
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
                error={errors['personalInfo.firstName']}
                required
              />
              <Input
                name='personalInfo.lastName'
                label='Last Name'
                value={values.personalInfo.lastName}
                onChange={handleChange}
                error={errors['personalInfo.lastName']}
                required
              />
              <Input
                name='personalInfo.email'
                label='Email'
                type='email'
                value={values.personalInfo.email}
                onChange={handleChange}
                error={errors['personalInfo.email']}
                required
              />
              <Input
                name='personalInfo.phone'
                label='Phone Number'
                value={values.personalInfo.phone}
                onChange={handleChange}
                error={errors['personalInfo.phone']}
                required
              />
              <Input
                name='personalInfo.nationalId'
                label='National ID'
                value={values.personalInfo.nationalId}
                onChange={handleChange}
                error={errors['personalInfo.nationalId']}
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
                error={errors['education.highSchool']}
                required
              />
              <Input
                name='education.graduationYear'
                label='Graduation Year'
                type='number'
                value={values.education.graduationYear}
                onChange={handleChange}
                error={errors['education.graduationYear']}
                required
              />
              <Input
                name='education.gpa'
                label='GPA'
                type='number'
                step='0.01'
                value={values.education.gpa}
                onChange={handleChange}
                error={errors['education.gpa']}
                required
              />
              <Input
                name='education.satScore'
                label='SAT Score (Optional)'
                type='number'
                value={values.education.satScore}
                onChange={handleChange}
                error={errors['education.satScore']}
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
                {errors['program.programId'] && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors['program.programId']}
                  </p>
                )}
              </div>
              <Input
                name='program.specialization'
                label='Specialization (Optional)'
                value={values.program.specialization}
                onChange={handleChange}
                error={errors['program.specialization']}
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
