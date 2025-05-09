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
import PortfolioSection from '@/components/home/portfolio';
import Testimonials from '@/components/home/testimonial';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, HandCoins, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { billboardData, ServiceCard, Service as ServiceType } from '../../../../../public/assets/data';

const Map = dynamic(() => import('../../../../components/sections/map'), { ssr: false });

function Service() {
  const params = useParams();
  const t = useTranslations('services');

  const services: ServiceType[] = [
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
          id: 'web-sayt',
          title: t('service3_1Title'),
          description: t('service3_1Description'),
          href: '/services/web-sayt',
          fullDescription: t('service3_1FullDescription'),
          images: {
            image: '/assets/service/billboard.avif',
            gallery: ['/assets/billboards/1.png', '/assets/service/billboard.avif', '/assets/service/billboard.jpg'],
          },
          locations: [],
          priceRange: '1,500,000 – 3,500,000',
          seo: {
            title: t('service3_1SeoTitle'),
            description: t('service3_1SeoDescription'),
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

  const allCards = services
    .flatMap((section) =>
      (section?.cards || []).filter(
        (card): card is ServiceCard =>
          card &&
          'id' in card &&
          'title' in card &&
          'description' in card &&
          'fullDescription' in card &&
          'images' in card &&
          'priceRange' in card &&
          'seo' in card,
      ),
    )
    .filter(
      (card): card is ServiceCard =>
        card &&
        typeof card === 'object' &&
        card !== null &&
        'id' in card &&
        'title' in card &&
        'description' in card &&
        'fullDescription' in card &&
        'images' in card &&
        'priceRange' in card &&
        'seo' in card,
    )
    .filter(
      (card): card is ServiceCard =>
        (card as any)?.id &&
        (card as any)?.title &&
        (card as any)?.description &&
        (card as any)?.fullDescription &&
        (card as any)?.images &&
        (card as any)?.priceRange &&
        (card as any)?.seo,
    );

  const service = allCards.find((card) => card.id === params.service);

  if (!service) return notFound();

  const serviceBillboardData = billboardData.filter((item) => item.type === service.id);

  return (
    <div className="spacey-y-4 lg:space-y-6">
      <div className="relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
        <Breadcrumb className="mx-auto max-w-7xl px-[32px] lg:px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink asChild>
              <Link href="/services">Services</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-[24px] mt-3 lg:mt-0">
          <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-[24px]">
            <h4 className="section-title max-w-[35rem]">{service.description}</h4>

            <div className="flex gap-3">
              <Button size="sm" variant="default">
                Buyurtma berish
              </Button>
              <Link href="/contact">
                <Button size="sm" variant="secondary">
                  Aloqaga chiqish
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-[32px] lg:px-4 mt-10 lg:mt-20">
            <div>
              <Image
                width={200}
                height={400}
                className="w-full h-[24rem] lg:h-[35rem] object-cover rounded-2xl"
                src="/assets/service/billboard.avif"
                alt="service gif"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 py-10">
                <h4 className="mb-3 lg:mb-0 text-foreground-secondary text-[18px] tracking-[-.01em] leading-[24px] font-medium">
                  Xizmatning afzalliklari
                </h4>
                <div className="col-span-2">
                  <p className="paragraph">{service?.fullDescription}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <Badge variant="secondary" className="p-3 py-2 gap-2">
                      <HandCoins className="h-4 w-4" />
                      <span>{service?.priceRange} so'm/oy</span>
                    </Badge>
                    <Badge variant="secondary" className="p-3 py-2 gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{serviceBillboardData.length} ta mavjud</span>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <Map
              mapPage={true}
              billboardData={serviceBillboardData.map((item) => ({ ...item, id: item.id.toString() }))}
            />
          </div>

          <PortfolioSection className="bg-transparent !py-0 mt-10" />

          <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-[24px]">
            <Testimonials />
            <BuiltUsingTools />
            <FAQ />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
