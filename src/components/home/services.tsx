import { Brain, Flag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

function Services() {
  return (
    <div className="">
      <h4 className="section-title mb-8 lg:mb-12">Наши услуги</h4>
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
            Продажа сырья для <br /> широкоформатной печати
          </span>
        </div>

        <div className="relative group cursor-pointer min-h-44 col-span-1 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl p-6 lg:p-7">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4 lg:space-y-6">
            <Flag className="text-4xl text-primary" />
            <div className="space-y-2">
              <span className="text-xl font-medium">Trade-in</span>
              <p className="paragraph-sm">Меняем вашу старую квартиру на новую</p>
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
        </div>

        <div className="relative col-span-1 lg:col-span-2 row-span-2 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full h-[25rem] md:h-[30rem] rounded-2xl">
          <span className="absolute top-5 lg:top-8 left-1/2 -translate-x-1/2 text-center text-lg md:text-xl font-semibold leading-6">
            Продажа сырья для широкоформатной печати
          </span>
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[17rem] md:w-[22rem] h-auto"
            src="/assets/service/services1.gif"
            alt="service gif"
          />
        </div>

        <div className="relative min-h-44 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full h-full rounded-2xl p-6 lg:p-7">
          <div className="absolute top-1/2 -translate-y-1/2 space-y-4 lg:space-y-6">
            <Brain className="text-4xl text-primary" />
            <div className="space-y-2">
              <span className="text-xl font-medium">Trade-in</span>
              <p className="paragraph-sm">Меняем вашу старую квартиру на новую</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-44 col-span-1 lg:col-span-2 row-span-1 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-6 lg:p-7">
          <Image
            width={200}
            height={400}
            className="absolute bottom-0 left-0 w-full h-full object-cover"
            src="/assets/service/texnika2.jpg"
            alt="service gif"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000] opacity-40"></div>
          <span className="absolute bottom-6 z-20 text-xl font-semibold leading-6 text-white">
            Продажа сырья для <br /> широкоформатной печати
          </span>
        </div>
      </div>
      <Link href={'/services'} className="flex items-center justify-center w-full mt-8">
        <Button variant="secondary">All services</Button>
      </Link>
    </div>
  );
}

export default Services;
