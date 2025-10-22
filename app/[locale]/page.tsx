import { Suspense } from 'react';
import FirstSection from './(public)/_components/FirstSection';
import AdmissionsSection from './(public)/_components/AdmissionsSection';
import EventsSection from './(public)/_components/EventsSection';
import ScientificResearchSection from './(public)/_components/ScientificResearchSection';
import StudentAffairsSection from './(public)/_components/StudentAffairsSection';
import UniversityLifeSection from './(public)/_components/UniversityLifeSection';
import DigitalSignatureBanner from './(public)/_components/DigitalSignatureBanner';

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <FirstSection />
        <AdmissionsSection />
        <EventsSection />
        <ScientificResearchSection />
        <StudentAffairsSection />
        <UniversityLifeSection />
        <DigitalSignatureBanner />
      </Suspense>
    </main>
  );
}
