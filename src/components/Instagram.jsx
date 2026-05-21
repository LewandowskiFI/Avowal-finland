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
          <div className="flex items-center space-x-8 mb-6">
            <a href="https://www.instagram.com/avowalfinland" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <InstagramIcon className="w-8 h-8 text-brand-charcoal/50 hover:text-brand-charcoal" strokeWidth={1} />
            </a>
            <a href="https://www.tiktok.com/@avowal.finland?_r=1&_t=ZN-96YY7jcovY6" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.75rem] h-[1.75rem] text-brand-charcoal/50 hover:text-brand-charcoal">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.07-1.33.15-2.73.74-3.92 1.05-2.18 3.25-3.8 5.64-3.9 1.06-.05 2.11.13 3.1.5v4.18c-.89-.37-1.88-.41-2.8-.13-1.05.29-1.92 1.14-2.22 2.18-.2.7-.17 1.46.12 2.14.3.72.87 1.28 1.55 1.63 1.09.56 2.44.49 3.46-.14 1.16-.72 1.83-2.02 1.83-3.39V.02z" />
              </svg>
            </a>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">
            Tutustu meidän Someihin:
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

      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {images.map((img, index) => (
          <a
            key={index}
            href="https://www.instagram.com/avowalfinland"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-square overflow-hidden group cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="w-full h-full"
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
          </a>
        ))}
      </div>
    </section>
  );
};
