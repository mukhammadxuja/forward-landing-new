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
      className="text-center mt-8 md:mt-0 md:!my-16"
    >
      <Marquee className="w-full items-center gap-6 !pb-0" direction="left">
        <Image className="w-32 lg:w-44" src="/assets/clients/Duolingo.png" alt="client" width={120} height={120} />
        <Image className="w-32 lg:w-44" src="/assets/clients/Agree.png" alt="client" width={120} height={120} />
        <Image
          className="w-32 lg:w-44"
          src="/assets/clients/America-Airlines.png"
          alt="client"
          width={120}
          height={120}
        />
      </Marquee>
    </motion.div>
  );
}
