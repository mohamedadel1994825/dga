import { useState, useCallback, useMemo } from 'react';
import type { FormState, ValidationError } from '@/types';

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => ValidationError[];
  onSubmit: (values: T) => Promise<void> | void;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isDirty = useMemo(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }, [values, initialValues]);

  const isValid = useMemo(() => {
    if (!validate) return true;
    const validationErrors = validate(values);
    return validationErrors.length === 0;
  }, [values, validate]);

  const setValue = useCallback(
    (name: string, value: unknown) => {
      setValues(prev => ({ ...prev, [name]: value }));

      // Clear error for this field when user starts typing
      if (errors.some(error => error.field === name)) {
        setErrors(prev => prev.filter(error => error.field !== name));
      }
    },
    [errors]
  );

  const setFieldValue = useCallback(
    (name: string, value: unknown) => {
      setValue(name, value);
      setTouched(prev => ({ ...prev, [name]: true }));
    },
    [setValue]
  );

  const setFieldError = useCallback((name: string, message: string) => {
    setErrors(prev => {
      const filtered = prev.filter(error => error.field !== name);
      return [
        ...filtered,
        { field: name, message: { ar: message, en: message }, code: 'custom' },
      ];
    });
  }, []);

  const clearFieldError = useCallback((name: string) => {
    setErrors(prev => prev.filter(error => error.field !== name));
  }, []);

  const setTouchedField = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors([]);
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();

      if (!isValid) return;

      setIsSubmitting(true);
      setErrors([]);

      try {
        await onSubmit(values);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Submission failed';
        setErrors([
          {
            field: 'form',
            message: { ar: errorMessage, en: errorMessage },
            code: 'submit_error',
          },
        ]);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, isValid, onSubmit]
  );

  const getFieldError = useCallback(
    (name: string) => {
      return errors.find(error => error.field === name);
    },
    [errors]
  );

  const getFieldProps = useCallback(
    (name: string) => {
      return {
        value: values[name] || '',
        onChange: (
          e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          >
        ) => {
          setFieldValue(name, e.target.value);
        },
        onBlur: () => setTouchedField(name),
        error: getFieldError(name)?.message.ar,
        touched: touched[name] || false,
      };
    },
    [values, setFieldValue, setTouchedField, getFieldError, touched]
  );

  const formState: FormState<T> = {
    data: values,
    errors,
    isSubmitting,
    isDirty,
    isValid,
  };

  return {
    values,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    touched,
    setValue,
    setFieldValue,
    setFieldError,
    clearFieldError,
    setTouchedField,
    getFieldError,
    getFieldProps,
    handleSubmit,
    reset,
    formState,
  };
}
