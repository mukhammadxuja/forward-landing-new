'use client';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import { Pricing } from '@/components/home/pricing/pricing';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import '@/styles/home-page.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

const users = ['https://github.com/shadcn.png', 'https://github.com/shadcn.png', 'https://github.com/shadcn.png'];

function Favorites() {
  const breadcrumbT = useTranslations('breadcrumb');
  const t = useTranslations('PricePage');
  return (
    <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative py-6 lg:py-10">
      <motion.div className="space-y-4 lg:space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{breadcrumbT('home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbT('price')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <motion.span
          className="text-xs lg:text-sm text-white/50 py-1 px-2 flex items-center gap-2 w-fit rounded-full border border-white/50"
          variants={itemVariants}
        >
          {t('cto')}
        </motion.span>

        <motion.h4 className="section-title" variants={itemVariants}>
          {t('title')}
        </motion.h4>

        <motion.p className="paragraph max-w-[580px]" variants={itemVariants}>
          {t('paragraph')}
        </motion.p>
      </motion.div>

      <div className="space-y-[24px] mt-[24px]">
        <Pricing country="US" />
        <FAQ />
        <BuiltUsingTools />
        <Contact />
      </div>
    </div>
  );
}

export default Favorites;
