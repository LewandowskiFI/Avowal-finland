import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-8 py-3 tracking-wider text-sm font-medium transition-all duration-500 ease-in-out font-sans uppercase";
  
  const variants = {
    primary: "bg-brand-charcoal text-brand-white hover:bg-brand-black",
    outline: "border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white",
    ghost: "text-brand-charcoal hover:text-brand-gold",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
