import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const headerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function HeroSection({ heading }: { heading: string }) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={headerVariants}
      className="mx-auto max-w-7xl px-[32px] relative flex items-center justify-between h-[calc(100vh-80px)]"
    >
      <div className="text-center w-full space-y-4">
        <motion.span
          variants={itemVariants}
          className="text-xs md:text-sm text-white/50 py-1 px-2 mx-auto flex items-center gap-2 w-fit rounded-full border border-white/50"
        >
          O‘z billboardingizni tanlang!
          <ArrowRight className="h-4 w-4" />
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-[32px] md:text-[48px] tracking-[-.015em] leading-[36px] md:leading-[48px] lg:text-[65px] lg:leading-[80px] md:tracking-[-1.6px] font-medium"
        >
          Shaharning eng ko‘rinadigan
          <br className="hidden md:block" />
          joylarida reklama qiling!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[16px] md:text-[18px] leading-[27px] md:text-[20px] lg:leading-[30px]"
        >
          Billboard joylashuvi, dizayn va monitoring – barchasi bizda!
        </motion.p>
      </div>
    </motion.section>
  );
}
