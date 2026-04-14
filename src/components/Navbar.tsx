import { Menu, Target } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((p) => !p);
  };
  return (
    <>
      <div className="relative flex items-center justify-between p-6">
        <div>
          <Target />
        </div>
        <ul className="hidden gap-10 text-xl font-semibold md:flex">
          <li className="rounded p-2 hover:bg-blue-300">
            <a href="#">Pojects</a>
          </li>
          <li className="rounded p-2 hover:bg-blue-300">
            <a href="#">Resume</a>
          </li>
          <li className="rounded p-2 hover:bg-blue-300">
            <a href="#">Github</a>
          </li>
        </ul>
        <div className="cursor-pointer md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            <Menu />
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <li className="rounded px-4 py-2 hover:bg-blue-300">
              <a href="#">Pojects</a>
            </li>
            <li className="rounded p-2 hover:bg-blue-300">
              <a href="#">Resume</a>
            </li>
            <li className="rounded p-2 hover:bg-blue-300">
              <a href="#">Github</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
