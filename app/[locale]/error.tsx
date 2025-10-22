'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>حدث خطأ</h1>
          <p className='text-gray-600 mb-6'>
            حدث خطأ في تحميل هذه الصفحة. يرجى المحاولة مرة أخرى.
          </p>
          <button
            onClick={reset}
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    </div>
  );
}
