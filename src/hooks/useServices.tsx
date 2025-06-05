import { Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Service } from '../../public/assets/data';

function useServices() {
  const t = useTranslations('services');

  const services: Service[] = [
    {
      id: 1,
      title: t('title1'),
      icon: Brain,
      cards: [
        {
          id: 'led-monitorlar',
          title: t('service6Title'),
          description: t('service6Description'),
          href: '/services/led-monitorlar',
          fullDescription: t('service6FullDescription'),
          images: {
            image: '/assets/portfolio/led/led-online.webp',
            gallery: [
              '/assets/portfolio/led/led1.jpg',
              '/assets/portfolio/led/led2.jpg',
              '/assets/portfolio/led/led3.jpg',
              '/assets/portfolio/led/led4.jpg',
              '/assets/portfolio/led/led5.jpg',
              '/assets/portfolio/led/led6.jpg',
              '/assets/portfolio/led/led7.jpg',
              '/assets/portfolio/led/led8.jpg',
              '/assets/portfolio/led/led9.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: ['1,500,000 so‘m 5s', '2,200,000 so‘m 10s', '2,800,000 so‘m 15s', '3,300,000 so‘m 20s'],
          quantity: '10+',
          seo: {
            title: t('service6SeoTitle'),
            description: t('service6SeoDescription'),
            keywords: ['LED reklama', 'raqamli reklama', 'ekran reklama', 'Jizzax LED'],
          },
        },
        {
          id: 'brendmourlar',
          title: t('service1Title'),
          description: t('service1Description'),
          href: '/services/brendmourlar',
          fullDescription: t('service1FullDescription'),
          images: {
            image: '/assets/portfolio/all/4.jpg',
            gallery: [
              '/assets/portfolio/brendmauer/brendmauer1.jpg',
              '/assets/portfolio/brendmauer/brendmauer2.jpg',
              '/assets/portfolio/brendmauer/brendmauer3.jpg',
              '/assets/portfolio/brendmauer/brendmauer4.jpg',
              '/assets/portfolio/brendmauer/brendmauer5.jpg',
              '/assets/portfolio/brendmauer/brendmauer6.jpg',
              '/assets/portfolio/brendmauer/brendmauer7.jpg',
              '/assets/portfolio/brendmauer/brendmauer8.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '80,000 so‘m 1kv',
          quantity: '',

          seo: {
            title: t('service1SeoTitle'),
            description: t('service1SeoDescription'),
            keywords: ['brendmour', 'devor reklama', 'bino reklama', 'tashqi reklama', 'Jizzax reklama'],
          },
        },
        {
          id: 'katta-harflar',
          title: t('service2Title'),
          description: t('service2Description'),
          href: '/services/katta-harflar',
          fullDescription: t('service2FullDescription'),
          images: {
            image: '/assets/service/3d-letter.jpg',
            gallery: ['/assets/portfolio/katta-harflar/katta-harflar.webp'],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service2SeoTitle'),
            description: t('service2SeoDescription'),
            keywords: ['katta harflar', 'yoritilgan harflar', 'Jizzax reklama', 'tashqi reklama harflar'],
          },
        },
        {
          id: 'billboardlar',
          title: t('service5Title'),
          description: t('service5Description'),
          href: '/services/billboardlar',
          fullDescription: t('service5FullDescription'),

          images: {
            image: '/assets/portfolio/all/1.jpg',
            gallery: [
              '/assets/portfolio/billboardlar/billboardlar1.jpg',
              '/assets/portfolio/billboardlar/billboardlar2.jpg',
              '/assets/portfolio/billboardlar/billboardlar3.jpg',
              '/assets/portfolio/billboardlar/billboardlar4.jpg',
              '/assets/portfolio/billboardlar/billboardlar5.jpg',
              '/assets/portfolio/billboardlar/billboardlar6.jpg',
              '/assets/portfolio/billboardlar/billboardlar7.jpg',
              '/assets/portfolio/billboardlar/billboardlar8.jpg',
              '/assets/portfolio/billboardlar/billboardlar9.jpg',
              '/assets/portfolio/billboardlar/billboardlar10.jpg',
              '/assets/portfolio/billboardlar/billboardlar11.jpg',
              '/assets/portfolio/billboardlar/billboardlar12.jpg',
              '/assets/portfolio/billboardlar/billboardlar13.jpg',
              '/assets/portfolio/billboardlar/billboardlar14.jpg',
              '/assets/portfolio/billboardlar/billboardlar15.jpg',
              '/assets/portfolio/billboardlar/billboardlar16.jpg',
              '/assets/portfolio/billboardlar/billboardlar17.jpg',
              '/assets/portfolio/billboardlar/billboardlar18.jpg',
              '/assets/portfolio/billboardlar/billboardlar19.jpg',
              '/assets/portfolio/billboardlar/billboardlar20.jpg',
              '/assets/portfolio/billboardlar/billboardlar21.jpg',
              '/assets/portfolio/billboardlar/billboardlar22.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '1,500,000 so‘m 1dona',
          quantity: '100+',

          seo: {
            title: t('service5SeoTitle'),
            description: t('service5SeoDescription'),
            keywords: ['billboard', 'billboardlar Jizzax', 'tashqi reklama', 'banner joy', 'Jizzax reklama joylari'],
          },
        },
        {
          id: 'city-box',
          title: t('service3Title'),
          description: t('service3Description'),
          href: '/services/city-box',
          fullDescription: t('service3FullDescription'),
          images: {
            image: '/assets/portfolio/city-box/city-box-online.avif',
            gallery: ['/assets/portfolio/city-box/city-box-online.avif', '/assets/portfolio/city-box/city-box.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service3SeoTitle'),
            description: t('service3SeoDescription'),
            keywords: ['city box', 'afisha joylari', 'piyoda reklama', 'Jizzax tashqi reklama'],
          },
        },
        {
          id: 'avtobus',
          title: t('service4Title'),
          description: t('service4Description'),
          href: '/services/avtobus',
          fullDescription: t('service4FullDescription'),
          images: {
            image: '/assets/portfolio/bus/bus.jpg',
            gallery: ['/images/services/avtobus.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '600,000 so‘m',
          quantity: '',

          seo: {
            title: t('service4SeoTitle'),
            description: t('service4SeoDescription'),
            keywords: ['avtobus reklama', 'harakatdagi reklama', 'transport reklama', 'Jizzax reklama'],
          },
        },
      ],
    },
    {
      id: 2,
      title: t('title2'),
      icon: Brain,
      cards: [
        {
          id: 'bortma-harflar',
          title: t('service2_1Title'),
          description: t('service2_1Description'),
          href: '/services/bortma-harflar',
          fullDescription: t('service2_1FullDescription'),
          images: {
            image: '/assets/service/3d-letter.jpg',
            gallery: [
              '/assets/service/3d-letter.jpg',
              '/assets/portfolio/brendmaur/brendmaur2.jpg',
              '/assets/portfolio/brendmaur/brendmaur3.jpg',
              '/assets/portfolio/brendmaur/brendmaur4.jpg',
              '/assets/portfolio/brendmaur/brendmaur5.jpg',
              '/assets/portfolio/brendmaur/brendmaur6.jpg',
              '/assets/portfolio/brendmaur/brendmaur7.jpg',
              '/assets/portfolio/brendmaur/brendmaur8.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service2_1SeoTitle'),
            description: t('service2_1SeoDescription'),
            keywords: ['bo‘rtma harflar', 'reklama harflar', 'yoritilgan harflar', 'Jizzax tashqi reklama'],
          },
        },
        {
          id: 'stella',
          title: t('service2_2Title'),
          description: t('service2_2Description'),
          href: '/services/stella',
          fullDescription: t('service2_2FullDescription'),
          images: {
            image: '/assets/portfolio/city-box/city-box-online.avif',
            gallery: ['/assets/portfolio/city-box/city-box-online.avif', '/images/services/stella2.jpg', '/images/services/stella3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service2_2SeoTitle'),
            description: t('service2_2SeoDescription'),
            keywords: ['stella', 'tashqi reklama', 'Jizzax stellalar', 'reklama ustunlari'],
          },
          new: true,
        },
        {
          id: 'banner-chop-etish',
          title: t('service2_3Title'),
          description: t('service2_3Description'),
          href: '/services/banner-chop-etish',
          fullDescription: t('service2_3FullDescription'),
          images: {
            image: '/assets/portfolio/all/3.jpg',
            gallery: ['/assets/portfolio/all/3.jpg', '/images/services/banner2.jpg', '/images/services/banner3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '40,000 so‘m 1kv',
          quantity: '',

          seo: {
            title: t('service2_3SeoTitle'),
            description: t('service2_3SeoDescription'),
            keywords: ['banner chop', 'Jizzax banner', 'reklama banneri', 'orakal bosma'],
          },
        },
        {
          id: 'tablichkalar',
          title: t('service2_4Title'),
          description: t('service2_4Description'),
          href: '/services/tablichkalar',
          fullDescription: t('service2_4FullDescription'),
          images: {
            image: '/assets/portfolio/tablichka/tablichka.jpg',
            gallery: [
              '/images/services/tablichka1.jpg',
              '/images/services/tablichka2.jpg',
              '/images/services/tablichka3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service2_4SeoTitle'),
            description: t('service2_4SeoDescription'),
            keywords: ['tablichka', 'yo‘naltiruvchi yozuvlar', 'ofis belgilari', 'Jizzax reklama'],
          },
        },
        {
          id: 'montaj-xizmati',
          title: t('service2_5Title'),
          description: t('service2_5Description'),
          href: '/services/montaj-xizmati',
          fullDescription: t('service2_5FullDescription'),
          images: {
            image: '/assets/portfolio/all/14.jpg',
            gallery: ['/images/services/montaj1.jpg', '/images/services/montaj2.jpg', '/images/services/montaj3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '40,000 so‘m 1kv',
          quantity: '',

          seo: {
            title: t('service2_5SeoTitle'),
            description: t('service2_5SeoDescription'),
            keywords: ['reklama montaj', 'o‘rnatish xizmati', 'banner montaji', 'Jizzax reklama'],
          },
        },
      ],
    },

    {
      id: 3,
      title: t('title3'),
      icon: Brain,
      cards: [
        {
          id: 'naming',
          title: t('service3_1Title'),
          description: t('service3_1Description'),
          href: '/services/naming',
          fullDescription: t('service3_1FullDescription'),
          images: {
            image: '/assets/service/naming.jpg',
            gallery: ['/assets/service/naming1.jpg', '/assets/service/naming2.jpg', '/assets/service/naming3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service3_1SeoTitle'),
            description: t('service3_1SeoDescription'),
            keywords: ['naming', 'brend nomi', 'nom tanlash', 'kompaniya nomi', 'Jizzax branding'],
          },
        },
        {
          id: 'branding',
          title: t('service3_2Title'),
          description: t('service3_2Description'),
          href: '/services/branding',
          fullDescription: t('service3_2FullDescription'),
          images: {
            image: '/assets/service/branding.jpg',
            gallery: [
              '/assets/service/branding1.jpg',
              '/assets/service/branding2.jpg',
              '/assets/service/branding3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service3_2SeoTitle'),
            description: t('service3_2SeoDescription'),
            keywords: ['branding', 'brend identifikatsiyasi', 'logo dizayn', 'Jizzax branding xizmati'],
          },
        },
        {
          id: 'packaging',
          title: t('service3_3Title'),
          description: t('service3_3Description'),
          href: '/services/packaging',
          fullDescription: t('service3_3FullDescription'),
          images: {
            image: '/assets/service/packaging.jpg',
            gallery: [
              '/assets/service/packaging1.jpg',
              '/assets/service/packaging2.jpg',
              '/assets/service/packaging3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service3_3SeoTitle'),
            description: t('service3_3SeoDescription'),
            keywords: ['packaging', 'qadoqlash dizayni', 'Jizzax dizayn', 'qadoqlash xizmatlari'],
          },
        },
        {
          id: 'smd-led',
          title: t('service3_4Title'),
          description: t('service3_4Description'),
          href: '/services/smd-led',
          fullDescription: t('service3_4FullDescription'),
          images: {
            image: '/assets/service/led-display.jpg',
            gallery: ['/assets/service/led1.jpg', '/assets/service/led2.jpg', '/assets/service/led3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: 'Aloqaga chiqing',
          quantity: '',

          seo: {
            title: t('service3_4SeoTitle'),
            description: t('service3_4SeoDescription'),
            keywords: ['LED ekran', 'SMD displey', 'LED montaj', 'Jizzax SMD'],
          },
        },
        {
          id: 'web-sayt',
          title: t('service3_5Title'),
          description: t('service3_5Description'),
          href: '/services/web-sayt',
          fullDescription: t('service3_5FullDescription'),
          images: {
            image: '/assets/service/web.jpg',
            gallery: ['/assets/service/web1.jpg', '/assets/service/web2.jpg', '/assets/service/web3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '1,500,000 – 8,000,000 so‘m',
          quantity: '',

          seo: {
            title: t('service3_5SeoTitle'),
            description: t('service3_5SeoDescription'),
            keywords: [
              'web sayt yaratish',
              'veb dizayn',
              'sayt yaratish',
              'internet xizmatlari',
              'Jizzaxda sayt yaratish',
            ],
          },
        },
      ],
    },
  ];
  return services;
}

export default useServices;
