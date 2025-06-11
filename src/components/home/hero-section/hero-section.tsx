import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Review from './review';

const heroImage = ['/assets/portfolio/all/4.jpg', '/assets/portfolio/all/1.jpg', '/assets/portfolio/all/2.jpg'];

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

const reviewVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' },
  },
};

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
        className="mx-auto max-w-7xl px-[32px] relative flex items-center justify-between pt-16 pb-5 h-fit lg:h-[calc(100vh-80px)]"
      >
        <div>
          <div className="w-full space-y-2 lg:space-y-4 max-w-[600px]">
            <Link href="/services">
              <motion.span
                variants={itemVariants}
                className="group text-xs md:text-sm text-ring py-1 px-2 flex items-center gap-2 w-fit rounded-full border border-ring mb-4"
              >
                {t('cto')}
                <ArrowRight className="h-4 w-4 group-hover:ml-1 duration-300" />
              </motion.span>
            </Link>

            <motion.h1
              variants={itemVariants}
              className="whitespace-wrap text-[28px] md:text-[32px] tracking-[-.015em] leading-[36px] md:leading-[55px] lg:text-[45px] md:tracking-[-1.6px] font-medium"
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

          <motion.div variants={reviewVariants} className="hidden lg:block">
            <Review />
          </motion.div>

          <Carousel plugins={[Autoplay({ delay: 5000 })]} className="h-72 block lg:hidden mt-5 overflow-hidden">
            <CarouselContent className="-ml-1 h-full">
              {heroImage.map((item, idx) => (
                <CarouselItem key={idx} className="pl-1">
                  <Image
                    src={item}
                    alt={`Hero Image ${idx + 1}`}
                    width={350}
                    height={250}
                    className="h-72 w-full object-cover rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        animate="show"
        variants={imageVariants}
        className="hidden lg:block absolute top-1/2 right-0 z-50 transform -translate-y-1/2 w-[600px] h-[400px] lg:w-[650px] lg:h-[450px] 2xl:w-[700px] 2xl:h-[500px] rounded-l-lg overflow-hidden shadow-lg"
      >
        <Carousel plugins={[Autoplay({ delay: 5000 })]} className="h-full">
          <CarouselContent className="-ml-1 h-full">
            {heroImage.map((item, idx) => (
              <CarouselItem key={idx} className="pl-1">
                <Image
                  src={item}
                  alt={`Hero Image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}
