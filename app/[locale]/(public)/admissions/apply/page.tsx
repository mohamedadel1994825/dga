export default function ApplyPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>التقديم للجامعة</h1>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6'>
          <h2 className='text-xl font-semibold text-blue-800 mb-2'>
            تعليمات التقديم
          </h2>
          <p className='text-blue-700'>
            يرجى قراءة التعليمات بعناية قبل البدء في عملية التقديم. تأكد من
            استيفاء جميع المتطلبات قبل إرسال الطلب.
          </p>
        </div>

        <form className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              الاسم الكامل
            </label>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='أدخل اسمك الكامل'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              رقم الهوية
            </label>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='أدخل رقم الهوية'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              البرنامج المطلوب
            </label>
            <select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value=''>اختر البرنامج</option>
              <option value='sharia'>بكالوريوس الشريعة</option>
              <option value='usul'>بكالوريوس أصول الدين</option>
              <option value='arabic'>بكالوريوس اللغة العربية</option>
              <option value='history'>بكالوريوس التاريخ</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
          >
            تقديم الطلب
          </button>
        </form>
      </div>
    </div>
  );
}
