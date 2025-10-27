'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { useLanguage } from '@/providers/LanguageProvider';

const DgaButton = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaButton),
  { ssr: false }
);
const DgaIcon = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaIcon),
  { ssr: false }
);
const DgaSecondNavHeader = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaSecondNavHeader),
  { ssr: false }
);
const DgaSecondNavHeaderActions = dynamic(
  () =>
    import('platformscode-new-react').then(m => m.DgaSecondNavHeaderActions),
  { ssr: false }
);
const DgaSecondNavHeaderContent = dynamic(
  () =>
    import('platformscode-new-react').then(m => m.DgaSecondNavHeaderContent),
  { ssr: false }
);
const DgaSecondNavHeaderItem = dynamic(
  () => import('platformscode-new-react').then(m => m.DgaSecondNavHeaderItem),
  { ssr: false }
);

export default function SecondNavHeader() {
  const { lang } = useLanguage();
  const { _ } = useLingui();

  // Localized banner items (weather, date, time, location)
  const currentLang: 'ar' | 'en' = lang;
  const locale = currentLang === 'ar' ? 'ar-SA' : 'en-US';

  // Use state to avoid hydration mismatch - only render time on client
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(
      new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(now)
    );
    setTimeStr(
      new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now)
    );
  }, [locale]);

  const weatherStr = _(t`Cloudy`);
  const cityStr = _(t`Riyadh`);

  return (
    <DgaSecondNavHeader variant='gray' hideDivider>
      <DgaSecondNavHeaderActions>
        <DgaButton
          label='Button'
          variant='transparent'
          iconType='view'
          size='sm'
          iconOnly
        />
        <DgaButton
          label='Button'
          variant='transparent'
          iconType='zoom-in-area'
          size='sm'
          iconOnly
        />
        <DgaButton
          label='Button'
          variant='transparent'
          iconType='zoom-out-area'
          size='sm'
          iconOnly
        />
        <DgaButton
          label='Button'
          variant='transparent'
          iconType='mic-01'
          size='sm'
          iconOnly
        />
      </DgaSecondNavHeaderActions>
      <DgaSecondNavHeaderContent>
        {weatherStr && (
          <DgaSecondNavHeaderItem label={weatherStr}>
            <DgaIcon size={16} icon='cloud' variant='stroke' type='rounded' />
          </DgaSecondNavHeaderItem>
        )}
        {dateStr && (
          <DgaSecondNavHeaderItem label={dateStr}>
            <DgaIcon
              size={16}
              icon='calendar-04'
              variant='stroke'
              type='rounded'
            />
          </DgaSecondNavHeaderItem>
        )}
        {timeStr && (
          <DgaSecondNavHeaderItem label={timeStr}>
            <DgaIcon size={16} icon='time-04' variant='stroke' type='rounded' />
          </DgaSecondNavHeaderItem>
        )}
        {cityStr && (
          <DgaSecondNavHeaderItem label={cityStr}>
            <DgaIcon
              size={16}
              icon='location-01'
              variant='stroke'
              type='rounded'
            />
          </DgaSecondNavHeaderItem>
        )}
      </DgaSecondNavHeaderContent>
    </DgaSecondNavHeader>
  );
}
