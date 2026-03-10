import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    location: '',
    additionalInfo: ''
  });

  // Check if we arrived here by clicking an "Osta Nyt" button
  useEffect(() => {
    if (location.state && location.state.selectedPackage) {
      setFormData(prev => ({
        ...prev,
        service: location.state.selectedPackage
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Submit logic here (e.g., email service or backend API)
    alert("Kiitos yhteydenotostasi! Palaamme asiaan mahdollisimman pian.");
  };

  const servicesList = [
    "Konsultaatio & Ideointi (Basic)",
    "Päivän Koordinointi (Premium)",
    "Täyden Palvelun Kosinta (Exclusive)",
    "Täyden Palvelun Kosinta", // Matches Services block title
    "Muokattu palvelu / Muu"
  ];

  return (
    <main className="bg-brand-pearl min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-medium mb-6 block">Ota Yhteyttä</span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">
            Aloita Tarinanne
          </h1>
          <div className="w-16 h-[1px] bg-brand-charcoal/20 mx-auto" />
          <p className="mt-8 text-brand-charcoal/70 font-sans leading-relaxed max-w-xl mx-auto">
            Kerro meille toiveistasi ja unelmistasi. Olemme täällä suunnittelemassa täydellistä hetkeä juuri teille.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-brand-white p-8 md:p-12 shadow-sm border border-brand-charcoal/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nimi */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Nimi</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal"
                  placeholder="Koko nimesi"
                />
              </div>

              {/* Puhelinnumero */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Puhelinnumero</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal"
                  placeholder="Esim. +358 40..."
                />
              </div>
            </div>

            {/* Sähköposti */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Sähköposti</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal"
                placeholder="sähköpostiosoitteesi@..."
              />
            </div>

            {/* Haluttu palvelu */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="service" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Haluttu palvelu</label>
              <select 
                id="service" 
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal appearance-none"
              >
                <option value="" disabled>Valitse palvelu</option>
                {servicesList.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kosinnan ajankohta */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="date" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Haluttu kosinnan ajankohta</label>
                <input 
                  type="text" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal"
                  placeholder="Arvioitu päivä/kuukausi"
                />
              </div>

              {/* Kosinnan sijainti */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="location" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Kosinnan sijainti</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal"
                  placeholder="Kaupunki, luonto, tila..."
                />
              </div>
            </div>

            {/* Lisätietoja */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="additionalInfo" className="text-sm font-serif text-brand-charcoal uppercase tracking-widest">Lisätietoja & toiveita</label>
              <textarea 
                id="additionalInfo" 
                name="additionalInfo" 
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="bg-transparent border-b border-brand-charcoal/30 py-2 focus:outline-none focus:border-brand-gold transition-colors font-sans text-brand-charcoal resize-y"
                placeholder="Kerro lisää tarinastanne tai ideoistanne..."
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <Button type="submit" variant="primary" className="w-full md:w-auto md:px-16 py-4">
                Lähetä yhteydenotto
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
};
