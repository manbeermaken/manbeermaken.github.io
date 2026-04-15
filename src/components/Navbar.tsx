import { Menu, Target, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };
  return (
    <>
      <div className="relative flex flex-none items-center justify-between p-6">
        <div className="cursor-pointer">
          <Target />
        </div>
        <ul className="hidden gap-10 text-xl font-semibold md:flex">
          <li className="rounded px-4 py-2 hover:bg-blue-300">
            <AnimatedButton>
              <a href="#">Pojects</a>
            </AnimatedButton>
          </li>
          <li className="rounded px-4 py-2 hover:bg-blue-300">
            <AnimatedButton>
              <a href="#">Resume</a>
            </AnimatedButton>
          </li>
          <li className="rounded px-4 py-2 hover:bg-blue-300">
            <AnimatedButton>
              <a href="#">Github</a>
            </AnimatedButton>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex w-full flex-col items-center gap-4 text-xl font-semibold md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <li className="rounded px-4 py-2 hover:bg-blue-300">
              <AnimatedButton>
                <a href="#">Pojects</a>
              </AnimatedButton>
            </li>
            <li className="rounded px-4 py-2 hover:bg-blue-300">
              <AnimatedButton>
                <a href="#">Resume</a>
              </AnimatedButton>
            </li>
            <li className="rounded px-4 py-2 hover:bg-blue-300">
              <AnimatedButton>
                <a href="#">Github</a>
              </AnimatedButton>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
