import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const services = [
  {
    title: "Täyden Palvelun Kosinta",
    description: "Huolehdimme kaikesta – suunnittelusta, varauksista, somistuksesta ja aikataulutuksesta. Saavut vain paikalle ja nautit unohtumattomasta hetkestäsi.",
    image: "/valokuvat/Kosintakuvat-033-9641.jpg"
  },
  {
    title: "Konsultaatio & Ideointi",
    description: "Kaipaatko inspiraatiota? Autamme sinua hiomaan ideasi täydellisyyteen ja tarjoamme asiantuntemusta oikeanlaisen tunnelman luomiseen.",
    image: "/valokuvat/Kosintakuvat-138-0248.jpg"
  },
  {
    title: "Päivän Koordinointi",
    description: "Sinulla on visio ja varaukset, mutta tarvitset jonkun varmistamaan, että kaikki sujuu suunnitellusti kulisseissa. Me pidämme langat käsissämme.",
    image: "/valokuvat/Kosintakuvat-165-0452.jpg"
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-brand-white py-24 lg:py-40" id="palvelut">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium mb-6 block">Palvelumme</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">
              Räätälöityjä Kokemuksia
            </h2>
            <div className="w-16 h-[1px] bg-brand-charcoal/20" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-8 relative h-[500px] w-full bg-brand-pearl">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-transparent transition-colors duration-700" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-4 relative inline-block">
                {service.title}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
              </h3>
              <p className="text-brand-charcoal/70 font-sans leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full text-xs"
                  onClick={() => {
                    navigate('/hinnasto', { state: { selectedPackage: service.title } });
                    window.scrollTo(0, 0);
                  }}
                >
                  Osta nyt
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
