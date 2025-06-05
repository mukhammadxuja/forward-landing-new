import { useCursorGlow } from '@/hooks/useCursorPosition';
import { motion } from 'framer-motion';
import { ChartPie, Clock, Eye, Palette } from 'lucide-react';
import { useTranslations } from 'next-intl';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Stats({ aboutPage = false }) {
  const t = useTranslations('IndexPage.stats');
  const { position, handleMouseMove } = useCursorGlow();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`grid gap-3 lg:gap-4 mt-4 ${
        aboutPage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 lg:grid-cols-4'
      }`}
    >
      {[1, 2, 3, 4].map((_, index) => {
        const icons = [<Eye />, <Palette />, <Clock />, <ChartPie />];
        const titleKey = `card${index + 1}Title`;
        const paragraphKey = `card${index + 1}Paragraph`;

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group overflow-hidden cursor-default h-fit lg:h-28"
            onMouseMove={handleMouseMove}
          >
            <div
              className="absolute inset-0 z-0 opacity-0 h-full group-hover:opacity-100 transition duration-300 pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `radial-gradient(180px circle at ${position.x} ${position.y}, rgba(5, 241, 99, 0.50) 0%, transparent 70%)`,
              }}
            />

            <div className="flex items-start h-full gap-4 border border-accent bg-background/50 backdrop-blur-lg shadow-sm w-full rounded-2xl overflow-hidden p-4 lg:p-7 transition-transform duration-300 group-hover:rotate-[0.3deg]">
              <div className="text-primary hidden md:block text-3xl lg:text-4xl">{icons[index]}</div>
              <div className="space-y-1">
                <p className="font-semibold text-sm lg:text-base leading-4">{t(titleKey)}</p>
                <p className="text-accent-foreground text-xs lg:text-sm">{t(paragraphKey)}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Stats;
