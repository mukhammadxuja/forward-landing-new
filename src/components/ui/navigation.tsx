'use client';

import Link from 'next/link';
import * as React from 'react';

import { usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import LaunchUI from '../logos/launch-ui';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu';

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
    subItems?: { title: string; href: string; description?: string }[];
  }[];
}

export default function Navigation({
  components = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description: 'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description: 'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ],
  logo = <LaunchUI />,
  logoTitle = 'Launch UI',
  logoDescription = 'Landing page template built with React, Shadcn/ui and Tailwind that you can copy/paste into your project.',
  logoHref = 'https://www.launchuicomponents.com/',
}: NavigationProps) {
  const t = useTranslations('navbar');
  const tIntro = useTranslations('navbar.introItems');
  const pathname = usePathname();

  console.log('Navigation pathname:', pathname);

  const menuItems = [
    {
      title: t('service'),
      content: 'default',
    },
    {
      title: t('company'),
      isLink: true,
      href: '/about',
    },
    {
      title: t('portfolio'),
      isLink: true,
      href: '/portfolio',
    },
    {
      title: t('price'),
      isLink: true,
      href: '/price',
    },
    {
      title: t('contact'),
      isLink: true,
      href: '/contact',
    },
  ];

  const introItems = [
    {
      title: tIntro('adsTitle'),
      description: tIntro('adsDescription'),
      href: '#',
      subItems: [
        {
          title: tIntro('ads.ledMonitorlar.title'),
          description: tIntro('ads.ledMonitorlar.description'),
          href: '/services/led-monitorlar',
        },
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
          title: tIntro('ads.billboardlar.title'),
          description: tIntro('ads.billboardlar.description'),
          href: '/services/billboardlar',
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
          new: true,
        },
      ],
    },
  ];
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={`lg:text-base hover:text-primary active:text-primary hover:!bg-accent ${pathname === item.href ? 'text-primary bg-accent' : ''}`}
                asChild
              >
                <Link href={item.href || ''} className={navigationMenuTriggerStyle()}>
                  {item.title}
                </Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger className={`lg:text-base hover:text-primary active:text-primary hover:!bg-accent ${pathname.includes('services') ? 'text-primary bg-accent' : ''}`}>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === 'default' ? (
                    <ul className="grid gap-3 p-4 md:w-[700px] lg:w-[900px] lg:grid-cols-3">
                      {introItems.map((intro, i) => (
                        <li key={i}>
                          <h5 className="px-2 text-sm">{intro.title}</h5>
                          <ul className="mt-2 space-y-1 text-sm">
                            {intro.subItems?.map((sub, subIdx) => (
                              <ListItem
                                key={subIdx}
                                href={sub.href}
                                title={sub.title}
                                className={`hover:!bg-accent ${pathname === sub.href ? 'text-primary bg-accent' : ''}`}
                              >
                                {sub.description}
                              </ListItem>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  ) : item.content === 'components' ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ className, title, children, ...props }: React.ComponentProps<'a'> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            'hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary block space-y-1 rounded-sm px-3 py-2 leading-none no-underline outline-hidden transition-colors select-none',
            className,
          )}
          {...props}
        >
          <div className="text-sm lg:text-base leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs lg:text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
