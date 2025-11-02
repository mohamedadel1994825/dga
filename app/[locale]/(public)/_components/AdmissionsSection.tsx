'use client';
// @ts-nocheck

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
const DgaButton = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaButton),
  { ssr: false }
);
const DgaDivider = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaDivider),
  { ssr: false }
);
const DgaFeaturedIcon = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaFeaturedIcon),
  { ssr: false }
);
const DgaCarousel = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaCarousel),
  { ssr: false }
);
const DgaCarouselItem = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaCarouselItem),
  { ssr: false }
);

const AdmissionsSection: React.FC = () => {
  const { _ } = useLingui();

  // Service cards data
  const serviceCards = [
    {
      icon: 'file-check-02',
      title: <Trans>دليل القبول في الجامعة</Trans>,
    },
    {
      icon: 'book-open-01',
      title: <Trans>الخدمات الذاتية للطلاب</Trans>,
    },
    {
      icon: 'notebook-01',
      title: <Trans>الخدمات الذاتية لأعضاء هيئة التدريس</Trans>,
    },
    {
      icon: 'message-chat-circle',
      title: <Trans>نظام تواصل</Trans>,
    },
    {
      icon: 'graduation-hat-01',
      title: <Trans>برنامج خريج</Trans>,
    },
    {
      icon: 'dots-horizontal',
      title: <Trans>المزيد من الخدمات...</Trans>,
    },
  ];

  return (
    <section className='pt-10 px-4 md:px-20'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
        {/* Button on the left */}
        <DgaButton
          label={_(t`عرض كل الخدمات والأخبار`)}
          variant='secondary'
          size='md'
        />

        {/* Title and subtitle on the right */}
        <div className='flex flex-col items-end text-right flex-1'>
          <h2 className='display-sm-bold text-text-primary mb-2'>
            <Trans>عمادة القبول والتسجيل</Trans>
          </h2>
          <p className='text-md-regular text-text-tertiary'>
            <Trans>
              هنا تجد كل ما يتعلق بمتطلبات التسجيل للدراسة بالجامعة.
            </Trans>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className='mb-8 flex justify-end'>
        <div className='w-48'>
          <DgaDivider color='primary' />
        </div>
      </div>

      {/* Main Content Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Left: Hero Story Card */}
        <div className='relative h-[336px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800'>
          <DgaCarousel>
            <DgaCarouselItem>
              <div className='relative h-[336px] w-full'>
                <Image
                  src='https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg'
                  alt='لقاء تعريفي يخص الطريق للطالبات المستجدات'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-white text-xl-bold text-right'>
                    <Trans>لقاء تعريفي يخص الطريق للطالبات المستجدات</Trans>
                  </h3>
                  <p className='text-white text-sm-regular text-right mt-2'>
                    <Trans>عمادة القبول والتسجيل</Trans>
                  </p>
                </div>
              </div>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <div className='relative h-[336px] w-full'>
                <Image
                  src='https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg'
                  alt='معلومات عن التسجيل'
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <h3 className='text-white text-xl-bold text-right'>
                    <Trans>معلومات عن التسجيل والقبول</Trans>
                  </h3>
                  <p className='text-white text-sm-regular text-right mt-2'>
                    <Trans>عمادة القبول والتسجيل</Trans>
                  </p>
                </div>
              </div>
            </DgaCarouselItem>
          </DgaCarousel>
        </div>

        {/* Right: Service Cards Grid */}
        <div className='grid grid-cols-3 gap-4'>
          {serviceCards.map((card, index) => (
            <div
              key={`service-${index}`}
              className='flex flex-col items-center justify-center p-4 bg-background-primary border border-border-secondary rounded-xl hover:shadow-md transition-shadow cursor-pointer h-40'
            >
              <DgaFeaturedIcon
                icon={{
                  name: card.icon,
                  variant: 'stroke',
                  type: 'rounded',
                }}
                variant='light'
                color='brand'
                size='lg'
              />
              <p className='text-sm-medium text-text-primary text-center mt-3'>
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
