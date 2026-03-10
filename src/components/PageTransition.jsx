import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const PageTransition = () => {
  const [isPresent, setIsPresent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show the loading screen on route change
    setIsPresent(true);

    // Hide it after 1 second
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Re-run effect when path changes

  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-brand-pearl flex items-center justify-center pointer-events-none"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/valokuvat/Avowal Logo Black.png"
            alt="Avowal Finland Loading"
            className="h-48 md:h-64 w-auto object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
