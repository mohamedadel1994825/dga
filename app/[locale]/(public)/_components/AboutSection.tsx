'use client';

import dynamic from 'next/dynamic';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

const DgaFeaturedIcon = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaFeaturedIcon),
  { ssr: false }
);

export default function AboutSection() {
  const { _ } = useLingui();

  return (
    <section className='mt-[24px]'>
      <h1 className='display-sm-bold text-[#161616] mb-4'>About us Section</h1>
      <p className='text-md-regular text-[#161616] mb-8'>
        Here you can add a brief description about the purpose of the portal
        followed with a call to action button and an image or an illustration on
        the left hand side.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[32px]'>
        {[
          {
            showFeaturedIcon: false,
            title: 'The Title of the News Card in two Lines',
            description:
              'Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.',
            image:
              'https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg',
            primaryActionLabel: 'Read More',
            showSecondaryAction: false,
          },
          {
            showFeaturedIcon: false,
            title: 'The Title of the News Card in two Lines',
            description:
              'Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.',
            image:
              'https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg',
            primaryActionLabel: 'Read More',
            showSecondaryAction: false,
          },
          {
            showFeaturedIcon: false,
            title: 'The Title of the News Card in two Lines',
            description:
              'Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.',
            image:
              'https://saudigazette.com.sa/uploads/images/2023/11/02/2173406.jpg',
            primaryActionLabel: 'Read More',
            showSecondaryAction: false,
          },
        ].map((_, index) => (
          <div
            key={`stats-${index}`}
            className='flex flex-col justify-center items-center'
          >
            <DgaFeaturedIcon
              icon={{
                name: 'user-group',
                variant: 'stroke',
                type: 'rounded',
              }}
              variant='light'
              color='brand'
              size='xl'
            />
            <h3 className='display-lg-regular text-[#14573A] mt-[24px]'>
              1.5M
            </h3>
            <p className='text-md-regular text-[#1F2A37] mt-[8px]'>Person</p>
          </div>
        ))}
      </div>
    </section>
  );
}
