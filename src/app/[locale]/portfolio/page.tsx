'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import Link from 'next/link';

import Contact from '@/components/home/contact';
import FAQ from '@/components/home/faq';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Testimonials from '@/components/home/testimonial';
import Image from 'next/image';
import { useState } from 'react';
import { services } from '../../../../public/assets/data';

const projects = [
  {
    id: 1,
    title: 'Beeline Billboard',
    location: 'Toshkent, Chilonzor',
    size: '3x6m',
    type: 'LED',
    date: '2024-12-10',
    client: 'Beeline Uzbekistan',
    imageUrl: '/assets/billboards/1.png',
  },
  {
    id: 2,
    title: 'Coca-Cola Banner',
    location: 'Samarqand markazi',
    size: '4x12m',
    type: 'Statik',
    date: '2025-02-15',
    client: 'Coca-Cola',
    imageUrl: '/assets/billboards/1.png',
  },
];

function PortfolioPage() {
  const allServices = services.flatMap((category) =>
    category.cards.map((service) => ({
      ...service,
      title: category.title,
    })),
  );

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  interface ModalState {
    isOpen: boolean;
    images: string[];
    current: number;
  }

  const [modal, setModal] = useState<ModalState>({ isOpen: false, images: [], current: 0 });

  const openModal = (images: string[], index: number): void => {
    setModal({ isOpen: true, images, current: index });
  };

  const closeModal = () => setModal({ isOpen: false, images: [], current: 0 });

  const nextImage = () =>
    setModal((prev) => ({
      ...prev,
      current: (prev.current + 1) % prev.images.length,
    }));

  const prevImage = () =>
    setModal((prev) => ({
      ...prev,
      current: (prev.current - 1 + prev.images.length) % prev.images.length,
    }));

  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-4 lg:py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Portfolio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-[24px] mt-3 lg:mt-0">
          <h4 className="section-title">Level-up your design game, today</h4>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Get lifetime access to all the blocks and templates, plus any new content that will be added in the future.{' '}
            <br /> No recurring fees, no false scarcity, no fake discounts. Just simple, transparent pricing.
          </p>
        </div>
        <div>
          {services.map((service, idx) => (
            <div key={idx}>
              <div>
                <h5 className="section-title !text-[28px] my-8">{service.title}</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {service.cards.map((card, idx) => (
                    <div key={idx} className={idx < 2 ? 'col-span-2' : ''}>
                      <div
                        className="cursor-pointer"
                        onClick={() => openModal(card.images?.gallery || [], 0)}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        <Image
                          src={card.images?.image || '/assets/billboards/1.png'}
                          alt={card.title}
                          width={500}
                          height={500}
                          className="w-full h-72 object-cover rounded-xl"
                        />
                      </div>
                      <div className=" mt-2">
                        <h2 className="text-base font-semibold">{card.title}</h2>
                        <p className="text-sm  text-foreground/80 mt-2">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {modal.isOpen && (
          <div className="fixed inset-0 h-screen bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-[10003]">
            <button className="absolute cursor-pointer top-5 right-5 text-white text-3xl" onClick={closeModal}>
              &times;
            </button>
            <button onClick={prevImage} className="absolute cursor-pointer left-4 lg:left-8 text-white text-4xl">
              &#10094;
            </button>
            <Image
              src={modal.images[modal.current]}
              alt="Gallery"
              width={800}
              height={600}
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-2xl"
            />
            <button onClick={nextImage} className="absolute cursor-pointer right-4 lg:rights-8 text-white text-4xl">
              &#10095;
            </button>
          </div>
        )}

        <Testimonials />
        <FAQ />
        <BuiltUsingTools />
        <Contact />
      </div>
    </div>
  );
}

export default PortfolioPage;
