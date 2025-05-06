'use client';

import { Flag } from 'lucide-react';
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

export default function HowWeWork() {
  return (
    <section className="py-16 bg-card mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How we work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative flex flex-col lg:flex-row lg:col-span-2 group min-h-60 bg-popover w-full rounded-2xl overflow-hidden">
            <div className="w-1/2 space-y-4 lg:space-y-6 p-6 lg:p-7">
              <Flag className="text-4xl text-primary" />
              <div>
                <span className="text-xl font-medium">Trade-in</span>
                <p className="paragraph-sm mt-1.5">Продажа сырья для широкоформатной печати</p>
              </div>
              <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                <small>Learn more</small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>

            <div className="w-1/2">
              <Image
                src={'/assets/service/texnika.jpg'}
                width={200}
                height={200}
                className="w-full h-full object-cover p-1 rounded-2xl"
                alt="service gif"
              />
            </div>
          </div>

          <div className="relative flex flex-col group min-h-60 bg-popover w-full rounded-2xl overflow-hidden">
            <div className="space-y-4 lg:space-y-6 p-6 lg:p-7">
              <Flag className="text-4xl text-primary" />
              <div>
                <span className="text-xl font-medium">Trade-in</span>
                <p className="paragraph-sm mt-1.5">Продажа сырья для широкоформатной печати</p>
              </div>
              <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                <small>Learn more</small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
            <Image
              src={'/assets/service/texnika.jpg'}
              width={200}
              height={200}
              className="w-full h-full object-cover p-1 rounded-2xl"
              alt="service gif"
            />
          </div>
          <div className="relative flex flex-col group min-h-60 bg-popover w-full rounded-2xl overflow-hidden">
            <div className="space-y-4 lg:space-y-6 p-6 lg:p-7">
              <Flag className="text-4xl text-primary" />
              <div>
                <span className="text-xl font-medium">Trade-in</span>
                <p className="paragraph-sm mt-1.5">Продажа сырья для широкоформатной печати</p>
              </div>
              <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
                <small>Learn more</small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
            <Image
              src={'/assets/service/texnika.jpg'}
              width={200}
              height={200}
              className="w-full h-full object-cover p-1 rounded-2xl"
              alt="service gif"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
