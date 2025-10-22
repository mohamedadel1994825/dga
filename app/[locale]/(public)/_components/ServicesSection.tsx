'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

const DgaCarousel = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaCarousel),
  { ssr: false }
);
const DgaCarouselItem = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaCarouselItem),
  { ssr: false }
);

export default function ServicesSection() {
  const { _ } = useLingui();

  return (
    <section className='mt-[24px] bg-[#F9FAFB] py-[40px]'>
      <h1 className='display-sm-bold text-[#161616] mb-4'>Services Section</h1>
      <p className='text-md-regular text-[#161616] mb-8'>
        Here you can add a brief description about the purpose of the portal
        followed with a call to action button and an image or an illustration on
        the left hand side.
      </p>

      {/* Three Carousels Section */}
      <div className='carousel-container'>
        {/* First Carousel - Regular Width */}
        <div className='carousel-card'>
          <h3 className='carousel-title'>كلية الطب</h3>
          <DgaCarousel>
            <DgaCarouselItem>
              <Image
                src='/file.svg'
                alt='البحوث الطبية المتقدمة'
                width={200}
                height={150}
              />
              <p className='carousel-text'>البحوث الطبية المتقدمة</p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/globe.svg'
                alt='الطب العالمي'
                width={200}
                height={150}
              />
              <p className='carousel-text'>الطب العالمي</p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/next.svg'
                alt='الابتكار الطبي'
                width={200}
                height={150}
              />
              <p className='carousel-text'>الابتكار الطبي</p>
            </DgaCarouselItem>
          </DgaCarousel>
        </div>

        {/* Second Carousel - Regular Width */}
        <div className='carousel-card'>
          <h3 className='carousel-title'>مكتبة الجامعة</h3>
          <DgaCarousel>
            <DgaCarouselItem>
              <Image
                src='/window.svg'
                alt='المكتبة الرقمية'
                width={200}
                height={150}
              />
              <p className='carousel-text'>المكتبة الرقمية</p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/vercel.svg'
                alt='موارد البحث'
                width={200}
                height={150}
              />
              <p className='carousel-text'>قواعد البيانات البحثية</p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/file.svg'
                alt='الكتب الأكاديمية'
                width={200}
                height={150}
              />
              <p className='carousel-text'>الكتب الأكاديمية</p>
            </DgaCarouselItem>
          </DgaCarousel>
        </div>

        {/* Third Carousel - Double Width */}
        <div className='carousel-card carousel-double'>
          <h3 className='carousel-title'>البرامج الأكاديمية</h3>
          <DgaCarousel>
            <DgaCarouselItem>
              <Image
                src='/ImamUnive1.svg'
                alt='البرامج الجامعية المتميزة'
                width={300}
                height={200}
              />
              <p className='carousel-text'>
                برامج البكالوريوس والماجستير والدكتوراه
              </p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/globe.svg'
                alt='البرامج الدولية'
                width={300}
                height={200}
              />
              <p className='carousel-text'>التبادل الطلابي والبرامج المشتركة</p>
            </DgaCarouselItem>
            <DgaCarouselItem>
              <Image
                src='/next.svg'
                alt='برامج المستقبل'
                width={300}
                height={200}
              />
              <p className='carousel-text'>البرامج الناشئة والتخصصات الجديدة</p>
            </DgaCarouselItem>
          </DgaCarousel>
        </div>
      </div>
    </section>
  );
}
