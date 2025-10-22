'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';

const DgaLabel = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaLabel),
  { ssr: false }
);

export default function HeroSection() {
  const { _ } = useLingui();

  return (
    <section className="relative max-h-[585px] h-[585px] bg-[rgba(27,131,84,1)] bg-no-repeat bg-cover bg-center [background-image:url('/ImamUnive1.svg'),linear-gradient(180deg,rgba(4,21,13,0)_64.79%,rgba(0,0,0,0.2)_72.14%)]">
      <Image
        src='/assets/ImamUniveText.svg'
        alt='Imam University'
        className='absolute top-[200px] left-1/2 -translate-x-1/2'
        width={700}
        height={92}
      />
      <DgaLabel
        size='lg'
        label={_(
          t`From deep-rooted heritage and a rich intellectual legacy, our distinction emerges. We advance education and research, guided by moderation and balance, to contribute to a knowledge-based economy and serve our community and humanity. Here, where transparency and initiative are the foundation of every endeavor, we foster a collaborative and innovative environment, launching toward limitless horizons of excellence to achieve a sustainable future for the nation and Islam.`
        )}
        variant='default'
        className='hero-desc absolute top-[380px] left-1/2 -translate-x-1/2 max-w-[70%] text-center'
      />
    </section>
  );
}
