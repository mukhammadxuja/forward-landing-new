'use client';

import { HomePageBackground } from '@/components/gradients/home-page-background';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import dynamic from 'next/dynamic';
// import { billboardData } from '../../../public/assets/data';
import '../../styles/home-page.css';
import Contact from './contact';
import FAQ from './faq';
import { BuiltUsingTools } from './footer/built-using-tools';
import HowWeWork from './how-we-work';
import PortfolioSection from './portfolio';
import { Pricing } from './pricing/pricing';
import Services from './services';
import Stats from './stats';
import Testimonials from './testimonial';

const Map = dynamic(() => import('../sections/map'), { ssr: false });

import { Locale, useTranslations } from 'next-intl';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export function HomePage({ params }: Props) {
  const t = useTranslations('IndexPage');
  return (
    <>
      <div>
        <HomePageBackground />

        <HeroSection />
        {/* <Map billboardData={billboardData.map((billboard) => ({ ...billboard, id: billboard.id.toString() }))} /> */}
        <div className="space-y-12 lg:space-y-20 mb-10 mx-auto max-w-7xl px-[32px] lg:px-4">
          <Stats />
          <Services />
        </div>

        <HowWeWork />

        <div className="hidden space-y-12 lg:space-y-20 mb-10 mx-auto max-w-7xl px-[32px] lg:px-4">
          <Pricing country="US" />
        </div>

        <PortfolioSection />

        <div className="space-y-12 lg:space-y-20 mb-10 mx-auto max-w-7xl px-[32px] lg:px-4">
          <Testimonials />
          <BuiltUsingTools />
          <FAQ />
          <Contact />
        </div>
      </div>
    </>
  );
}
