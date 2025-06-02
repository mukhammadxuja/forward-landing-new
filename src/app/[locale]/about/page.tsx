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
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function About() {
  const t = useTranslations('AboutPage');
  const breadcrumbT = useTranslations('breadcrumb');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } },
  };

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
          <motion.div
            className="space-y-[24px] mt-3 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h4 className="section-title" variants={itemVariants}>
              {t('title')}
            </motion.h4>

            <motion.p className="paragraph max-w-[580px]" variants={itemVariants}>
              {t('paragraph')}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button className="hidden bg-primary text-white hover:bg-primary/80 rounded-full px-6 py-2">
                Batafsil <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <Stats aboutPage={true} />
          </motion.div>
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
