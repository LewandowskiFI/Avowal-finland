import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="bg-brand-pearl py-24 lg:py-40" id="tarinamme">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 bg-brand-champagne/20 transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8" />
            <img
              src="/valokuvat/Kosintakuvat-090-9937.jpg"
              alt="Elegant details of a proposal"
              className="absolute inset-0 w-full h-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center max-w-lg lg:max-w-none mx-auto"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium">Tarinamme</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-10 leading-snug">
              Suomalaista rakkautta,<br />
              <span className="italic text-brand-emerald">Ajatonta Eleganssia</span>
            </h2>

            <div className="space-y-6 text-brand-charcoal/80 font-sans leading-relaxed text-lg">
              <p>
                Avowal Finland syntyi intohimosta luoda taianomaisia hetkiä, jotka säilyvät muistoissa läpi elämän. Uskomme, että jokainen rakkaustarina on ainutlaatuinen ja ansaitsee tulla koetuksi juuri sille kuuluvalla arvokkuudella.
              </p>
              <p>
                Yhdistämme klassisen tyylikkyyden, ensiluokkaisen suomalaisen osaamisen ja hienotunteisen palvelun. Suunnittelemme kanssasi kosinnan, joka heijastaa teidän tarinaanne – täydellisesti järjestettynä, aina loppuun asti hiottuna.
              </p>
              <p>
                Me toteutamme visiosi luottamuksella, jotta voitte keskittyä ainoastaan kaikkein tärkeimpään: toisiinne.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_Placeholder.svg/1024px-Signature_Placeholder.svg.png"
                alt="Founder Signature"
                className="h-12 opacity-40 hover:opacity-70 transition-opacity invert sepia-[0.5] hue-rotate-[160deg] saturate-[300%] brightness-[0.5]"
                style={{ filter: "brightness(0) saturate(100%) invert(20%) sepia(21%) saturate(546%) hue-rotate(309deg) brightness(97%) contrast(92%)" }}
              />
              <p className="mt-4 text-xs tracking-widest uppercase text-brand-charcoal/50">Perustajat, Avowal Finland</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
