import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="flex h-full shrink-0 items-center justify-center p-4 md:h-auto md:flex-1 md:overflow-y-auto">
      <motion.div
        className="h-20 w-20 rounded bg-blue-400"
        drag
        dragSnapToOrigin
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.2}
      ></motion.div>
    </section>
  );
};

export default Hero;
