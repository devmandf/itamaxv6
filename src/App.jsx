import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Map from './components/Map';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Merci from './pages/Merci';

function AppContent() {
  const location = useLocation();
  
  // Ne pas afficher le Header et le Footer sur la page de remerciement
  const isMerciPage = location.pathname === '/merci';
  
  return (
    <div className="bg-white">
      {!isMerciPage && <Header />}
      <Routes>
        <Route path="/merci" element={<Merci />} />
        <Route path="/" element={
          <>
            <Hero />
            <TrustedBy />
            <About />
            <FeaturedProjects />
            <Services />
            <Portfolio />
            <Map />
            <ContactForm />
          </>
        } />
      </Routes>
      {!isMerciPage && <Footer />}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
