import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/valokuvat/Kosintakuvat-114-0101.jpg")' }}
      >
        <div className="absolute inset-0 bg-brand-midnight/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-brand-champagne text-sm uppercase tracking-[0.3em] font-medium mb-6"
        >
          Klassista Eleganssia & Unohtumattomia Hetkiä
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-white mb-8 leading-tight drop-shadow-md"
        >
          Elämän Pituisia <br />
          <span className="italic text-brand-champagne">Kysymyksiä</span> Varten
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <Button
            variant="secondary"
            className="bg-brand-white text-brand-midnight hover:bg-brand-champagne"
            onClick={() => {
              navigate('/hinnasto');
              window.scrollTo(0, 0);
            }}
          >
            Osta nyt
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-brand-white text-xs uppercase tracking-widest mb-2 font-medium">Selaa alaspäin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-brand-white/50"
        />
      </motion.div>
    </section>
  );
};
