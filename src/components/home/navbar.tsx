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
import { useTranslations } from 'next-intl';
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

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Блог', href: '/blog' },
  { label: 'Цены', href: '/price' },
  { label: 'Контакты', href: '/contact' },
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

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <nav className={cn('sticky top-0 z-[10001] -mb-4', className)}>
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4">
        <div className="fade-bottom absolute left-0 h-20 w-full bg-background/40 backdrop-blur-lg"></div>
        <div className="max-w-container relative mx-auto">
          <NavbarComponent>
            <NavbarLeft>
              <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                {/* {logo} */}
                {name}
              </a>
              {showNavigation && (customNavigation || <Navigation />)}
            </NavbarLeft>
            <NavbarRight>
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Image
                      className="cursor-pointer"
                      src={'/assets/icons/localization-icon.svg'}
                      alt={'Localization Icon'}
                      width={50}
                      height={50}
                    />
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
                  <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overflow-y-auto">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                      <span>{name}</span>
                    </a>
                    <div>
                      <h4 className="text-sm font-medium mb-3 text-foreground">О компании</h4>
                      <ul className="space-y-1">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-foreground">{service.title}</h4>
                          <ul className="space-y-1">
                            {service.cards.map((item) => (
                              <li className="">
                                <Link
                                  href={item.href}
                                  className="text-neutral-500 hover:text-foreground/80 duration-300 text-sm"
                                >
                                  {item.title}
                                </Link>
                                {item?.new && <Badge className="ml-1.5 py-0.5 px-1.5 !text-xs">Новое</Badge>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-3 text-foreground">Соцсети</p>
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
