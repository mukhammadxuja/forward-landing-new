'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Link from 'next/link';

import Contact from '@/components/home/contact';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Testimonials from '@/components/home/testimonial';
import { Brain, Flag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Service } from '../../../../public/assets/data';

function Services() {
  const t = useTranslations('services');

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
      title: t('title2'),
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
      title: t('title3'),
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
  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-[24px] mt-3 lg:mt-0">
          <h4 className="section-title">Level-up your design game, today</h4>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Get lifetime access to all the blocks and templates, plus any new content that will be added in the future.{' '}
            <br /> No recurring fees, no false scarcity, no fake discounts. Just simple, transparent pricing.
          </p>

          <div className="!mt-8 md:!mt-12">
            {services.map((service, idx) => (
              <div key={idx}>
                <h5 className="section-title !text-[28px] my-8">{service.title}</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.cards.map((card, idx) => (
                    <Link
                      href={card.href}
                      key={idx}
                      className="relative group cursor-pointer min-h-44 bg-popover w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div>
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm mt-1.5">{card.description}</p>
                        </div>
                        <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                          <small>Learn more</small>
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
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Tabs defaultValue="outside" className="hidden">
            <TabsList>
              <TabsTrigger value="outside">Tashqi reklamalar</TabsTrigger>
              <TabsTrigger value="inside">Tayyorlash & Ishlab chiqarish</TabsTrigger>
              <TabsTrigger value="service3">Dizayn</TabsTrigger>
            </TabsList>
            <div>
              <TabsContent value="outside">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[0].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 bg-popover w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div>
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm mt-1.5">{card.description}</p>
                        </div>
                        <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                          <small>Learn more</small>
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
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="inside">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[1].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div className="space-y-2">
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm">{card.description}</p>
                        </div>
                        <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                          <small>Learn more</small>
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
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="service3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[2].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div className="space-y-2">
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm">{card.description}</p>
                        </div>
                        <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                          <small>Learn more</small>
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
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>

          <Testimonials />
          <BuiltUsingTools />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Services;
