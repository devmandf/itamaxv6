import React, { useState, useEffect } from 'react';

// Composant de lien de navigation avec effet de ligne animée
const NavLink = ({ href, children, onClick, className = '' }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`relative group ${className}`}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// =============================================
// COMPOSANT HEADER - NE PAS MODIFIER SANS VALIDATION
// =============================================
// STRUCTURE CRITIQUE :
// 1. Logo à gauche (text-2xl font-bold text-blue-900)
// 2. Navigation desktop centrée (cachée sur mobile)
// 3. Bouton hamburger à droite (uniquement sur mobile)
//
// RÈGLES D'OR :
// 1. ALIGNEMENT :
//    - Le bouton hamburger DOIT rester aligné verticalement avec le logo
//    - Hauteur fixe de 24px (h-6) pour le conteneur du bouton
//    - Flex centré pour l'alignement vertical
//
// 2. MENU MOBILE :
//    - Largeur : 70vw avec un max de 240px
//    - Animation de transition fluide (300ms)
//    - Z-index élevé (50) pour le menu et l'overlay
//
// 3. NE PAS MODIFIER SANS VALIDATION :
//    - Les classes flex/grid
//    - Les marges/paddings du conteneur principal
//    - La structure HTML du bouton hamburger
// =============================================

const Header = () => {
  // État pour le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // État pour l'effet de scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`md:fixed top-0 left-0 right-0 w-full bg-white ${isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-80'} backdrop-blur-md z-50 transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2"
              >
                <img 
                  src="/assets/images/itamax-logo-header.svg" 
                  alt="Logo Itamax" 
                  className="h-6 w-auto"
                />
                <span className="text-2xl font-bold ml-1 -mt-0.75 uppercase hover:cursor-pointer" style={{ color: 'rgba(67, 82, 235, 1)' }}>
                  itamax
                </span>
              </a>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#about" className="nav-link hover:text-blue-700 font-['Jura'] font-semibold">À Propos</a></li>
                <li><a href="#services" className="nav-link hover:text-blue-700 font-['Jura'] font-semibold">Services</a></li>
                <li><a href="#realisations" className="nav-link hover:text-blue-700 font-['Jura'] font-semibold">Nos Domaines d'Interventions</a></li>
                <li><a href="#contact" className="nav-link hover:text-blue-700 font-['Jura'] font-semibold">Contact</a></li>
              </ul>
            </nav>

            {/* 
              BOUTON HAMBURGER - NE PAS MODIFIER L'ALIGNEMENT
              ============================================
              - Hauteur fixe de 24px (h-6) pour correspondre à la hauteur du logo
              - Flex centré pour l'alignement vertical
              - Ne pas ajouter de margin/padding ici
            */}
            <div className="md:hidden">
              <button 
                className="flex items-center justify-center h-6 focus:outline-none" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <div className={`w-6 flex flex-col space-y-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`}>
                  <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-6 transform rotate-45 translate-y-2' : 'w-6'}`} style={{ backgroundColor: 'rgba(67, 82, 235, 1)' }}></span>
                  <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100 w-6'}`} style={{ backgroundColor: 'rgba(67, 82, 235, 1)' }}></span>
                  <span className={`block h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-6 transform -rotate-45 -translate-y-2' : 'w-6'}`} style={{ backgroundColor: 'rgba(67, 82, 235, 1)' }}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile - Largeur réduite pour les appareils tactiles */}
      <div className={`fixed top-0 right-0 h-full w-[70vw] max-w-[240px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold text-blue-900">Menu</div>
            <button 
              onClick={closeMenu}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink 
                  href="#about" 
                  onClick={closeMenu} 
                  className="inline-block py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors font-['Jura'] font-semibold"
                >
                  À Propos
                </NavLink>
              </li>
              <li>
                <NavLink 
                  href="#services" 
                  onClick={closeMenu} 
                  className="inline-block py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors font-['Jura'] font-semibold"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  href="#realisations" 
                  onClick={closeMenu} 
                  className="inline-block py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors font-['Jura'] font-semibold"
                >
                  Nos Domaines d'Interventions
                </NavLink>
              </li>
              <li>
                <NavLink 
                  href="#contact" 
                  onClick={closeMenu} 
                  className="inline-block py-2 text-lg text-gray-700 hover:text-blue-600 transition-colors font-['Jura'] font-semibold"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;
