import { Box, Wallpaper } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

function Services() {
  const t = useTranslations('IndexPage.services');
  return (
    <div className="">
      <h4 className="section-title mb-8 lg:mb-12">{t('title')}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative min-h-44 col-span-1 lg:col-span-2 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7">
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/service/texnika.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-40"></div>
          <span className="absolute bottom-6 z-20 text-xl font-semibold leading-6 text-white">
            {t('service1Description')}
          </span>
        </div>

        <div className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4 lg:space-y-6">
            <Wallpaper className="text-4xl text-primary" />
            <div className="space-y-2">
              <span className="text-xl font-medium">{t('service2Title')}</span>
              <p className="paragraph-sm pr-2">{t('service2Description')}</p>
            </div>
            <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
              <small>{t('more')}</small>
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
        </div>

        <div className="relative col-span-1 lg:col-span-2 row-span-2 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full h-[25rem] md:h-[30rem] rounded-2xl">
          <span className="absolute top-5 lg:top-8 left-1/2 -translate-x-1/2 text-center text-lg md:text-xl font-semibold leading-6">
            {t('service3Description')}
          </span>
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[17rem] md:w-[22rem] h-auto"
            src="/assets/service/services1.gif"
            alt="service gif"
          />
        </div>

        <div className="relative min-h-44 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full h-full rounded-2xl p-6 lg:p-7 group cursor-pointer">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4 lg:space-y-6">
            <Box className="text-4xl text-primary" />
            <div className="space-y-2">
              <span className="text-xl font-medium">{t('service4Title')}</span>
              <p className="paragraph-sm pr-2">{t('service4Description')}</p>
            </div>
            <div className="flex items-center gap-2 group-hover:ml-1 duration-300">
              <small>{t('more')}</small>
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
        </div>

        <div className="relative min-h-44 col-span-1 lg:col-span-2 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7">
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/service/3d-letter.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-40"></div>
          <span className="absolute bottom-6 z-20 text-xl font-semibold leading-6 text-white">
            {t('service5Title')}
          </span>
        </div>
      </div>
      <Link href={'/services'} className="flex items-center justify-center w-full mt-4 md:mt-8">
        <Button variant="secondary">{t('button')}</Button>
      </Link>
    </div>
  );
}

export default Services;
