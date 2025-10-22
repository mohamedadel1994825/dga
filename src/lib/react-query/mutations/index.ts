import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query';
import { invalidateNewsQueries, invalidateEventsQueries } from '../cache';

// Generic mutation wrapper with automatic cache invalidation
export function useOptimisticMutation<TData, TVariables, TError = Error>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: TError, variables: TVariables) => void;
    invalidateQueries?: (queryClient: any) => void;
  }
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      options?.invalidateQueries?.(queryClient);
    },
    onError: options?.onError,
  });
}

// News mutations
export function useCreateNewsMutation() {
  return useOptimisticMutation(
    async (data: any) => {
      // Replace with actual API call
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    {
      invalidateQueries: invalidateNewsQueries,
    }
  );
}

// Events mutations
export function useCreateEventMutation() {
  return useOptimisticMutation(
    async (data: any) => {
      // Replace with actual API call
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    {
      invalidateQueries: invalidateEventsQueries,
    }
  );
}
