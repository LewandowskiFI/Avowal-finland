import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Etusivu', path: '/', hash: '' },
    { name: 'Palvelut', path: '/', hash: '#palvelut' },
    { name: 'Tarinamme', path: '/', hash: '#tarinamme' },
    { name: 'Hinnasto', path: '/hinnasto', hash: '' },
    { name: 'Galleria', path: '/', hash: '#galleria' },
    { name: 'Ota yhteyttä', path: '/yhteystiedot', hash: '' },
  ];

  const handleNavClick = (e, path, hash) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== path) {
      navigate(path);
      // Wait a moment for page to load before scrolling if there is a hash
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.replace('#', ''));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-pearl/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={(e) => handleNavClick(e, '/', '')}>
            <img
              src={(isScrolled || location.pathname !== '/') ? "/valokuvat/Avowal Logo Black.png" : "/valokuvat/Avowal Logo White.png"}
              alt="Avowal Finland Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300 scale-[1.5] md:scale-[1.8] origin-left"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash || link.path}
                onClick={(e) => handleNavClick(e, link.path, link.hash)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer ${isScrolled ? 'text-brand-charcoal hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-charcoal"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-brand-pearl flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 p-2 text-brand-charcoal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.hash || link.path}
                  onClick={(e) => handleNavClick(e, link.path, link.hash)}
                  className="text-2xl font-serif text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
