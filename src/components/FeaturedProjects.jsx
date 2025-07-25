import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Siège de la Société Sénégalaise de Pêche et d\'Armement (SOPASEN)',
    description: 'Siège moderne et fonctionnel pour le leader sénégalais de la pêche et de l\'armement maritime.',
    image: '/assets/images/sopasen01.webp',
  },
  {
    title: 'Siège du Ministère de l\'Environnement et de la Protection de la Nature (MEPN)',
    description: 'Bâtiment administratif éco-conçu intégrant des solutions durables et des technologies vertes pour un impact environnemental minimal.',
    image: '/assets/images/MEPN02.webp',
  },
  {
    title: 'Siège de l\'Office National de Formation Professionnelle (ONFP) à Saint-Louis',
    description: 'Un espace éducatif moderne favorisant l\'apprentissage et le développement des compétences professionnelles dans un cadre inspirant.',
    image: '/assets/images/ONFPSTLOUIS04.webp',
  },
];

const FeaturedProjects = () => {
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
