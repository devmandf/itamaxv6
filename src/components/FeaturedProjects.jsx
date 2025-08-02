import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

const projects = [
  {
    title: 'Siège du Ministère de la Santé et de l\'Action Sociale',
    description: 'Consultant individuel : Assistance à la maîtrise d\'ouvrage pour la construction du Ministère de la Santé et de l\'Action Sociale dans le cadre du Programme National de Développement Sanitaire (PNDS) / Convention AGETIP / Ministère de la Santé Financement Banque Mondiale / État du Sénégal (5.4 M$US).',
    image: '/assets/images/MSAS.webp',
  },
  {
    title: 'Siège du Ministère de l\'Environnement et de la Protection de la Nature (MEPN)',
    description: 'Bâtiment administratif éco-conçu intégrant des solutions durables et des technologies vertes pour un impact environnemental minimal.',
    image: '/assets/images/MEPN02.webp',
  },
  {
    title: 'Siège de la Société Sénégalaise de Pêche et d\'Armement (SOPASEN)',
    description: 'Siège moderne et fonctionnel pour le leader sénégalais de la pêche et de l\'armement maritime.',
    image: '/assets/images/sopasen01.webp',
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Délai pour permettre l'animation de fermeture avant de réinitialiser
    setTimeout(() => setSelectedProject(null), 300);
  };
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900">Quelques-uns de nos projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden cursor-pointer group bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 shadow-md hover:shadow-2xl hover:shadow-gray-600/40 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => openModal(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-blue-600 px-4 py-2 rounded-full font-medium shadow-md">
                    Voir en grand
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Modal d'image */}
        <ImageModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
