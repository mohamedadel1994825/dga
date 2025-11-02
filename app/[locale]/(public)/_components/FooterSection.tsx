'use client';

import dynamic from 'next/dynamic';

const DgaDivider = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaDivider),
  { ssr: false }
);
const DgaFooter = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaFooter),
  { ssr: false }
);

export default function FooterSection() {
  return (
    <div className='w-full'>
      <DgaDivider color='primary' />

      <DgaFooter
        background='DarkGreen'
        NavLinks={true}
        groupLinks={[
          {
            title: 'ملخص',
            links: [
              { name: 'حول جامعة الإمام محمد بن سعود', target: '' },
              { name: 'الخصوصية وشروط الاستخدام', target: '' },
              { name: 'كيفية استخدام بوابة جامعة الإمام', target: '' },
              { name: 'الأخبار والأحداث', target: '' },
              { name: 'إحصائيات اتفاقية مستوى الخدمة', target: '' },
            ],
          },
          {
            title: 'روابط مهمة',
            links: [
              { name: 'بوابة الخدمة الوطنية', target: '' },
              { name: 'البيانات الحكومية المفتوحة', target: '' },
              {
                name: 'الاستراتيجية الوطنية البيانات والذكاء الاصطناعي',
                target: '',
              },
              { name: 'بوابة البيانات المفتوحة', target: '' },
              { name: 'بوابة المشاركة الإلكترونية', target: '' },
            ],
          },
          {
            title: 'الاتصال والإعلام',
            links: [
              { name: 'مركز العملاء', target: '' },
              { name: 'تواصل معنا', target: '' },
              { name: 'شارك معنا', target: '' },
              { name: 'تقديم شكوى', target: '' },
              { name: 'الإبلاغ عن الفساد', target: '' },
            ],
          },
        ]}
        socialMediaTitle='تفاعل معنا'
        accessibilityTitle='أدوات الإتاحة والوصول'
        socialMediaLinks={[
          {
            title: 'X',
            target: '#',
            icon: { name: 'twitter-01', variant: 'stroke', type: 'rounded' },
          },
          {
            title: 'LinkedIn',
            target: '#',
            icon: { name: 'linkedin-02', variant: 'stroke', type: 'rounded' },
          },
          {
            title: 'Instagram',
            target: '#',
            icon: { name: 'instagram', variant: 'stroke', type: 'rounded' },
          },
        ]}
        accessibilityLinks={[
          {
            title: 'خريطة الموقع',
            target: '#',
            icon: {
              name: 'grid-dots-outer',
              variant: 'stroke',
              type: 'rounded',
            },
          },
          {
            title: 'بحث',
            target: '#',
            icon: { name: 'search-01', variant: 'stroke', type: 'rounded' },
          },
          {
            title: 'عرض',
            target: '#',
            icon: { name: 'view', variant: 'stroke', type: 'rounded' },
          },
        ]}
        copyright='جميع الحقوق محفوظة لهيئة الحكومية الرقمية © 2024'
        basicLinks={[
          {
            name: 'تم تطويره وصيانته بواسطة جامعة الإمام محمد بن سعود',
            target: '#',
          },
          {
            name: 'RSS',
            target: '#',
          },
          {
            name: 'تطبيق الجوال',
            target: '#',
          },
        ]}
        extraLinks={[
          {
            name: 'تاريخ آخر تعديل : 7/10/2025',
            target: '#',
          },
        ]}
        bottomImages={['/assets/figma/footer/LogosFooter.svg']}
      />
    </div>
  );
}
