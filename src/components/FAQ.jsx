import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

const faqs = [
  {
    question: "Mitä kosintapalvelu käytännössä sisältää?",
    answer: "Suunnittelemme ja toteutamme kosinnan alusta loppuun toiveidesi pohjalta. Voit valita kevyemmän suunnittelupaketin tai täyden avaimet käteen -kokonaisuuden, jossa huolehdimme kaikesta puolestasi."
  },
  {
    question: "Kuinka aikaisin kosintaa kannattaa varata?",
    answer: "Suosittelemme varata kosinnan mahdollisimman ajoissa, jopa noin 2 kuukautta, mutta meidän vahvuus on myös nopeasti toteutetut kokonaisuudet!"
  },
  {
    question: "Voinko vaikuttaa kosinnan sisältöön?",
    answer: "Ehdottomasti. Kaikki kosinnat suunnitellaan yksilöllisesti teidän tarinanne pohjalta. Voit tulla mukaan ideointiin tai antaa meille vapaat kädet."
  },
  {
    question: "Mitä jos jokin menee pieleen kosintapäivänä?",
    answer: "Huolehdimme siitä, että kaikki on suunniteltu mahdollisimman sujuvaksi. Laajemmissa paketeissa vastaamme myös toteutuksen koordinoinnista, jolloin mahdolliset muutokset hoidetaan puolestasi."
  },
  {
    question: "Onko kosinta julkinen vai yksityinen?",
    answer: "Se on täysin sinun päätettävissäsi. Suunnittelemme kosinnan juuri sellaiseksi kuin haluat, intiimistä hetkestä näyttävämpään elämykseen."
  },
  {
    question: "Sisältyykö valokuvaus palveluun?",
    answer: "Valokuvaus sisältyy Exclusive-pakettiin. Muissa paketeissa voimme suositella kuvaajia tai lisätä palvelun erikseen."
  },
  {
    question: "Missä kosinta voidaan järjestää?",
    answer: "Kosinta voidaan toteuttaa lähes missä tahansa, luonnossa, ravintolassa, mökillä tai vaikka täysin uudessa miljöössä. Autamme löytämään teille sopivan paikan."
  },
  {
    question: "Mitä jos en vielä tiedä millaisen kosinnan haluan?",
    answer: "Ei haittaa, olet juuri oikeassa paikassa. Autamme sinua ideoimaan vaihtoehtoja ja löydämme yhdessä teille sopivan kokonaisuuden."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-pearl py-24 lg:py-40" id="useinkysytyt">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium mb-6 block">Kysymyksiä & Vastauksia</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">
              Usein kysytyt kysymykset
            </h2>
            <div className="w-16 h-[1px] bg-brand-charcoal/20" />
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-brand-charcoal/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
              >
                <span className="text-lg font-serif text-brand-charcoal pr-4">
                  {faq.question}
                </span>
                <span className={`text-brand-gold text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-brand-charcoal/70 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center bg-brand-white p-10 lg:p-12 shadow-sm border border-brand-charcoal/5"
        >
          <h3 className="text-2xl font-serif text-brand-charcoal mb-4">Etkö löytänyt vastausta kysymykseesi?</h3>
          <p className="text-brand-charcoal/70 font-sans mb-8">
            Ota yhteyttä, suunnitellaan yhdessä teille täydellinen kosinta!
          </p>
          <Button
            variant="outline"
            onClick={() => {
              navigate('/yhteystiedot');
              window.scrollTo(0, 0);
            }}
          >
            Ota yhteyttä
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
