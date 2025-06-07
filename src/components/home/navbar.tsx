'use client';
import { Button, type ButtonProps } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from '@/components/ui/navbar';
import Navigation from '@/components/ui/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Brain, Instagram, Mail, Menu, SendIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, startTransition } from 'react';
import { Badge } from '../ui/badge';

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps['variant'];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

const services = [
  {
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

export default function Navbar({
  //   logo = 'Launch UI',
  name = 'Launch UI',
  homeUrl = siteConfig.url,
  mobileLinks = [
    { text: 'Getting Started', href: siteConfig.url },
    { text: 'Components', href: siteConfig.url },
    { text: 'Documentation', href: siteConfig.url },
  ],
  actions = [
    { text: 'Sign in', href: siteConfig.url, isButton: false },
    {
      text: 'Get Started',
      href: siteConfig.url,
      isButton: true,
      variant: 'default',
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  const t = useTranslations('navbar');
  const router = useRouter();
  const locale = useLocale();
  const tFooter = useTranslations('footer');
  const tIntro = useTranslations('navbar.introItems');

  const navLinks = [
    { label: tFooter('navLinks.home'), href: '/' },
    { label: tFooter('navLinks.about'), href: '/about' },
    { label: tFooter('navLinks.portfolio'), href: '/portfolio' },
    { label: tFooter('navLinks.blog'), href: '/blog' },
    { label: tFooter('navLinks.pricing'), href: '/price' },
    { label: tFooter('navLinks.contact'), href: '/contact' },
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
          new: false,
        },
        {
          title: tIntro('ads.kattaHarflar.title'),
          description: tIntro('ads.kattaHarflar.description'),
          href: '/services/katta-harflar',
          new: false,
        },
        {
          title: tIntro('ads.cityBox.title'),
          description: tIntro('ads.cityBox.description'),
          href: '/services/city-box',
          new: true,
        },
        {
          title: tIntro('ads.avtobus.title'),
          description: tIntro('ads.avtobus.description'),
          href: '/services/avtobus',
          new: false,
        },
        {
          title: tIntro('ads.billboardlar.title'),
          description: tIntro('ads.billboardlar.description'),
          href: '/services/billboardlar',
          new: false,
        },
        {
          title: tIntro('ads.ledMonitorlar.title'),
          description: tIntro('ads.ledMonitorlar.description'),
          href: '/services/led-monitorlar',
          new: false,
        },
      ],
    },
    {
      title: tIntro('productionTitle'),
      description: tIntro('productionDescription'),
      href: '#',
      new: false,
      subItems: [
        {
          title: tIntro('production.bortmaHarflar.title'),
          description: tIntro('production.bortmaHarflar.description'),
          href: '/services/bortma-harflar',
          new: false,
        },
        {
          title: tIntro('production.stella.title'),
          description: tIntro('production.stella.description'),
          href: '/services/stella',
          new: false,
        },
        {
          title: tIntro('production.bannerChop.title'),
          description: tIntro('production.bannerChop.description'),
          href: '/services/banner-chop-etish',
          new: false,
        },
        {
          title: tIntro('production.tablichki.title'),
          description: tIntro('production.tablichki.description'),
          href: '/services/tablichkalar',
          new: false,
        },
        {
          title: tIntro('production.mantaj.title'),
          description: tIntro('production.mantaj.description'),
          href: '/services/montaj-xizmati',
          new: true,
        },
      ],
    },
    {
      title: tIntro('designTitle'),
      description: tIntro('designDescription'),
      href: '#',
      new: false,
      subItems: [
        {
          title: tIntro('design.naming.title'),
          description: tIntro('design.naming.description'),
          href: '/services/naming',
          new: false,
        },
        {
          title: tIntro('design.branding.title'),
          description: tIntro('design.branding.description'),
          href: '/services/branding',
          new: false,
        },
        {
          title: tIntro('design.packaging.title'),
          description: tIntro('design.packaging.description'),
          href: '/services/packaging',
          new: false,
        },
        {
          title: tIntro('design.smd.title'),
          description: tIntro('design.smd.description'),
          href: '/services/smd',
          new: false,
        },
        {
          title: tIntro('design.web-sayt.title'),
          description: tIntro('design.web-sayt.description'),
          href: '/services/web-sayt',
          new: false,
        },
      ],
    },
  ];

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const getFlagIcon = (locale: string) => {
    switch (locale) {
      case 'uz':
        return '/assets/flags/uzb.png';
      case 'ru':
        return '/assets/flags/russia.svg';
      case 'en':
        return '/assets/flags/england.png';
      default:
        return '/assets/icons/localization-icon.svg';
    }
  };

  return (
    <nav className={cn('sticky top-0 z-[10001] -mb-4', className)}>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4">
        <div className="fade-bottom absolute left-0 h-20 w-full border-b border-border bg-background/40 backdrop-blur-lg"></div>
        <div className="max-w-container relative mx-auto">
          <NavbarComponent>
            <NavbarLeft>
              <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                <Image src={'/assets/logos/logo.svg'} alt={'logo'} width={120} height={80} />
              </Link>
              {showNavigation && (customNavigation || <Navigation />)}
            </NavbarLeft>
            <NavbarRight>
              <div className="flex items-center gap-2 lg:gap-4">
                <Button
                  variant="secondary"
                  className="relative rounded-full transition-transform duration-300 transform hover:scale-[1.02] overflow-hidden hover:!text-primary"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    <a href="tel:+998901234567" className="text-sm font-medium lg:text-lg lg:font-semibold">
                      +99891 209 33 33
                    </a>
                  </span>

                  <span
                    className="
      absolute w-56 h-56 rounded-full p-[2px]
      before:absolute before:inset-0 before:rounded-full before:border-[4px] before:border-transparent
      before:bg-[conic-gradient(from_0deg,#14ff5a,#1a3d3d,#223939,#14ff5a)]
      before:content-['']
      before:z-0
      animate-spin-slow before:transform
    "
                  ></span>

                  <span className="absolute inset-[2px] rounded-full bg-accent z-[1]"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="w-fit h-fit p-1 rounded-full">
                      <Image
                        className="cursor-pointer h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]"
                        src={getFlagIcon(locale)}
                        alt={'Localization Icon'}
                        width={35}
                        height={35}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onSelectChange('uz')} className="flex items-center gap-2">
                      <Image alt="logo" src="/assets/flags/uzb.png" width={14} height={14} />
                      <span className="text-sm font-medium">O&apos;zbekcha</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSelectChange('ru')} className="flex items-center gap-2">
                      <Image alt="logo" src="/assets/flags/russia.svg" width={14} height={14} />
                      <span className="text-sm font-medium">Русский</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onSelectChange('en')} className="flex items-center gap-2">
                      <Image alt="logo" src="/assets/flags/england.png" width={14} height={14} />
                      <span className="text-sm font-medium">English</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="-ml-2 lg:ml-0 shrink-0 md:hidden">
                    <Menu className="size-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overflow-y-auto">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link href={homeUrl}>
                      <Image src={'/assets/logos/logo.svg'} alt={'logo'} width={120} height={80} />
                    </Link>
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-foreground">{tFooter('linksTitle')}</h4>
                      <ul className="space-y-1">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="text-neutral-300 hover:text-primary duration-300 text-sm">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      {introItems.map((service, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm font-medium mb-3 text-foreground">{service.title}</h4>
                          <ul className="space-y-1">
                            {service.subItems.map((item, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  href={item.href}
                                  className="text-neutral-300 hover:text-primary duration-300 text-sm"
                                >
                                  {item.title}
                                </Link>
                                {item?.new && <Badge className="ml-1.5 py-0.5 px-1.5 !text-xs">{tFooter('new')}</Badge>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Button size="sm" variant="secondary" className="rounded-full w-full">
                        <a href="tel:+998901234567" className="text-sm font-medium lg:text-lg lg:font-semibold">
                          +99891 209 33 33
                        </a>
                      </Button>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-3 text-foreground">{tFooter('socials')}</p>
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
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </div>
    </nav>
  );
}
