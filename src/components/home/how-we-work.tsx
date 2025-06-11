'use client';

import { BarChart, Brush, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { useCursorGlow } from '@/hooks/useCursorPosition';
import { motion } from 'framer-motion';

export default function HowWeWork() {
  const t = useTranslations('IndexPage.howWeWork');
  const { position, handleMouseMove } = useCursorGlow();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="py-10 lg:py-16 lg:mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3].map((step, i) => {
            const icons = [
              <MapPin key="1" className="text-4xl text-primary" />,
              <Brush key="2" className="text-4xl text-primary" />,
              <BarChart key="3" className="text-4xl text-primary" />,
            ];
            const imageSrc = `/assets/how-we-work/step${step}.jpg`;

            const content = (
              <>
                <div
                  className="flex gap-4 lg:gap-0 lg:flex-col space-y-4 lg:space-y-6 p-6 lg:p-7 relative group overflow-hidden cursor-default"
                  onMouseMove={handleMouseMove}
                >
                  <div
                    className="hidden absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded-2xl"
                    style={{
                      backgroundImage: `radial-gradient(180px circle at ${position.x} ${position.y}, rgba(5, 241, 99, 0.50) 0%, transparent 70%)`,
                    }}
                  />
                  {icons[i]}
                  <div>
                    <span className="text-xl font-medium">{t(`step${step}Title`)}</span>
                    <p className="paragraph-sm pt-2 mb-3 lg:!mb-5">{t(`step${step}Description`)}</p>
                    <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                      <small>{t('more')}</small>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 pb-0 lg:p-1 rounded-2xl">
                  <Image
                    src={imageSrc}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl"
                    alt="service gif"
                  />
                </div>
              </>
            );

            const isWide = step === 1;

            return (
              <motion.div
                key={step}
                className={`relative flex flex-col-reverse ${isWide ? 'lg:flex-row lg:col-span-2' : 'lg:flex-col'} group lg:min-h-60 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                {isWide ? (
                  <>
                    <div className="flex gap-4 lg:gap-0 lg:flex-col lg:w-1/2 space-y-4 lg:space-y-6 p-6 lg:p-7">
                      {icons[i]}
                      <div>
                        <span className="text-xl font-medium">{t(`step${step}Title`)}</span>
                        <p className="paragraph-sm pt-2 mb-3 lg:!mb-5">{t(`step${step}Description`)}</p>
                        <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                          <small>{t('more')}</small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-6 pb-0 lg:p-1">
                      <Image
                        src={imageSrc}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-2xl"
                        alt="service gif"
                      />
                    </div>
                  </>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
