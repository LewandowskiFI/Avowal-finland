import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { PageTransition } from './components/PageTransition';

function App() {
  return (
    <Router>
      <div className="bg-brand-pearl min-h-screen font-sans selection:bg-brand-gold/30 selection:text-brand-midnight overflow-x-hidden">
        <PageTransition />
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hinnasto" element={<Pricing />} />
          <Route path="/yhteystiedot" element={<Contact />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
