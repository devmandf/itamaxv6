import React from 'react';
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

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <FeaturedProjects />
      <Services />
      <Portfolio />
      <Map />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
