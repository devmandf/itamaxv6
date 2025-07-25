import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = {
  all: [
    {
      id: 1,
      title: 'Siège de la Banque Mondiale, Dakar',
      category: 'institutionnel',
      description: 'Un bâtiment emblématique pour la Banque Mondiale au Sénégal.',
      image: '/assets/images/pexels-pixabay-159045.webp',
    },
    {
      id: 2,
      title: 'Centre de Conférences de l\'Union Africaine',
      category: 'institutionnel',
      description: 'Un centre de conférences ultramoderne pour l\'UA.',
      image: '/assets/images/ua.webp',
    },
    {
      id: 3,
      title: 'Hôpital Régional, Mbour',
      category: 'public',
      description: 'Un hôpital moderne desservant la région de Mbour.',
      image: '/assets/images/hopital-mbour.webp',
    },
    {
      id: 4,
      title: 'Résidence Les Almadies',
      category: 'particulier',
      description: 'Une résidence haut de gamme avec vue sur l\'océan.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Université Amadou Mahtar Mbow',
      category: 'public',
      description: 'Un campus universitaire moderne et fonctionnel.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'Villa Océane',
      category: 'particulier',
      description: 'Une villa contemporaine avec piscine à Saly.',
      image: '/assets/images/villa-océane.webp',
    },
  ],
  institutionnel: [],
  public: [],
  particulier: []
};

// Remplir les catégories
projects.institutionnel = projects.all.filter(project => project.category === 'institutionnel');
projects.public = projects.all.filter(project => project.category === 'public');
projects.particulier = projects.all.filter(project => project.category === 'particulier');

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioItems, setPortfolioItems] = useState(projects.all);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setPortfolioItems(projects[filter]);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations à travers différents secteurs d'activité
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Tous les projets', 'Institutionnels', 'Public', 'Particuliers'].map((filter) => {
            const filterKey = filter === 'Tous les projets' ? 'all' : 
                            filter === 'Institutionnels' ? 'institutionnel' : 
                            filter === 'Public' ? 'public' : 'particulier';
            
            return (
              <button
                key={filter}
                onClick={() => handleFilterClick(filterKey)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filterKey
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.id}
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

export default Portfolio;
