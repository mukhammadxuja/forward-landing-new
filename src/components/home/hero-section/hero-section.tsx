import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Review from './review';

const headerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// 👇 Review animatsiyasi
const reviewVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' },
  },
};

// 👇 Rasm animatsiyasi
const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.4, duration: 1, ease: 'easeOut' },
  },
};

export function HeroSection() {
  const t = useTranslations('IndexPage.header');

  return (
    <div className="relative overflow-hidden">
      <motion.section
        initial="hidden"
        animate="show"
        variants={headerVariants}
        className="mx-auto max-w-7xl px-[32px] relative flex items-center justify-between h-[80vh] lg:h-[calc(100vh-80px)]"
      >
        <div>
          <div className="w-full space-y-4 max-w-[600px]">
            <motion.span
              variants={itemVariants}
              className="text-xs md:text-sm text-primary py-1 px-2 flex items-center gap-2 w-fit rounded-full border border-primary"
            >
              {t('cto')}
              <ArrowRight className="h-4 w-4" />
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-[32px] tracking-[-.015em] leading-[36px] md:leading-[55px] lg:text-[45px] md:tracking-[-1.6px] font-medium"
            >
              {t('heading')}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[16px] md:text-[18px] leading-[27px] md:text-[20px] lg:leading-[30px] text-accent-foreground"
            >
              {t('paragraph')}
            </motion.p>
          </div>

          {/* ✨ Animated Review */}
          <motion.div variants={reviewVariants}>
            <Review />
          </motion.div>
        </div>
      </motion.section>

      {/* ✨ Animated Image */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={imageVariants}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <Image src="/mockup.jpg" alt="Hero Image" width={650} height={650} className="rounded-l-xl" />
      </motion.div>
    </div>
  );
}
