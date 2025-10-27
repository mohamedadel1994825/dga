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
    <div
      className='min-h-screen transition-colors duration-300'
      style={{
        backgroundColor: 'var(--color-background-primary, #ffffff)',
        color: 'var(--color-text-primary, #0f172a)',
      }}
    >
      <DigitalSignatureBanner />
      <SecondNavHeader />
      <NavHeader />

      <HeroSection />

      <Suspense
        fallback={
          <div
            className='flex items-center justify-center p-8 min-h-[200px]'
            style={{
              color: 'var(--color-text-secondary, #64748b)',
              backgroundColor: 'var(--color-background-primary, #ffffff)',
            }}
          >
            Loading...
          </div>
        }
      >
        {/* First Section from Figma: two cards + hero story */}
        <div
          style={{
            backgroundColor: 'var(--color-background-primary, #ffffff)',
          }}
        >
          <FirstSection />
        </div>

        {/* University Life Section from Figma */}
        <div
          style={{
            backgroundColor: 'var(--color-background-secondary, #f8fafc)',
          }}
        >
          <UniversityLifeSection />
        </div>

        {/* Scientific Research Section from Figma */}
        <div
          style={{
            backgroundColor: 'var(--color-background-primary, #ffffff)',
          }}
        >
          <ScientificResearchSection />
        </div>

        {/* Student Affairs Section from Figma */}
        <div
          style={{
            backgroundColor: 'var(--color-background-secondary, #f8fafc)',
          }}
        >
          <StudentAffairsSection />
        </div>

        {/* Events Section from Figma */}
        <div
          style={{
            backgroundColor: 'var(--color-background-primary, #ffffff)',
          }}
        >
          <EventsSection />
        </div>

        {/* Admissions Section from Figma */}
        <div
          style={{
            backgroundColor: 'var(--color-background-secondary, #f8fafc)',
          }}
        >
          <AdmissionsSection />
        </div>

        <div
          className='pt-[40px] px-[16px] md:px-[80px]'
          style={{
            backgroundColor: 'var(--color-background-primary, #ffffff)',
            color: 'var(--color-text-primary, #0f172a)',
          }}
        >
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
