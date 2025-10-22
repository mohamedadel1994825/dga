export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>عن الجامعة</h1>
      <div className='prose max-w-none'>
        <p className='text-lg text-gray-700 mb-4'>
          جامعة الإمام محمد بن سعود الإسلامية هي إحدى الجامعات الرائدة في
          المملكة العربية السعودية، تأسست عام 1373هـ (1953م) وتتميز بتقديم تعليم
          متميز في العلوم الإسلامية والإنسانية.
        </p>
        <p className='text-lg text-gray-700'>
          تلتزم الجامعة بتقديم تعليم عالي الجودة وإجراء البحوث العلمية المتميزة
          لخدمة المجتمع والمساهمة في التنمية المستدامة.
        </p>
      </div>
    </div>
  );
}
