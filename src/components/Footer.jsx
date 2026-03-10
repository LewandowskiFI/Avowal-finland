import React from 'react';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-brand-midnight text-brand-pearl py-20 px-6 md:px-12 border-t border-brand-charcoal/10" id="yhteystiedot">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <img
            src="/valokuvat/Avowal Logo White.png"
            alt="Avowal Finland Logo"
            className="h-32 md:h-48 w-auto object-contain self-start"
          />
          <p className="text-brand-champagne/80 max-w-sm text-sm font-sans leading-relaxed">
            Luomme unohtumattomia hetkiä ja klassista eleganssia elämäsi tärkeimpiin kysymyksiin. Omistautuen täydellisyydelle, hienotunteisuudelle ja suomalaiselle laadulle.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Linkit</h4>
          <a href="#palvelut" className="text-sm text-brand-champagne/70 hover:text-brand-white transition-colors">Palvelut</a>
          <a href="#tarinamme" className="text-sm text-brand-champagne/70 hover:text-brand-white transition-colors">Tarinamme</a>
          <a href="#galleria" className="text-sm text-brand-champagne/70 hover:text-brand-white transition-colors">Galleria</a>
          <a href="#" className="text-sm text-brand-champagne/70 hover:text-brand-white transition-colors">Usein kysyttyä</a>
        </div>

        {/* Newsletter / Contact */}
        <div className="md:col-span-4 flex flex-col space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Uutiskirje</h4>
          <p className="text-sm text-brand-champagne/70">
            Tilaa inspiraatiota ja eksklusiivisia tarjouksia suoraan sähköpostiisi.
          </p>
          <form className="flex space-x-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Sähköpostiosoite"
              className="bg-transparent border border-brand-champagne/30 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold w-full text-brand-white"
            />
            <button
              type="submit"
              className="bg-brand-gold text-brand-midnight px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-brand-white transition-colors"
            >
              Tilaa
            </button>
          </form>
          <div className="pt-4 flex space-x-4">
            <a href="https://www.instagram.com/avowalfinland" target="_blank" rel="noopener noreferrer" className="text-brand-champagne/70 hover:text-brand-white transition-colors text-sm">
              Instagram
            </a>
            <a href="mailto:info@avowalfinland.fi" className="text-brand-champagne/70 hover:text-brand-white transition-colors text-sm">
              avowalfinland@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-champagne/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-brand-champagne/50">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Avowal Finland. Kaikki oikeudet pidätetään.</p>
          <p>Verkkosivujen kuvat: Severi Peura / <a href="https://www.severipeura.fi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">www.severipeura.fi</a></p>
          <p>Verkkosivut toteuttanut: Leevi Halonen / <a href="https://www.leevihalonen.fi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">www.leevihalonen.fi</a></p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-white">Tietosuojaseloste</a>
          <a href="#" className="hover:text-brand-white">Käyttöehdot</a>
        </div>
      </div>
    </footer>
  );
};
