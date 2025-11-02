'use client';
// @ts-nocheck
import Image from 'next/image';
import { Trans } from '@lingui/macro';

type SmallCardProps = {
  imageSrc: string;
  title: React.ReactNode;
  bullets: string[];
  cta: React.ReactNode;
};

function SmallCard({ imageSrc, title, bullets, cta }: SmallCardProps) {
  return (
    <div className='rounded-2xl border border-border-primary overflow-hidden bg-background-primary flex flex-col h-full'>
      <div className='relative w-full h-[196px]'>
        <Image
          src={imageSrc}
          alt={title as string}
          fill
          className='object-cover'
        />
      </div>
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='text-sm leading-5 font-bold text-text-primary text-right'>
          {title}
        </h3>
        <ul className='flex items-center gap-2 justify-end'>
          {bullets.map((_, idx) => (
            <li
              key={idx}
              className='w-1.5 h-1.5 rounded-full bg-border-primary'
            ></li>
          ))}
        </ul>
        <button className='self-end mt-2 text-xs leading-4 text-text-tertiary border border-border-primary rounded-lg py-1.5 px-3'>
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function FirstSection() {
  return (
    <section className='px-4 md:px-20 py-6'>
      <div className='grid grid-cols-1 lg:grid-cols-[308px_308px_1fr] gap-6 items-stretch'>
        <SmallCard
          imageSrc='https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1887&auto=format&fit=crop'
          title={
            <Trans>
              Not just graduates.. In Imam University&apos;s medical college
              labs, we shape tomorrow&apos;s doctors with a national vision
            </Trans>
          }
          bullets={['', '', '', '']}
          cta={<Trans>College of Medicine</Trans>}
        />
        <SmallCard
          imageSrc='https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1887&auto=format&fit=crop'
          title={
            <Trans>
              A distinguished center at the Muslim World League endorses Imam
              University&apos;s achievements in paper and electronic publishing
            </Trans>
          }
          bullets={['', '', '', '']}
          cta={<Trans>University Library</Trans>}
        />

        <div className='relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[482px]'>
          <Image
            src='https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop'
            alt='Hero Story'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/60 to-primary-600/20'></div>
          <div className='absolute inset-0 flex items-end p-6 lg:p-8'>
            <div className='text-right text-white max-w-[600px] ml-auto'>
              <h2 className='text-3xl leading-[38px] font-bold mb-3'>
                <Trans>
                  When action transforms from a passing deed into an established
                  value
                </Trans>
              </h2>
              <p className='text-sm leading-[22px] opacity-90'>
                <Trans>
                  While the stories of the past were told with passion, when ink
                  and paper were the only window to knowledge; they were not
                  just exchanged words...
                </Trans>
              </p>
              <ul className='flex items-center gap-2 justify-end mt-4'>
                {new Array(6).fill(0).map((_, idx) => (
                  <li
                    key={idx}
                    className='w-2 h-2 rounded-full bg-white/40'
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
