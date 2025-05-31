import { Marquee } from '@/components/ui/marquee';

import { motion } from 'framer-motion';

const reviewVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 1.2, duration: 0.8, ease: 'easeOut' },
  },
};

function Review() {
  return (
    <motion.div
      variants={reviewVariants}
      initial="hidden"
      animate="show"
      className="text-center mt-8 max-w-5xl overflow-hidden"
    >
      <Marquee className="items-center gap-2 !pb-0" direction="left">
        <div className="border border-accent bg-background/50 backdrop-blur-lg w-[300px] rounded-2xl px-4 py-2 space-y-1.5">
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Theresa Webb"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white text-xs">Theresa Webb</p>
            </div>
          </div>
          <p className="text-accent-foreground text-left text-xs max-w-[300px]">
            Great app. The intuitive interface makes it easy to use, even for beginners like me.
          </p>
          <div className="flex space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44 1.286 3.946c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.36 2.44c-.785.57-1.84-.197-1.54-1.118l1.286-3.946-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.15l1.286-3.946z" />
              </svg>
            ))}
          </div>
        </div>
      </Marquee>
    </motion.div>
  );
}

export default Review;
