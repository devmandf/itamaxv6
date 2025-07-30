import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import des images locales depuis le dossier public
const kananga = '/assets/images/projet-BM-Kinshasa.webp';
const aua = '/assets/images/projet-appins-CECCBADAbidjan.webp';
const hopitalMbour = '/assets/images/hopital-mbour.webp';
const villaOceane = '/assets/images/villa-océane.webp';
const cfpt = '/assets/images/CFPT-B1.webp';
const abattoirstivaouane = '/assets/images/abattoirstivaouane02.webp';
const villambour = '/assets/images/Villa-Type-Nord-Américaine-(01).webp';
const villaOuestFoire = '/assets/images/Villa-Ouest-Foire-(01).webp';

const projects = {
  all: [
    {
      id: 1,
      title: 'Complexe Royal de Kananga (18 000 élèves), Kinshasa',
      category: 'institutionnel',
      description: 'Projet de réhabilitation du Complexe scolaire de Kananga pour moderniser l\'éducation.',
      image: kananga,
    },
    {
      id: 2,
      title: "Centre d’Excellence pour le Changement Climatique, la Biodiversité et l’Agriculture Durable, Abidjan",
      category: 'institutionnel',
      description: 'Mission pour l’AUA (projet ACE, Banque Mondiale) : suivi des travaux, contrôle des équipements et validation des rapports.',
      image: aua,
    },
    {
      id: 3,
      title: 'Centre de Formation Professionnelle et Technique de TYPE B, Sénégal',
      category: 'public',
      description: 'Projet de 10 ha incluant salles, ateliers, hébergements et voiries, pour 1,18 milliard F CFA par centre, soit 24,3 milliards pour 15 centres.',
      image: cfpt,
    },
    {
      id: 4,
      title: 'Villa Grand Standing à Mbour.',
      category: 'particulier',
      description: 'Style nord-américain avec hall, plusieurs salons, chambres master, dressing, garages, piscine, gym, salle TV et billard, coût d’environ 750 millions F CFA.',
      image: villambour,
    },
    {
      id: 5,
      title: 'Construction des Abattoirs de Tivaouane, Sénégal',
      category: 'public',
      description: 'Projet AGETIP de 10 ha : construction d’un complexe abattoir complet pour 1,1 milliard F CFA plus 83 millions d’honoraires.',
      image: abattoirstivaouane,
    },
    {
      id: 6,
      title: 'Villa Ouest Foire',
      category: 'particulier',
      description: 'Construction d\'une villa R+3 à Ouest Foire.',
      image: villaOuestFoire,
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
