import { motion } from 'framer-motion';
import { Box, Wallpaper } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function Services() {
  const t = useTranslations('IndexPage.services');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <h4 className="section-title mb-8 lg:mb-12">{t('title')}</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1 - Billboard */}
        <motion.div
          variants={cardVariants}
          className="relative min-h-44 col-span-1 lg:col-span-2 row-span-1 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7"
        >
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/portfolio/all/1.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-60"></div>
          <div className="absolute bottom-6 z-20 space-y-2">
            <h5 className="text-xl font-semibold leading-6 text-white">Billboard</h5>
            <span className="text-sm 2xl:text-base opacity-80 font-normal leading-4 text-white">
              Jizzax shahar va tuman markazlarida 100 dan ortiq billboardlar
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="relative min-h-44 col-span-1 row-span-1 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7"
        >
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/portfolio/led/led-online.webp"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-60"></div>
          <div className="absolute bottom-6 z-20 space-y-2">
            <h5 className="text-xl font-semibold leading-6 text-white">LED monitorlar</h5>
            <span className="text-sm 2xl:text-base opacity-80 font-normal leading-4 text-white">
              Jizzax shahardagi 10 dan ortiq LED monitorlar
            </span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="relative col-span-1 lg:col-span-2 row-span-2 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full h-[25rem] md:h-[30rem] rounded-2xl overflow-hidden p-6 lg:p-7"
        >
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/portfolio/all/4.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-60"></div>
          <div className="absolute bottom-6 z-20 space-y-2 w-full">
            <h5 className="text-xl font-semibold leading-6 text-white">Brenmaurlar</h5>
            <span className="text-sm 2xl:text-base opacity-80 font-normal leading-4 text-white">
              Bino-devorlari va tomlarida joylashfont-semibold text-whitegan brendmourlar
            </span>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          className="relative min-h-44 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full h-full rounded-2xl overflow-hidden p-6 lg:p-7"
        >
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/portfolio/city-box/city-box-online.avif"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-60"></div>
          <div className="absolute bottom-6 z-20 space-y-2">
            <h5 className="text-xl font-semibold leading-6 text-white">City Box</h5>
            <span className="text-sm 2xl:text-base opacity-80 font-normal leading-4 text-white">
              {t('service4Description')}
            </span>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          variants={cardVariants}
          className="relative min-h-44 col-span-1 lg:col-span-2 row-span-1 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7"
        >
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/service/3d-letter.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-40"></div>
          <div className="absolute bottom-6 z-20 space-y-2">
            <h5 className="text-xl font-semibold leading-6 text-white">Katta harflar</h5>
            <span className="text-sm 2xl:text-base opacity-80 font-normal leading-4 text-white">
              Hajmli va chiroqli yozuvlar tayyorlas
            </span>
          </div>
        </motion.div>
      </div>

      <Link href="/services" className="flex items-center justify-center w-full mt-4 md:mt-8">
        <Button variant="secondary">{t('button')}</Button>
      </Link>
    </motion.div>
  );
}

export default Services;
