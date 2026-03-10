import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon } from 'lucide-react';

export const Instagram = () => {
  const images = [
    "/valokuvat/Kosintakuvat-038-9654.jpg",
    "/valokuvat/Kosintakuvat-083-9909.jpg",
    "/valokuvat/Kosintakuvat-114-0101.jpg",
    "/valokuvat/Kosintakuvat-142-0266.jpg",
  ];

  return (
    <section className="bg-brand-pearl py-24 pb-0" id="galleria">
      <div className="text-center mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <InstagramIcon className="w-8 h-8 text-brand-charcoal/50 mb-6" strokeWidth={1} />
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
            Tutustu meidän Instagramiin
          </h2>
          <a
            href="https://www.instagram.com/avowalfinland"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold uppercase tracking-widest text-sm font-medium hover:text-brand-charcoal transition-colors duration-300"
          >
            @avowalfinland
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full cursor-pointer">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-midnight/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <InstagramIcon className="text-brand-white w-8 h-8" strokeWidth={1.5} />
            </div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={img}
              alt="Instagram feed"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
