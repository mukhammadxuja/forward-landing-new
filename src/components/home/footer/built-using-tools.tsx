import { Marquee } from '@/components/ui/marquee';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function BuiltUsingTools() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center mt-8 md:mt-0 md:!my-16 relative"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <Marquee className="w-full items-center gap-6 lg:gap-10 !pb-0" direction="left">
        <Image
          className="w-32 grayscale hover:grayscale-0"
          src="/assets/clients/coca-cola.png"
          alt="Coca cola image"
          width={120}
          height={120}
        />
        <Image
          className="w-32 grayscale hover:grayscale-0"
          src="/assets/clients/akfa.png"
          alt="Akfa image"
          width={120}
          height={120}
        />
        <Image
          className="w-32 grayscale hover:grayscale-0"
          src="/assets/clients/dotsoft.png"
          alt="Dotsoft image"
          width={120}
          height={120}
        />
        <Image
          className="w-32 grayscale hover:grayscale-0"
          src="/assets/clients/uzum.png"
          alt="Uzum image"
          width={120}
          height={120}
        />
        <Image
          className="w-40 grayscale hover:grayscale-0"
          src="/assets/clients/uztelecom.png"
          alt="Uztelecom image"
          width={120}
          height={120}
        />
      </Marquee>
    </motion.div>
  );
}
