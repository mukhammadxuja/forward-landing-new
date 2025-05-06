'use client';

import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
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
  menuItems = [
    {
      title: 'Services',
      content: 'default',
    },
    // {
    //   title: 'Services',
    //   content: 'components',
    // },
    {
      title: 'Company',
      isLink: true,
      href: '/about',
    },
    {
      title: 'Portfolio',
      isLink: true,
      href: '/portfolio',
    },
    {
      title: 'Price',
      isLink: true,
      href: '/price',
    },
    {
      title: 'Contact',
      isLink: true,
      href: '/contact',
    },
  ],
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
  introItems = [
    {
      title: 'Tashqi reklama',
      description: 'How to install dependencies and structure your app.',
      href: '#',
      subItems: [
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
      description: 'UI components and variants',
      href: '#',
      subItems: [
        {
          title: "Bo'rtma harflar",
          description: "Yonadigan, bo'rtma harflar tayyorlash va o'rnatib berish",
          href: '/services/bortma-harflar',
        },
        {
          title: 'Stella',
          description: "Yo'l chetida va ofislar yonida turadigan stellalarni tayyorlash va o'rnatish hizmati",
          href: '/services/stella',
        },
        {
          title: 'Banner chop etish',
          description: "Bannerlar va orakallarni chop etish va uni o'rnatib berish xizmati",
          href: '/services/banner-chop-etish',
        },
      ],
    },
    {
      title: 'Service 3',
      description: 'Styling basics and layout',
      href: '#',
      subItems: [
        { title: '', description: '', href: '#' },
        { title: '', description: '', href: '#' },
        { title: '', description: '', href: '#' },
        { title: '', description: '', href: '#' },
      ],
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink asChild>
                <Link href={item.href || ''} className={navigationMenuTriggerStyle()}>
                  {item.title}
                </Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === 'default' ? (
                    <ul className="grid gap-3 p-4 md:w-[700px] lg:w-[900px] lg:grid-cols-3">
                      {introItems.map((intro, i) => (
                        <li key={i}>
                          <h5 className="px-2 text-sm">{intro.title}</h5>
                          <ul className="mt-2 space-y-1 text-sm">
                            {intro.subItems?.map((sub, subIdx) => (
                              <ListItem key={subIdx} href={sub.href} title={sub.title}>
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
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md px-3 py-2 leading-none no-underline outline-hidden transition-colors select-none',
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
