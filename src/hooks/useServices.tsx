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
            image: '/images/services/led.jpg',
            gallery: ['/images/services/led1.jpg', '/images/services/led2.jpg', '/images/services/led3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '2,500,000 – 5,500,000',
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
            image: '/assets/service/billboard.avif',
            gallery: ['/assets/billboards/1.png', '/assets/service/billboard.avif', '/assets/service/billboard.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '1,500,000 – 3,500,000',
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
            image: '/images/services/katta-harf.jpg',
            gallery: [
              '/images/services/katta-harf1.jpg',
              '/images/services/katta-harf2.jpg',
              '/images/services/katta-harf3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '3,000,000 – 6,000,000',
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
            image: '/images/services/billboard.jpg',
            gallery: [
              '/images/services/billboard1.jpg',
              '/images/services/billboard2.jpg',
              '/images/services/billboard3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '1,200,000 – 3,000,000',
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
            image: '/images/services/citybox.jpg',
            gallery: [
              '/images/services/citybox1.jpg',
              '/images/services/citybox2.jpg',
              '/images/services/citybox3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '500,000 – 1,000,000',
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
            image: '/images/services/avtobus.jpg',
            gallery: [
              '/images/services/avtobus1.jpg',
              '/images/services/avtobus2.jpg',
              '/images/services/avtobus3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '1,800,000 – 4,000,000',
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
            image: '/images/services/bortma-harf.jpg',
            gallery: [
              '/images/services/bortma-harf1.jpg',
              '/images/services/bortma-harf2.jpg',
              '/images/services/bortma-harf3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '700,000 – 2,500,000',
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
            image: '/images/services/stella.jpg',
            gallery: ['/images/services/stella1.jpg', '/images/services/stella2.jpg', '/images/services/stella3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '2,000,000 – 5,000,000',
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
            image: '/images/services/banner.jpg',
            gallery: ['/images/services/banner1.jpg', '/images/services/banner2.jpg', '/images/services/banner3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '100,000 – 800,000',
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
            image: '/images/services/tablichka.jpg',
            gallery: [
              '/images/services/tablichka1.jpg',
              '/images/services/tablichka2.jpg',
              '/images/services/tablichka3.jpg',
            ],
          },
          locations: [],
          thereMap: true,
          priceRange: '150,000 – 600,000',
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
            image: '/images/services/montaj.jpg',
            gallery: ['/images/services/montaj1.jpg', '/images/services/montaj2.jpg', '/images/services/montaj3.jpg'],
          },
          locations: [],
          thereMap: true,
          priceRange: '300,000 – 1,500,000',
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
          priceRange: '700,000 – 1,200,000',
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
          priceRange: '1,000,000 – 3,000,000',
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
          priceRange: '800,000 – 2,000,000',
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
          priceRange: '2,000,000 – 10,000,000',
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
          priceRange: '1,500,000 – 3,500,000',
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
