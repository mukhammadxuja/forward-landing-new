'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'LED Billboard – Tashkent City',
    image: '/assets/service/texnika.jpg',
    description: 'Yorqin LED reklama Tashkent shahrining markazida o‘rnatilgan.',
  },
  {
    id: 2,
    title: 'Banner – Business Center',
    image: '/assets/service/texnika.jpg',
    description: 'Katta banner biznes markazining oldida joylashtirilgan.',
  },
  {
    id: 3,
    title: '3D Billboard – Shopping Mall',
    image: '/assets/service/texnika.jpg',
    description: '3D dizaynli reklama banneri savdo markazi uchun tayyorlangan.',
  },
  {
    id: 4,
    title: 'Static Billboard – Metro Exit',
    image: '/assets/service/texnika.jpg',
    description: 'Doimiy reklama metro chiqish qismida o‘rnatilgan.',
  },
  {
    id: 5,
    title: 'Backlight Banner – Airport',
    image: '/assets/service/texnika.jpg',
    description: 'Orqa yorug‘likli banner aeroportga joylashtirilgan.',
  },
];

export default function PortfolioSection({ className }: { className?: string }) {
  return (
    <section className={`py-16 bg-card mb-10 ${className}`}>
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="section-title mb-8 lg:mb-12">Portfolio</h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden rounded-2xl shadow-md h-full bg-background flex flex-col">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover p-1 rounded-lg"
                    />
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-auto">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md-block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
