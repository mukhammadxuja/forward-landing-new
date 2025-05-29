// components/Footer.tsx
import { Brain, Instagram, Mail, SendIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const services = [
  {
    id: 1,
    title: 'Tashqi reklama',
    icon: Brain,
    cards: [
      {
        title: 'Brendmourlar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlarida joylashgan brendmourlar",
        href: '/services/brendmourlar',
      },
      {
        title: 'Katta harflar',
        description: "Jizzax shahrining ko'ringan bino-devorlari va tomlari ustida katta hajmdagi harflar",
        href: '/services/katta-harflar',
      },
      {
        title: 'City Box',
        description: "Jizzax shahrining asosiy ko'chalarida 50 dan ortiq city boxlar",
        href: '/services/city-box',
      },
      {
        title: 'Avtovbus',
        description: "Jzzax shahar va shaharlararo avtobus yo'nalishlarida reklama o'rnaish",
        href: '/services/avtobus',
      },
      {
        title: 'Billboardlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq billboardlar',
        href: '/services/billboardlar',
      },
      {
        title: 'LED monitorlar',
        description: 'Jizzax shahar va tuman markazlarida 100 dan ortiq LED monitorlar',
        href: '/services/led-monitorlar',
      },
    ],
  },
  {
    id: 2,
    title: 'Tayyorlash & Ishlab chiqarish',
    icon: Brain,
    cards: [
      {
        title: "Bo'rtma harflar",
        description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
        href: '/services/bortma-harflar',
      },
      {
        title: 'Stella',
        description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
        href: '/services/stella',
        new: true,
      },
      {
        title: 'Banner chop etish',
        description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
        href: '/services/banner-chop-etish',
      },
      {
        title: "Bo'rtma harflar",
        description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
        href: '/services/bortma-harflar',
      },
      {
        title: 'Stella',
        description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
        href: '/services/stella',
        new: true,
      },
      {
        title: 'Banner chop etish',
        description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
        href: '/services/banner-chop-etish',
      },
    ],
  },
  {
    id: 3,
    title: 'Implementation',
    icon: Brain,
    cards: [
      { title: 'Web sayt yaratish', description: 'Description X', href: '/services/stella' },
      { title: 'Машино-места', description: 'Description Y', href: '/services/stella' },
      { title: 'Кладовые', description: 'Description Z', href: '/services/stella' },
      { title: 'Аренда квартир', description: 'Description W', href: '/services/stella' },
      { title: 'Аукционы недвижимости', description: 'Description V', href: '/services/stella' },
    ],
  },
];

export default function Footer2() {
  const t = useTranslations('footer');
  const tIntro = useTranslations('navbar.introItems');

  const navLinks = [
    { label: t('navLinks.home'), href: '/' },
    { label: t('navLinks.about'), href: '/about' },
    { label: t('navLinks.portfolio'), href: '/portfolio' },
    { label: t('navLinks.blog'), href: '/blog' },
    { label: t('navLinks.pricing'), href: '/price' },
    { label: t('navLinks.contact'), href: '/contact' },
  ];

  const introItems = [
    {
      title: tIntro('adsTitle'),
      description: tIntro('adsDescription'),
      href: '#',
      subItems: [
        {
          title: tIntro('ads.brendmourlar.title'),
          description: tIntro('ads.brendmourlar.description'),
          href: '/services/brendmourlar',
        },
        {
          title: tIntro('ads.kattaHarflar.title'),
          description: tIntro('ads.kattaHarflar.description'),
          href: '/services/katta-harflar',
        },
        {
          title: tIntro('ads.cityBox.title'),
          description: tIntro('ads.cityBox.description'),
          href: '/services/city-box',
        },
        {
          title: tIntro('ads.avtobus.title'),
          description: tIntro('ads.avtobus.description'),
          href: '/services/avtobus',
        },
        {
          title: tIntro('ads.billboardlar.title'),
          description: tIntro('ads.billboardlar.description'),
          href: '/services/billboardlar',
        },
        {
          title: tIntro('ads.ledMonitorlar.title'),
          description: tIntro('ads.ledMonitorlar.description'),
          href: '/services/led-monitorlar',
        },
      ],
    },
    {
      title: tIntro('productionTitle'),
      description: tIntro('productionDescription'),
      href: '#',
      subItems: [
        {
          title: tIntro('production.bortmaHarflar.title'),
          description: tIntro('production.bortmaHarflar.description'),
          href: '/services/bortma-harflar',
        },
        {
          title: tIntro('production.stella.title'),
          description: tIntro('production.stella.description'),
          href: '/services/stella',
        },
        {
          title: tIntro('production.bannerChop.title'),
          description: tIntro('production.bannerChop.description'),
          href: '/services/banner-chop-etish',
        },
        {
          title: tIntro('production.tablichki.title'),
          description: tIntro('production.tablichki.description'),
          href: '/services/tablichkalar',
        },
        {
          title: tIntro('production.mantaj.title'),
          description: tIntro('production.mantaj.description'),
          href: '/services/montaj-xizmati',
        },
      ],
    },
    {
      title: tIntro('designTitle'),
      description: tIntro('designDescription'),
      href: '#',
      subItems: [
        {
          title: tIntro('design.naming.title'),
          description: tIntro('design.naming.description'),
          href: '/services/naming',
        },
        {
          title: tIntro('design.branding.title'),
          description: tIntro('design.branding.description'),
          href: '/services/branding',
        },
        {
          title: tIntro('design.packaging.title'),
          description: tIntro('design.packaging.description'),
          href: '/services/packaging',
        },
        {
          title: tIntro('design.smd.title'),
          description: tIntro('design.smd.description'),
          href: '/services/smd',
        },
        {
          title: tIntro('design.web-sayt.title'),
          description: tIntro('design.web-sayt.description'),
          href: '/services/web-sayt',
        },
      ],
    },
  ];

  return (
    <>
      <Separator className={'footer-border'} />
      <footer className="bg-card text-sm text-neutral-800 border-t">
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column */}
          <div className="space-y-6 lg:space-y-8 mr-10 lg:mr-0">
            <div>
              <p className="mb-2 lg:mb-3 font-medium text-foreground">{t('ourPartners')}</p>
              <Image src="/dotsoft.webp" alt="Самолет" width={70} height={70} />
            </div>
            <div className="py-2 border-t border-border">
              <p className="mb-2 lg:mb-3 font-medium text-foreground">{t('questions')}</p>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-accent hover:bg-accent/80 text-primary min-w-44 rounded-full text-xs"
                >
                  {t('contactUs')}
                </Button>
              </Link>
            </div>
            <p className="text-neutral-500 text-xs">{t('about')}</p>

            {/* Social icons */}
            <div>
              <p className="mb-2 lg:mb-3 text-foreground font-medium">{t('socials')}</p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <SendIcon className="w-full h-full" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <Instagram className="w-full h-full" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary p-2 rounded-full"
                >
                  <Mail className="w-full h-full" />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle columns */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {introItems.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-3 text-foreground">{item.title}</h4>
                <ul className="space-y-1 lg:space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="">
                      <Link
                        href={subItem.href}
                        className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">{t('linksTitle')}</h4>
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 border-t py-4 flex items-center justify-center lg:justify-between">
          <div className="hidden lg:block">
            <Image src="/assets/logos/logo-desc.svg" alt="Forward logo" width={150} height={80} />
          </div>
          <div className="text-xs text-center text-neutral-400">
            © {new Date().getFullYear()} {t('copyright')}
          </div>
        </div>
      </footer>
    </>
  );
}
