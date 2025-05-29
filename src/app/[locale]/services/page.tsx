'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Link from 'next/link';

import Contact from '@/components/home/contact';
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Testimonials from '@/components/home/testimonial';
import useServices from '@/hooks/useServices';
import { Flag } from 'lucide-react';
import { useTranslations } from 'next-intl';

function Services() {
  const breadcrumbT = useTranslations('breadcrumb');

  const services = useServices();
  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-6 lg:py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{breadcrumbT('home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbT('services')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="space-y-[24px] mt-3 lg:mt-0">
          <h4 className="section-title">Level-up your design game, today</h4>
          <p className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]">
            Get lifetime access to all the blocks and templates, plus any new content that will be added in the future.{' '}
            <br /> No recurring fees, no false scarcity, no fake discounts. Just simple, transparent pricing.
          </p>

          <div className="!mt-8 md:!mt-12">
            {services.map((service, idx) => (
              <div key={idx}>
                <h5 className="section-title !text-[28px] my-8">{service.title}</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.cards.map((card, idx) => (
                    <Link
                      href={card.href}
                      key={idx}
                      className="relative group cursor-pointer min-h-44 bg-popover w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div>
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm mt-1.5">{card.description}</p>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Tabs defaultValue="outside" className="hidden">
            <TabsList>
              <TabsTrigger value="outside">Tashqi reklamalar</TabsTrigger>
              <TabsTrigger value="inside">Tayyorlash & Ishlab chiqarish</TabsTrigger>
              <TabsTrigger value="service3">Dizayn</TabsTrigger>
            </TabsList>
            <div>
              <TabsContent value="outside">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[0].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 bg-popover w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div>
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm mt-1.5">{card.description}</p>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="inside">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[1].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div className="space-y-2">
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm">{card.description}</p>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="service3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 md:!pt-8 pb-12">
                  {services[2].cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7"
                    >
                      <div className="space-y-4 lg:space-y-6">
                        <Flag className="text-4xl text-primary" />
                        <div className="space-y-2">
                          <span className="text-xl font-medium">{card.title}</span>
                          <p className="paragraph-sm">{card.description}</p>
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>

          <Testimonials />
          <BuiltUsingTools />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Services;
