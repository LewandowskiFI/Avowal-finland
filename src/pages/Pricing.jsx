import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "499€",
      description: "Konsultaatio ja Ideointi. Täydellinen sinulle, joka haluat järjestää itse, mutta kaipaat asiantuntijan näkemystä.",
      features: [
        "1h aloituspalaveri",
        "2 yksilöllistä konseptiehdotusta",
        "Tapahtumapaikan kartoitus",
        "Tavarantoimittajien suosituslista"
      ]
    },
    {
      name: "Premium",
      price: "2499€",
      description: "Päivän Koordinointi. Hoidit varaukset, me pidämme huolen että itse h-hetkellä kaikki sujuu suunnitellusti.",
      features: [
        "Kaikki basic -palvelun edut",
        "Kaikkien varausten ja järjestelyjen hoitaminen",
        "Premium-somistus",
        "Tuki kosintapäivänä"
      ]
    },
    {
      name: "Exclusive",
      price: "alkaen 4499€",
      description: "Täyden Palvelun Kosinta. Avaimet käteen -ratkaisu. Suunnittelemme, varaamme, somistamme ja koordinoimme kaiken.",
      features: [
        "Rajaton suunnittelu ja ideointi",
        "Kaikkien varausten ja järjestelyjen hoitaminen",
        "Exclusive-somistus",
        "Valokuvaus ja kuvien editointi",
        "Täysi tuki kosintapäivänä"
      ]
    }
  ];

  const navigate = useNavigate();

  return (
    <main className="bg-brand-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium mb-6 block">Investointi Rakkauteen</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-6">
            Hinnasto & Paketit
          </h1>
          <div className="w-16 h-[1px] bg-brand-charcoal/20 mx-auto" />
          <p className="mt-8 text-brand-charcoal/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Tutustu huolella suunniteltuihin palvelukokonaisuuksiimme. Jokainen kosinta on yksilöllinen, ja siksi tarjoamme myös täysin kustomoituja ratkaisuja juuri teidän tarpeisiinne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-brand-white p-10 lg:p-12 shadow-sm border border-brand-charcoal/5 flex flex-col hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-2xl font-serif text-brand-charcoal mb-2">{pkg.name}</h3>
              <div className="text-3xl font-serif text-brand-gold mb-6">{pkg.price}</div>
              <p className="text-brand-charcoal/70 font-sans text-sm leading-relaxed mb-8 flex-grow">
                {pkg.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <span className="text-brand-gold mr-3">✦</span>
                    <span className="text-sm font-sans text-brand-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={index === 2 ? 'primary' : 'outline'} 
                className="w-full"
                onClick={() => {
                  navigate('/yhteystiedot', { state: { selectedPackage: `${pkg.description.split('.')[0]} (${pkg.name})` } });
                  window.scrollTo(0, 0);
                }}
              >
                Osta Nyt
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
