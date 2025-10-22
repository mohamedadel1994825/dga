'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { useLanguage } from '@/i18n/LanguageProvider';

const DgaButton = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaButton),
  { ssr: false }
);
const DgaHeaderActionBtn = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaHeaderActionBtn),
  { ssr: false }
);
const DgaLabel = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaLabel),
  { ssr: false }
);
const DgaNavHeader = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaNavHeader),
  { ssr: false }
);
const DgaNavHeaderActions = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaNavHeaderActions),
  { ssr: false }
);
const DgaNavHeaderLink = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaNavHeaderLink),
  { ssr: false }
);
const DgaNavHeaderMain = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaNavHeaderMain),
  { ssr: false }
);
const DgaNavHeaderMenu = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaNavHeaderMenu),
  { ssr: false }
);

export default function NavHeader() {
  const { lang, toggle } = useLanguage();
  const { _ } = useLingui();

  const currentLang: 'ar' | 'en' = lang;

  // Menu items
  const menuItems = [
    { label: _(t`About the University`) },
    { label: _(t`Colleges`) },
    { label: _(t`Research`) },
    { label: _(t`Campus Life`) },
    { label: _(t`Deanships`) },
    { label: _(t`News`) },
    { label: _(t`Services`) },
  ];

  const newsIdx = 5; // Index of "الأخبار"
  const servicesIdx = 6; // Index of "الخدمات"

  return (
    <DgaNavHeader key={currentLang} fullWidth divider={false}>
      <DgaNavHeaderMain collapsed>
        <div className='flex items-center gap-3'>
          <div className='w-11 h-16'>
            <Image
              src='https://imamu.edu.sa/_layouts/15/2016/Portal/img/logo.png'
              alt='logo'
              width={110}
              height={160}
            />
          </div>
          <div className='flex flex-col leading-tight'>
            <DgaLabel
              label={_(t`Imam University`)}
              size='md'
              variant='default'
            />
          </div>
        </div>

        <DgaNavHeaderMenu>
          {menuItems.map(({ label }, idx) => (
            <DgaNavHeaderLink
              key={idx}
              label={label}
              icon={
                idx === servicesIdx || idx === newsIdx
                  ? 'arrow-down-01'
                  : undefined
              }
              subMenuBackground='brand'
            />
          ))}
        </DgaNavHeaderMenu>
      </DgaNavHeaderMain>

      <DgaNavHeaderActions>
        <DgaHeaderActionBtn icon='search-01' />
        <DgaHeaderActionBtn
          label={lang === 'ar' ? 'En' : 'عربي'}
          onClick={() => toggle()}
        />
        <DgaHeaderActionBtn label={_(t`Login`)} icon='user' />
      </DgaNavHeaderActions>
    </DgaNavHeader>
  );
}
