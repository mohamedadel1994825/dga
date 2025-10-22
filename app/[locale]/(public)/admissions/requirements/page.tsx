export default function RequirementsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>متطلبات القبول</h1>

      <div className='space-y-8'>
        <section className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-800'>
            المتطلبات الأكاديمية
          </h2>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>شهادة الثانوية العامة أو ما يعادلها</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>اجتياز اختبار القدرات العامة</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>اجتياز الاختبار التحصيلي</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>الحصول على الحد الأدنى من النقاط المطلوبة</span>
            </li>
          </ul>
        </section>

        <section className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-800'>
            المتطلبات الصحية
          </h2>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>شهادة طبية تثبت السلامة الصحية</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>خلو من الأمراض المعدية</span>
            </li>
            <li className='flex items-start'>
              <span className='text-green-600 mr-2'>✓</span>
              <span>القدرة على متابعة الدراسة</span>
            </li>
          </ul>
        </section>

        <section className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4 text-blue-800'>
            المستندات المطلوبة
          </h2>
          <ul className='space-y-3'>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2'>•</span>
              <span>صورة من شهادة الثانوية العامة</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2'>•</span>
              <span>صورة من الهوية الوطنية</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2'>•</span>
              <span>صورة شخصية حديثة</span>
            </li>
            <li className='flex items-start'>
              <span className='text-blue-600 mr-2'>•</span>
              <span>شهادة طبية</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
