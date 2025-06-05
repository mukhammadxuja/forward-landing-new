'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { motion } from 'framer-motion';

import Link from 'next/link';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import useServices from '@/hooks/useServices';
import { HandCoins, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { billboardData, ServiceCard } from '../../../../../public/assets/data';

const Map = dynamic(() => import('../../../../components/sections/map'), { ssr: false });

function Service() {
  const params = useParams();

  const services = useServices();

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
        'thereMap' in card &&
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
        (card as any)?.thereMap &&
        (card as any)?.seo,
    );

  const service = allCards.find((card) => card.id === params.service);

  if (!service) return notFound();

  const serviceBillboardData = billboardData.filter((item) => item.type === service.id);

  return (
    <div className="spacey-y-4 lg:space-y-6">
      <div className="relative spacey-y-4 lg:space-y-6 py-8 lg:py-10">
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-[24px] mt-3 lg:mt-0"
          >
            <h4 className="section-title max-w-[35rem]">{service.description}</h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-3"
            >
              <Button variant="default">Buyurtma berish</Button>
              <Link href="/contact">
                <Button className="hidden lg:block" variant="secondary">
                  Aloqaga chiqish
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto max-w-7xl px-[32px] lg:px-4 mt-10 lg:mt-20"
          >
            <Image
              width={200}
              height={400}
              className="w-full h-[22rem] lg:h-[35rem] object-cover rounded-2xl"
              src="/assets/service/billboard.avif"
              alt="service gif"
            />

            {/* Afzalliklar */}
            <div className="grid grid-cols-1 md:grid-cols-3 py-10">
              <h4 className="mb-3 lg:mb-0 text-foreground-secondary text-[18px] tracking-[-.01em] leading-[24px] font-medium">
                Xizmatning afzalliklari
              </h4>
              <div className="col-span-2">
                <p className="paragraph">{service?.fullDescription}</p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {(Array.isArray(service?.priceRange) ? service?.priceRange : [service?.priceRange])
                      .filter(Boolean)
                      .map((price, index) => (
                        <Badge key={index} variant="secondary" className="p-3 py-2 gap-2">
                          <HandCoins className="h-4 w-4 lg:h-5 lg:w-5" />
                          <span>{price}</span>
                        </Badge>
                      ))}
                  </div>
                  {service?.quantity && (
                    <Badge variant="secondary" className="p-3 py-2 gap-2">
                      <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                      <span>{service.quantity} ta mavjud</span>
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Map
              mapPage={true}
              billboardData={serviceBillboardData.map((item) => ({ ...item, id: item.id.toString() }))}
            />
          </motion.div>

          <div className="mx-auto max-w-7xl px-[32px] lg:px-4 space-y-[24px]">
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
