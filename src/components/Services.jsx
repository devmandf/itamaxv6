import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardDocumentCheckIcon, 
  MapIcon, 
  LightBulbIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Études de Faisabilité",
    description: "Analyse et évaluation complètes de la viabilité des projets, incluant les aspects techniques, économiques et juridiques pour assurer une mise en œuvre réussie.",
    icon: <ClipboardDocumentCheckIcon className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Urbanisme et Aménagement du Territoire",
    description: "Développement stratégique d'espaces urbains et régionaux durables qui équilibrent croissance, infrastructures et considérations environnementales.",
    icon: <MapIcon className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Conseil en Conception Durable",
    description: "Conseils d'experts sur des solutions de conception écologiques et économes en énergie qui réduisent l'impact environnemental tout en maintenant fonctionnalité et esthétique.",
    icon: <LightBulbIcon className="w-10 h-10 text-blue-600" />
  },
  {
    title: "Gestion de Projet",
    description: "Supervision et coordination professionnelles de toutes les phases du projet pour assurer une livraison dans les délais, le respect des normes de qualité et du budget.",
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-blue-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600">
            Solutions architecturales complètes adaptées pour répondre aux exigences et défis uniques de votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
