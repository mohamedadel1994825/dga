'use client';
// @ts-nocheck
import dynamic from 'next/dynamic';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

const DgaIcon = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaIcon),
  { ssr: false }
);

type EventCardProps = {
  day: string;
  date: string;
  title: React.ReactNode;
  category: React.ReactNode;
  categoryLabel: React.ReactNode;
  ctaLabel: React.ReactNode;
};

function EventCard({
  day,
  date,
  title,
  category,
  categoryLabel,
  ctaLabel,
}: EventCardProps) {
  return (
    <div className='rounded-2xl border border-border-primary bg-background-primary p-6 flex flex-col gap-4 h-full'>
      {/* Calendar icon and date */}
      <div className='flex items-start gap-3'>
        <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center'>
          <DgaIcon
            size={24}
            icon='calendar-04'
            variant='stroke'
            type='rounded'
          />
        </div>
        <div className='text-right flex-1'>
          <div className='text-sm leading-5 font-semibold text-text-primary'>
            {day}
          </div>
          <div className='text-xs leading-[18px] text-text-tertiary'>
            {date}
          </div>
        </div>
      </div>

      {/* Event title */}
      <h3 className='text-base leading-6 font-bold text-text-primary text-right flex-1'>
        {title}
      </h3>

      {/* Category and CTA */}
      <div className='flex items-center justify-between gap-3'>
        <button className='bg-primary-600 hover:bg-primary-800 text-white rounded-lg py-2 px-4 text-xs leading-[18px] font-semibold transition-colors'>
          {ctaLabel}
        </button>
        <div className='flex items-center gap-2'>
          <span className='text-xs leading-[18px] text-text-tertiary'>
            {category}
          </span>
          <span className='bg-neutral-100 text-text-primary rounded-md py-1 px-2 text-xs leading-4 font-medium'>
            {categoryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const { _ } = useLingui();

  const events = [
    {
      day: _(t`الثلاثاء`),
      date: 'م04-03-2026 / هـ21-08-1446',
      title: (
        <Trans>
          مشروع ريادة الأعمال.. عندما تتحول المشروع دورة إلى فرصة حقيقية كيف
          أثمر تحويل الأفكار إلى مشاريع ناجحة
        </Trans>
      ),
      category: <Trans>كلية إدارة الأعمال</Trans>,
      categoryLabel: <Trans>كلية الحاسب</Trans>,
    },
    {
      day: _(t`الأحد`),
      date: 'م28-03-2026 / هـ19-08-1446',
      title: (
        <Trans>
          مشروع ريادة الأعمال.. عندما تتحول المشروع دورة إلى فرصة حقيقية كيف
          أثمر تحويل الأفكار إلى مشاريع ناجحة
        </Trans>
      ),
      category: <Trans>عمادة شؤون الطلاب</Trans>,
      categoryLabel: <Trans>الطلبة الدوليين</Trans>,
    },
    {
      day: _(t`الخميس`),
      date: 'م25-03-2026 / هـ16-08-1446',
      title: (
        <Trans>
          رحلة حول العالم الإسلامي.. داخل جرو صحبة عبر ثقافات المسلمين المتنوعة
          كيف تجمع المحاضرة بين الجغرافيا والحضارة
        </Trans>
      ),
      category: <Trans>الطلبة الدوليين</Trans>,
      categoryLabel: <Trans>الطلبة</Trans>,
    },
    {
      day: _(t`الأربعاء`),
      date: 'م15-08-1446 / هـ19-08-1446',
      title: (
        <Trans>
          مرحب شباب الوطن.. وأفق حوار نقاش بين الطلاب والمشاركين كيفي حيث يجول
          حوار منتدى القيادة والتأثير واحتواؤه على محاور إلهامية تلهم الطلاب
          المشتركين
        </Trans>
      ),
      category: <Trans>نقاشات</Trans>,
      categoryLabel: <Trans>كلية الحاسب</Trans>,
    },
  ];

  return (
    <section className='px-4 md:px-20 py-10 bg-background-secondary'>
      {/* Header */}
      <div className='mb-8 text-right'>
        <div className='flex items-start justify-between mb-2 gap-4 flex-wrap'>
          <div className='flex-1'>
            <h2 className='text-3xl leading-10 font-bold text-text-primary mb-2'>
              <Trans>الأحداث والفعاليات القادمة</Trans>
            </h2>
            <p className='text-sm leading-[22px] text-text-tertiary'>
              <Trans>
                بوابة أنشطتك الجامعية.. تابع بكل ما يتعلق بالمؤتمرات والفعاليات
                والأنشطة القادمة والتي تجري حالياً بتوسيع آفاقك.
              </Trans>
            </p>
          </div>
          <button className='text-sm leading-5 text-text-tertiary border border-border-primary rounded-lg py-2 px-4 hover:bg-background-primary transition-colors whitespace-nowrap'>
            <Trans>عرض كل الأحداث</Trans>
          </button>
        </div>
        <div className='w-full h-px bg-border-primary'></div>
      </div>

      {/* Featured event and events grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Featured Event Card */}
        <div className='rounded-2xl border border-border-primary bg-background-primary p-8 flex flex-col justify-between'>
          <div className='mb-6'>
            <div className='text-xs leading-[18px] text-text-tertiary mb-2'>
              <Trans>مؤتمر بتاريخ الأحد م19-06-1446 / هـ28-01-2026</Trans>
            </div>
            <h3 className='text-2xl leading-8 font-bold text-text-primary mb-4 text-right'>
              <Trans>
                التأثير المتبادل بين العلوم الاجتماعية والإنسانية والتقنيات
                الرقمية
              </Trans>
            </h3>
            <div className='flex items-center gap-2 text-right justify-end flex-wrap'>
              <span className='text-sm leading-5 text-text-tertiary'>
                <Trans>جلسات علمية</Trans>
              </span>
              <span className='text-sm leading-5 text-text-tertiary'>-</span>
              <span className='text-sm leading-5 text-text-tertiary'>
                <Trans>ورش عمل</Trans>
              </span>
              <span className='text-sm leading-5 text-text-tertiary'>-</span>
              <span className='text-sm leading-5 text-text-tertiary'>
                <Trans>نقاشات</Trans>
              </span>
            </div>
          </div>

          {/* 3D Illustration */}
          <div className='relative w-full h-[240px] mb-6'>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Placeholder for 3D illustration - you can replace with actual image */}
              <div className='w-[300px] h-[240px] bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl opacity-20'></div>
            </div>
          </div>

          <button className='self-end bg-primary-600 hover:bg-primary-800 text-white rounded-lg py-[10px] px-6 text-sm leading-5 font-semibold transition-colors'>
            <Trans>تفاصيل المؤتمر</Trans>
          </button>
        </div>

        {/* Events Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {events.map((event, index) => (
            <EventCard
              key={index}
              day={event.day}
              date={event.date}
              title={event.title}
              category={event.category}
              categoryLabel={event.categoryLabel}
              ctaLabel={<Trans>تفاصيل المؤتمر</Trans>}
            />
          ))}
        </div>
      </div>

      {/* Carousel dots indicator */}
      <div className='flex justify-center items-center gap-2 mt-6'>
        <div className='w-2 h-2 rounded-full bg-primary-600'></div>
        <div className='w-2 h-2 rounded-full bg-border-primary'></div>
        <div className='w-2 h-2 rounded-full bg-border-primary'></div>
        <div className='w-2 h-2 rounded-full bg-border-primary'></div>
      </div>
    </section>
  );
}
