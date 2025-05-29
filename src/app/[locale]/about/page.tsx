'use client';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Stats from '@/components/home/stats';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function About() {
  const t = useTranslations('AboutPage');
  const breadcrumbT = useTranslations('breadcrumb');
  return (
    <div className="spacey-y-4 lg:space-y-6">
      <div className="bg-card">
        <div className="lg:mx-auto lg:max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">{breadcrumbT('home')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumbT('company')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="space-y-[24px] mt-3 lg:mt-0">
            <h4 className="section-title">{t('title')}</h4>
            <p className="paragraph max-w-[580px]">{t('paragraph')}</p>
            <Button className="hidden bg-primary text-white hover:bg-primary/80 rounded-full px-6 py-2">
              Batafsil <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Stats aboutPage={true} />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-border">
        <div className="lg:sticky lg:top-24">
          <h4 className="section-title">{t('sectionTitle')}</h4>
        </div>
        <div className="space-y-4">
          <p className="paragraph">{t('paragraph1')}</p>
          <p className="paragraph">{t('paragraph2')}</p>
          <p className="paragraph">{t('paragraph3')}</p>
          <p className="paragraph">{t('paragraph4')}</p>
          <p className="paragraph">{t('paragraph5')}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-2 items-start border-b border-border">
        <h4 className="section-title">{t('missionTitle')}</h4>
        <div className="space-y-4 lg:space-y-6">
          <p className="paragraph">{t('missionParagraph')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-4 lg:space-y-0 py-8 lg:py-10 ">
        <FAQ />
        <BuiltUsingTools />
        <Contact />
      </div>
    </div>
  );
}

export default About;
