'use client';

import dynamic from 'next/dynamic';

const DgaCard = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaCard),
  { ssr: false }
);

export default function NewsSection() {
  return (
    <section className='mt-6'>
      <h1 className='display-sm-bold text-text-primary mb-4'>
        Articles and News Section
      </h1>
      <p className='text-md-regular text-text-primary mb-8'>
        Here you can add a brief description about the purpose of the portal.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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
        ].map(
          (
            {
              showFeaturedIcon,
              title,
              description,
              image,
              primaryActionLabel,
              showSecondaryAction,
            },
            index
          ) => (
            <DgaCard
              key={`news-card-${index}`}
              cardTitle={title}
              description={description}
              image={image}
              showFeaturedIcon={showFeaturedIcon}
              primaryActionLabel={primaryActionLabel}
              showSecondaryAction={showSecondaryAction}
            />
          )
        )}
      </div>

      <p className='text-sm-regular text-right text-text-primary py-4 mt-10'>
        Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time
      </p>
    </section>
  );
}
