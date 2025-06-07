// components/Footer.tsx
import { Instagram, Mail, SendIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

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
          new: false,
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
          new: true,
        },
      ],
    },
  ];

  return (
    <>
      <Separator className={'footer-border'} />
      <footer className="bg-neutral-950 text-sm text-neutral-800 border-t">
        <div className="mx-auto max-w-7xl px-[32px] lg:px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column */}
          <div className="space-y-6 lg:space-y-8 mr-10 lg:mr-0">
            <div>
              <p className="mb-2 lg:mb-3 font-medium text-foreground">{t('ourPartners')}</p>
              <a href="http://dotsoft.uz" target="_blank" rel="noopener noreferrer">
                <Image src="/dotsoft.webp" alt="Dotsoft logo" width={70} height={70} />
              </a>
            </div>
            <div className="py-2 border-t border-border">
              <p className="mb-2 lg:mb-3 font-medium text-foreground">{t('questions')}</p>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-accent font-normal hover:bg-accent/80 hover:!text-primary min-w-44 rounded-full !text-xs"
                >
                  {t('contactUs')}
                </Button>
              </Link>
            </div>
            <p className="text-neutral-300 text-xs">{t('about')}</p>

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
                      <Link href={subItem.href} className="text-neutral-300 hover:text-primary duration-300 text-sm">
                        {subItem.title}
                      </Link>
                      {subItem?.new && <Badge className="ml-1.5 py-0.5 px-1.5 !text-xs">{t('new')}</Badge>}
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
                  <Link href={link.href} className="text-neutral-300 hover:text-primary duration-300 text-sm">
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
          <div className="text-xs text-center text-neutral-300">
            © {new Date().getFullYear()} {t('copyright')}
          </div>
        </div>
      </footer>
    </>
  );
}
