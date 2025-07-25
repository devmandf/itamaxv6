import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">Notre Localisation</h2>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3333333333335!2d-17.4617315!3d14.7319167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzU0LjkiTiAxN8KwMjcnMzQuNCJX!5e0!3m2!1sfr!2ssn!4v1753465610663!5m2!1sfr!2ssn&markers=color:red%7C14.731917,-17.459556" 
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
    </section>
  );
};

export default Map;
