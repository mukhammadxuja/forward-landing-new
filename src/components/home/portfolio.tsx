'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'Billboard – R-37, Jizzax shahri',
    image: '/assets/portfolio/all/2.jpg',
    description: 'R-37 yo‘li bo‘yida joylashgan katta reklama banneri.',
  },
  {
    id: 2,
    title: 'Banner – Orom bozori, Jizzax shahri',
    image: '/assets/portfolio/all/6.jpg',
    description: 'Orom bozori hududida joylashgan reklama banneri.',
  },
  {
    id: 4,
    title: 'Billboard – Jizzax shahri',
    image: '/assets/portfolio/all/14.jpg',
    description: 'Jizzax shahri markazida joylashgan katta reklama banneri.',
  },
  {
    id: 5,
    title: 'Billboard – Jizzax shahri',
    image: '/assets/portfolio/all/16.jpg',
    description: 'Jizzax shahri markazida joylashgan katta reklama banneri.',
  },
  {
    id: 6,
    title: 'Billboard – Jizzax shahri',
    image: '/assets/portfolio/all/17.jpg',
    description: 'Jizzax shahri markazida joylashgan katta reklama banneri.',
  },
  {
    id: 7,
    title: 'Brendmour – Jizzax shahri',
    image: '/assets/portfolio/all/21.jpg',
    description: 'Jizzax shahri markazida joylashgan katta reklama brendmour.',
  },
  {
    id: 8,
    title: 'Billboard – Jizzax shahri',
    image: '/assets/portfolio/all/25.jpg',
    description: 'Jizzax shahri markazida joylashgan katta reklama billboard.',
  },
  {
    id: 3,
    title: 'Billboard – Orom bozori, Jizzax shahri',
    image: '/assets/portfolio/all/3.jpg',
    description: 'Orom bozori hududida joylashgan katta reklama banneri.',
  },
];

export default function PortfolioSection({ className }: { className?: string }) {
  const t = useTranslations('IndexPage');
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={`py-10 lg:py-16 bg-accent/50 backdrop-blur-lg shadow-sm mb-10 ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="section-title mb-8 lg:mb-12"
        >
          Portfolio
        </motion.h2>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {portfolioItems.map((item, index) => (
              <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-1 h-full"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-md h-full bg-background flex flex-col">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover p-1 rounded-lg"
                    />
                    <CardContent className="hidden px-4 py-2 flex flex-col flex-">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-auto">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <Link href="/portfolio" className="flex items-center justify-center w-full mt-4 md:mt-8">
        <Button variant="secondary">{t('portfolioButton')}</Button>
      </Link>
    </motion.section>
  );
}
