'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import Link from 'next/link';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Testimonials from '@/components/home/testimonial';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Service } from '../../../../public/assets/data';

const projects = [
  {
    id: 1,
    title: 'Beeline Billboard',
    location: 'Toshkent, Chilonzor',
    size: '3x6m',
    type: 'LED',
    date: '2024-12-10',
    client: 'Beeline Uzbekistan',
    imageUrl: '/assets/billboards/1.png',
  },
  {
    id: 2,
    title: 'Coca-Cola Banner',
    location: 'Samarqand markazi',
    size: '4x12m',
    type: 'Statik',
    date: '2025-02-15',
    client: 'Coca-Cola',
    imageUrl: '/assets/billboards/1.png',
  },
];

function PortfolioPage() {
  const t = useTranslations('services');
  const breadcrumbT = useTranslations('breadcrumb');
  const portfolioT = useTranslations('PortfolioPage');

  const services: Service[] = [
    {
      id: 1,
      title: t('title1'),
      icon: Brain,
      cards: [
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
          priceRange: '3,000,000 – 6,000,000',
          seo: {
            title: t('service2SeoTitle'),
            description: t('service2SeoDescription'),
            keywords: ['katta harflar', 'yoritilgan harflar', 'Jizzax reklama', 'tashqi reklama harflar'],
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
          priceRange: '1,800,000 – 4,000,000',
          seo: {
            title: t('service4SeoTitle'),
            description: t('service4SeoDescription'),
            keywords: ['avtobus reklama', 'harakatdagi reklama', 'transport reklama', 'Jizzax reklama'],
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
          priceRange: '1,200,000 – 3,000,000',
          seo: {
            title: t('service5SeoTitle'),
            description: t('service5SeoDescription'),
            keywords: ['billboard', 'billboardlar Jizzax', 'tashqi reklama', 'banner joy', 'Jizzax reklama joylari'],
          },
        },
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
          priceRange: '2,500,000 – 5,500,000',
          seo: {
            title: t('service6SeoTitle'),
            description: t('service6SeoDescription'),
            keywords: ['LED reklama', 'raqamli reklama', 'ekran reklama', 'Jizzax LED'],
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Tayyorlash & Ishlab chiqarish',
      icon: Brain,
      cards: [
        {
          id: 'bortma-harflar',
          title: "Bo'rtma harflar",
          description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
          href: '/services/bortma-harflar',
          fullDescription: `Bo‘rtma harflar – bu korxonangiz yoki brendingizni yorqin va zamonaviy tarzda ifodalovchi reklama shaklidir. Ular asosan metall yoki plastmassadan tayyorlanib, ichki yoki tashqi yoritish tizimi bilan jihozlanadi. Ushbu harflar kechasi va kunduz ko‘rinuvchan bo‘lib, mijoz e'tiborini o‘ziga tortadi. Biz har bir harfni mijoz talabiga ko‘ra dizayn qilib, ishlab chiqaramiz va sifatli o‘rnatishni kafolatlaymiz.`,
          images: {
            image: '/images/services/bortma-harf.jpg',
            gallery: [
              '/images/services/bortma-harf1.jpg',
              '/images/services/bortma-harf2.jpg',
              '/images/services/bortma-harf3.jpg',
            ],
          },
          locations: [],
          priceRange: '700,000 – 2,500,000',
          seo: {
            title: "Bo'rtma harflar – Jizzaxda yorqin reklama yechimlari",
            description:
              'Jizzax shahrida sifatli, yoritilgan bo‘rtma harflar tayyorlash va o‘rnatish xizmati. Dizayn, ishlab chiqarish va montaj – barchasi bizdan.',
            keywords: ['bo‘rtma harflar', 'reklama harflar', 'yoritilgan harflar', 'Jizzax tashqi reklama'],
          },
        },
        {
          id: 'stella',
          title: 'Stella',
          description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
          href: '/services/stella',
          fullDescription: `Stella – bu korxona yoki tashkilot manzili va logotipini ko‘rsatish uchun foydalaniladigan mustaqil reklama inshootidir. Ular ko‘pincha yo‘l bo‘yida, ofis yoki zavod binolari oldida joylashadi. Stellalar korxonangiz imidjini mustahkamlab, tashrif buyuruvchilarga yo‘l ko‘rsatadi. Biz stellalarni chidamli materiallardan tayyorlab, dizayn, ishlab chiqarish va montaj xizmatlarini taklif qilamiz.`,
          images: {
            image: '/images/services/stella.jpg',
            gallery: ['/images/services/stella1.jpg', '/images/services/stella2.jpg', '/images/services/stella3.jpg'],
          },
          locations: [],
          priceRange: '2,000,000 – 5,000,000',
          seo: {
            title: 'Stellalar – Jizzaxda korxona tashqi ko‘rinishi uchun reklama yechimi',
            description:
              'Stellalar – korxona oldida o‘rnatiladigan zamonaviy reklama inshootlari. Jizzax bo‘ylab tayyorlash va o‘rnatish xizmati.',
            keywords: ['stella', 'tashqi reklama', 'Jizzax stellalar', 'reklama ustunlari'],
          },
          new: true,
        },
        {
          id: 'banner-chop-etish',
          title: 'Banner chop etish',
          description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
          href: '/services/banner-chop-etish',
          fullDescription: `Banner chop etish xizmati orqali siz reklama aktsiyalaringizni keng auditoriyaga tez va samarali yetkazishingiz mumkin. Biz bannerlarni yuqori sifatli materiallarga, professional printerlar yordamida chop etamiz. Orakal, vinil yoki boshqa turdagi bannerlar – hammasini tayyorlab, kerak bo‘lsa joyiga o‘rnatamiz. Loyihangiz uchun maxsus dizayn ham taklif qilamiz.`,
          images: {
            image: '/images/services/banner.jpg',
            gallery: ['/images/services/banner1.jpg', '/images/services/banner2.jpg', '/images/services/banner3.jpg'],
          },
          locations: [],
          priceRange: '100,000 – 800,000',
          seo: {
            title: 'Banner chop etish – Jizzaxda sifatli reklama bosma mahsulotlari',
            description:
              'Banner va orakal materiallarini chop etish, dizayn qilish va joyiga yetkazib o‘rnatish – Jizzaxda tez va ishonchli xizmat.',
            keywords: ['banner chop', 'Jizzax banner', 'reklama banneri', 'orakal bosma'],
          },
        },
      ],
    },
    {
      id: 3,
      title: 'Boshqa xizmatlar',
      icon: Brain,
      cards: [
        {
          id: 'web-sayt-yaratish',
          title: 'Web sayt yaratish',
          description: 'Description X',
          href: '/services/stella',
        },
        {
          id: 'mashino-mesta',
          title: 'Машино-места',
          description: 'Description Y',
          href: '/services/stella',
        },
        {
          id: 'kladovye',
          title: 'Кладовые',
          description: 'Description Z',
          href: '/services/stella',
        },
        {
          id: 'arenda-kvartir',
          title: 'Аренда квартир',
          description: 'Description W',
          href: '/services/stella',
        },
        {
          id: 'auktsiony-nedvizhimosti',
          title: 'Аукционы недвижимости',
          description: 'Description V',
          href: '/services/stella',
        },
      ],
    },
  ];

  const allServices = services.flatMap((category) =>
    category.cards.map((service) => ({
      ...service,
      title: category.title,
    })),
  );

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  interface ModalState {
    isOpen: boolean;
    images: string[];
    current: number;
  }

  const [modal, setModal] = useState<ModalState>({ isOpen: false, images: [], current: 0 });

  const openModal = (images: string[], index: number): void => {
    setModal({ isOpen: true, images, current: index });
  };

  const closeModal = () => setModal({ isOpen: false, images: [], current: 0 });

  const nextImage = () =>
    setModal((prev) => ({
      ...prev,
      current: (prev.current + 1) % prev.images.length,
    }));

  const prevImage = () =>
    setModal((prev) => ({
      ...prev,
      current: (prev.current - 1 + prev.images.length) % prev.images.length,
    }));

  return (
    <div className="spacey-y-4 lg:space-y-6">
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{breadcrumbT('home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbT('portfolio')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-[24px] mt-3 lg:mt-0">
          <h4 className="section-title">{portfolioT('title')}</h4>
          <p className="paragraph max-w-[580px]">{portfolioT('paragraph')}</p>
        </div>
        <div>
          {services.map((service, idx) => (
            <div key={idx}>
              <div>
                <h5 className="section-title !text-[28px] my-8">{service.title}</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {service.cards.map((card, idx) => (
                    <div key={idx} className={idx < 2 ? 'lg:col-span-2' : ''}>
                      <div
                        className="cursor-pointer"
                        onClick={() => openModal(card.images?.gallery || [], 0)}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        <Image
                          src={card.images?.image ?? '/assets/billboards/1.png'}
                          alt={card.title}
                          width={500}
                          height={500}
                          className="w-full h-72 object-cover rounded-xl"
                        />
                      </div>
                      <div className=" mt-2">
                        <h2 className="text-base font-semibold">{card.title}</h2>
                        <p className="paragraph-sm mt-2">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {modal.isOpen && (
          <div className="fixed inset-0 h-screen bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-[10003]">
            <button className="absolute cursor-pointer top-5 right-5 text-white text-3xl" onClick={closeModal}>
              &times;
            </button>
            <Button
              size="sm"
              variant="default"
              onClick={prevImage}
              className="absolute cursor-pointer left-4 lg:left-8 text-white text-2xl"
            >
              &#10094;
            </Button>
            <Button
              size="sm"
              variant="default"
              onClick={nextImage}
              className="absolute cursor-pointer right-4 lg:rights-8 text-white text-2xl"
            >
              &#10095;
            </Button>
            <Image
              src={modal.images[modal.current]}
              alt="Gallery"
              width={800}
              height={600}
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        )}

        <div className="space-y-[24px] mt-[24px]">
          <Testimonials />
          <FAQ />
          <BuiltUsingTools />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
