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
import { BuiltUsingTools } from '@/components/home/footer/built-using-tools';
import Testimonials from '@/components/home/testimonial';
import useServices from '@/hooks/useServices';
import { Flag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCursorGlow } from '@/hooks/useCursorPosition';

function Services() {
  const breadcrumbT = useTranslations('breadcrumb');
  const { position, handleMouseMove } = useCursorGlow();

  const services = useServices();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: 'beforeChildren',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="spacey-y-4 lg:space-y-6 px-4 lg:px-0">
      <div className="mx-auto max-w-7xl px-[32px] lg:px-4 relative spacey-y-4 lg:space-y-6 py-8 lg:py-10">
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
        <motion.div className="space-y-[24px] mt-3 lg:mt-0">
          {/* Title */}
          <motion.h4
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Level-up your design game, today
          </motion.h4>

          {/* Paragraph */}
          <motion.p
            className="text-foreground-secondary text-[16px] tracking-[-.01em] leading-[24px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Get lifetime access to all the blocks and templates, plus any new content that will be added in the future.
            <br />
            No recurring fees, no false scarcity, no fake discounts. Just simple, transparent pricing.
          </motion.p>

          {/* Services container with stagger */}
          <motion.div className="!mt-8 md:!mt-12" initial="hidden" animate="visible" variants={containerVariants}>
            {services.map((service, idx) => (
              <motion.div key={idx} variants={serviceVariants} className="mb-12">
                <motion.h5 className="section-title !text-[28px] my-8" variants={titleVariants}>
                  {service.title}
                </motion.h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.cards.map((card, cidx) => (
                    <Link key={cidx} href={card.href} passHref>
                      <motion.div
                        variants={cardVariants}
                        className="relative group overflow-hidden cursor-pointer min-h-44 border border-accent bg-accent/50 backdrop-blur-lg shadow-sm rounded-2xl w-full p-6 lg:p-7"
                        onMouseMove={handleMouseMove}
                      >
                        <div
                          className="absolute inset-0 z-0 opacity-0 h-full group-hover:opacity-100 transition duration-300 pointer-events-none rounded-2xl"
                          style={{
                            backgroundImage: `radial-gradient(200px circle at ${position.x} ${position.y}, rgba(5, 241, 99, 0.40) 0%, transparent 70%)`,
                          }}
                        />
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
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Testimonials />
          <BuiltUsingTools />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
