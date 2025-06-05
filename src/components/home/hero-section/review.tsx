import { Marquee } from '@/components/ui/marquee';

import { motion } from 'framer-motion';

const reviewVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' },
  },
};

export const reviews = [
  {
    companyName: 'Zamon Print',
    companyLogo: '/assets/clients/zamon-print.jpg',
    reviewer: 'Azizbek Mamatov',
    review:
      'Forward Advertise bilan hamkorlikdan juda mamnunmiz. Billboardlar joylashuvi strategik jihatdan juda qulay va sifatli bajarilgan.',
  },
  {
    companyName: 'Ideal Avto',
    companyLogo: '/assets/clients/ideal-avto.png',
    reviewer: 'Sardor Qodirov',
    review:
      'LED ekranlar orqali reklama qilish natijasida mijozlar soni ancha ortdi. Tashqi reklama bo‘yicha ishonchli hamkor!',
  },
  {
    companyName: 'Fresh Market Jizzax',
    companyLogo: '/assets/clients/fresh-market.png',
    reviewer: 'Nilufar Karimova',
    review:
      'Dizayn va joylashtirish bir joyda — Forward jamoasi ishni boshidan oxirigacha professional tarzda bajaradi.',
  },
  {
    companyName: 'Oqtepa Lavash',
    companyLogo: '/assets/clients/oqtepa-lavash.jpg',
    reviewer: 'Sanjar Eshonov',
    review: 'Bekatlar va avtobuslardagi reklama xizmatlari mijozlarimiz orasida brendimizni ancha tanitdi.',
  },
  {
    companyName: 'Jizzax City Clinic',
    companyLogo: '/assets/clients/jizzax-city-clinic.png',
    reviewer: 'Dilfuza Rasulova',
    review:
      'Reklama materiallari sifati yuqori darajada. Bannerni bir necha oy o‘rnatilgan holatda saqlab turish mumkin.',
  },
  {
    companyName: 'Smart Technologies',
    companyLogo: '/assets/clients/smart-tech.png',
    reviewer: 'Bekzod Tursunov',
    review: 'Brendmauer orqali reklama joylashtirganimizdan keyin onlayn buyurtmalar soni sezilarli darajada oshdi.',
  },
  {
    companyName: 'EcoFood Agro',
    companyLogo: '/assets/clients/eco-food.jpg',
    reviewer: 'Sherzod O‘ktamov',
    review: 'Kontent ishlab chiqish va ijtimoiy tarmoqlar uchun reklama kampaniyalari juda samarali bo‘ldi.',
  },
  {
    companyName: 'Gold Fitness',
    companyLogo: '/assets/clients/gold-fitness.png',
    reviewer: 'Malika Rajabova',
    review: 'Forward dizaynerlari bilan ishlash juda qulay. Fikrimni aniq tushunib, kreativ yechim taklif qilishdi.',
  },
  {
    companyName: 'Baraka Group',
    companyLogo: '/assets/clients/baraka-group.png',
    reviewer: 'Anvar Abdullayev',
    review:
      'Katta hajmli bannerlarimiz qisqa muddatda tayyorlandi. Joylashtirish ishlari ham aniq belgilangan vaqtda bajarildi.',
  },
  {
    companyName: 'Jizzax Book Café',
    companyLogo: '/assets/clients/book-cafe.jpg',
    reviewer: 'Zilola Ergasheva',
    review:
      'Reklama joylashganidan keyin yangi mijozlar oqimi sezilarli darajada oshdi. Raqobatchilar orasida ko‘zga tashlandik!',
  },
];

function Review() {
  const stars = Math.random() < 0.8 ? 5 : 4;
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
