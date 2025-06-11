'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ComponentProps, useEffect, useState } from 'react';

const Testimonials = () => {
  const t = useTranslations('IndexPage.testimonials');
  const [showAll, setShowAll] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [displayed, setDisplayed] = useState<
    { id: number; name: string; designation: string; testimonial: string; avatar: string }[]
  >([]);

  const testimonials = [
    {
      id: 1,
      name: t('firstClientName'),
      designation: t('firstClientProfession'),
      testimonial: t('firstClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: t('secondClientName'),
      designation: t('secondClientProfession'),
      testimonial: t('secondClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      name: t('thirdClientName'),
      designation: t('thirdClientProfession'),
      testimonial: t('thirdClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: t('fourthClientName'),
      designation: t('fourthClientProfession'),
      testimonial: t('fourthClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 5,
      name: t('fifthClientName'),
      designation: t('fifthClientProfession'),
      testimonial: t('fifthClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      name: t('sixthClientName'),
      designation: t('sixthClientProfession'),
      testimonial: t('sixthClientReview'),
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
  ];

  useEffect(() => {
    if (isMobile && !showAll) {
      setDisplayed(testimonials.slice(0, 3));
    } else {
      setDisplayed(testimonials);
    }
  }, [showAll]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center items-center"
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title mb-8 lg:mb-12"
        >
          {t('title')}
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-6">
          {displayed.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 lg:mb-8 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm rounded-2xl p-6 break-inside-avoid"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base lg:text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
                <Button className="hidden" variant="ghost" size="icon" asChild>
                  <Link href="#" target="_blank">
                    <TwitterLogo className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-5 paragraph-sm lg:text-base">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </div>

        {!showAll && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center w-full mt-4 md:mt-8"
          >
            <Button variant="secondary" onClick={() => setShowAll(true)}>
              Load more
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const TwitterLogo = (props: ComponentProps<'svg'>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;
