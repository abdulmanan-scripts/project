import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import StrategyCallModal from './StrategyCallModal';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Meet Our Team" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/portfolio", label: "Our Work" },
    { href: "/contact", label: "Contact Us" }
  ];

  return (
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-cosmic-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-cosmic-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-4 md:mb-0"
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PixelNova Studio
            </Link>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto justify-center">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  <Link
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2"
              >
                Book a Strategy Call
              </Button>
            </motion.div>
          </div>
          <button 
            className="md:hidden mt-4 md:mt-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t overflow-hidden"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    to={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    <Link
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                      to={item.href}
                      className={`text-gray-700 hover:text-blue-600 transition-colors ${
                        location.pathname === item.href ? 'text-blue-600' : ''
                      }`}
                      location.pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    </Link>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                  >
                    Book a Strategy Call
                  </Button>
                </motion.div>
              </nav>
                  </Link>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    
    <StrategyCallModal 
      open={isModalOpen} 
      onOpenChange={setIsModalOpen} 
    />
    </>
  );
};

export default Header;