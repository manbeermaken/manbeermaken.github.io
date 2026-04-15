import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export default function AnimatedButton({
  children,
  stiffness = 300,
  damping = 15,
}: {
  children: ReactNode;
  stiffness?: number;
  damping?: number;
}) {
  return (
    <motion.button
      className="cursor-pointer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: 'spring', stiffness, damping }}
    >
      {children}
    </motion.button>
  );
}
