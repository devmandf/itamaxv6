import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">ITAMAX</h3>
            <p className="leading-relaxed">
              Votre partenaire de confiance pour des solutions d'architecture innovantes et durables 
              qui transforment les espaces et améliorent les vies.
            </p>
            <div className="hidden">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link to="home" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Accueil</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">À Propos</Link></li>
              <li><Link to="services" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link to="realisations" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Réalisations</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Nos Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
              <li><Link to="/services/design-interieur" className="hover:text-white transition-colors">Design d'Intérieur</Link></li>
              <li><Link to="/services/amenagement-urbain" className="hover:text-white transition-colors">Aménagement Urbain</Link></li>
              <li><Link to="/services/etudes-techniques" className="hover:text-white transition-colors">Études Techniques</Link></li>
              <li><Link to="/services/conseil" className="hover:text-white transition-colors">Conseil en Immobilier</Link></li>
              <li><Link to="/services/suivi-chantier" className="hover:text-white transition-colors">Suivi de Chantier</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-700">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="ml-3">Liberté 6 Extension Camp Pénal<br />Dakar, Sénégal</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="h-4 w-4 text-blue-500" />
                <a href="tel:+221338671855" className="ml-3 hover:text-blue-400">+221 33 867 18 55</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-blue-500" />
                <a href="mailto:itamax@orange.sn" className="ml-3 hover:text-blue-400">itamax@orange.sn</a>
              </li>
              <li className="flex items-center">
                <FaClock className="h-4 w-4 text-blue-500" />
                <span className="ml-3">Lun - Ven: 8h00 - 17h00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} ITAMAX. Tous droits réservés.
          </p>
          <div className="text-sm text-gray-500 hover:text-white transition-colors">
            Conception du site : <a href="mailto:devmandf@gmail.com" className="hover:underline font-['Jura'] tracking-wider">devmandf@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
