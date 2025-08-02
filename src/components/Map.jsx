import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const Map = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const address = 'Liberté 6 Extension Camp Pénal, Dakar, Sénégal';
  const googleMapsUrl = 'https://maps.app.goo.gl/VdShCCCuX2JZn8ZdA';
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3333333333335!2d-17.4617315!3d14.7319167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzU0LjkiTiAxN8KwMjcnMzQuNCJX!5e0!3m2!1sfr!2ssn!4v1753465610663!5m2!1sfr!2ssn&markers=color:red%7C14.731917,-17.459556';
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Localisation d'ITAMAX: ${address} - ${googleMapsUrl}`)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${address}\n${googleMapsUrl}`);
    setCopySuccess('Adresse copiée !');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Notre Localisation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src={embedUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Itamax">
                </iframe>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPinIcon className="w-6 h-6 text-blue-600 mr-2" />
                Adresse
              </h3>
              <p className="text-gray-600 mb-4">{address}</p>
              
              <div className="flex flex-col space-y-3 mt-6">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
                  {copySuccess || 'Copier l\'adresse'}
                </button>
                
                <button
                  onClick={openGoogleMaps}
                  className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  Ouvrir dans Google Maps
                </button>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
                  Partager sur WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
