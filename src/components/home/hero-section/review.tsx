import { Marquee } from '@/components/ui/marquee';
import { useCursorGlow } from '@/hooks/useCursorPosition';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const reviewVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' },
  },
};

function Review() {
  const stars = Math.random() < 0.8 ? 5 : 4;
  const t = useTranslations('IndexPage.review');

  const reviews = [
    {
      companyName: t('companyName1'),
      reviewer: t('reviewer1'),
      review: t('review1'),
      companyLogo: '/assets/clients/zamon-print.jpg',
    },
    {
      companyName: t('companyName2'),
      reviewer: t('reviewer2'),
      review: t('review2'),
      companyLogo: '/assets/clients/ideal-avto.png',
    },
    {
      companyName: t('companyName3'),
      reviewer: t('reviewer3'),
      review: t('review3'),
      companyLogo: '/assets/clients/fresh-market.png',
    },
    {
      companyName: t('companyName4'),
      reviewer: t('reviewer4'),
      review: t('review4'),
      companyLogo: '/assets/clients/oqtepa-lavash.jpg',
    },
    {
      companyName: t('companyName5'),
      reviewer: t('reviewer5'),
      review: t('review5'),
      companyLogo: '/assets/clients/jizzax-city-clinic.png',
    },
    {
      companyName: t('companyName6'),
      reviewer: t('reviewer6'),
      review: t('review6'),
      companyLogo: '/assets/clients/smart-tech.png',
    },
    {
      companyName: t('companyName7'),
      reviewer: t('reviewer7'),
      review: t('review7'),
      companyLogo: '/assets/clients/eco-food.jpg',
    },
    {
      companyName: t('companyName8'),
      reviewer: t('reviewer8'),
      review: t('review8'),
      companyLogo: '/assets/clients/gold-fitness.png',
    },
    {
      companyName: t('companyName9'),
      reviewer: t('reviewer9'),
      review: t('review9'),
      companyLogo: '/assets/clients/baraka-group.png',
    },
    {
      companyName: t('companyName10'),
      reviewer: t('reviewer10'),
      review: t('review10'),
      companyLogo: '/assets/clients/book-cafe.jpg',
    },
  ];

  return (
    <motion.div
      variants={reviewVariants}
      initial="hidden"
      animate="show"
      className="relative text-center mt-5 lg:mt-8 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-14 lg:w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-14 lg:w-20 bg-gradient-to-l from-background to-transparent z-10" />

      <Marquee className="items-center" direction="left">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="border border-accent bg-background/50 backdrop-blur-lg w-[300px] rounded-2xl px-4 py-3 mx-2 space-y-2"
          >
            <div className="flex items-center space-x-3">
              <img src={item.companyLogo} alt={item.companyName} className="w-7 h-7 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-semibold text-white text-xs">{item.companyName}</p>
                {/* <p className="text-muted-foreground text-xs">{item.reviewer}</p> */}
              </div>
            </div>
            <p className="text-accent-foreground text-left text-xs line-clamp-2">{item.review}</p>
            <div className="flex space-x-1 text-yellow-500">
              {[...Array(stars)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44 1.286 3.946c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.36 2.44c-.785.57-1.84-.197-1.54-1.118l1.286-3.946-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.15l1.286-3.946z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
}

export default Review;
