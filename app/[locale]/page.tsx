'use client';

import { Suspense } from 'react';
import DigitalSignatureBanner from './(public)/_components/DigitalSignatureBanner';
import WebComponentErrorBoundary from './(public)/_components/WebComponentErrorBoundary';
import SecondNavHeader from './(public)/_components/SecondNavHeader';
import NavHeader from './(public)/_components/NavHeader';
import HeroSection from './(public)/_components/HeroSection';
import FirstSection from './(public)/_components/FirstSection';
import UniversityLifeSection from './(public)/_components/UniversityLifeSection';
import ScientificResearchSection from './(public)/_components/ScientificResearchSection';
import StudentAffairsSection from './(public)/_components/StudentAffairsSection';
import EventsSection from './(public)/_components/EventsSection';
import AdmissionsSection from './(public)/_components/AdmissionsSection';
import AboutSection from './(public)/_components/AboutSection';
import ServicesSection from './(public)/_components/ServicesSection';
import NewsSection from './(public)/_components/NewsSection';
import FooterSection from './(public)/_components/FooterSection';

export default function HomePage() {
  return (
    <div>
      <DigitalSignatureBanner />
      <SecondNavHeader />
      <NavHeader />

      <HeroSection />

      <Suspense fallback={<div>Loading...</div>}>
        {/* First Section from Figma: two cards + hero story */}
        <FirstSection />

        {/* University Life Section from Figma */}
        <UniversityLifeSection />

        {/* Scientific Research Section from Figma */}
        <ScientificResearchSection />

        {/* Student Affairs Section from Figma */}
        <StudentAffairsSection />

        {/* Events Section from Figma */}
        <EventsSection />

        {/* Admissions Section from Figma */}
        <AdmissionsSection />

        <div className='pt-[40px] px-[16px] md:px-[80px]'>
          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* News Section */}
          <NewsSection />
        </div>

        {/* Footer Section */}
        <FooterSection />
      </Suspense>
    </div>
  );
}
