import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Instagram } from '../components/Instagram';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Instagram />
    </main>
  );
};
