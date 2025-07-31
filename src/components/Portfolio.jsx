import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

// Import des images locales depuis le dossier public
const kananga = '/assets/images/projet-BM-Kinshasa.webp';
const aua = '/assets/images/projet-appins-CECCBADAbidjan.webp';
const hopitalMbour = '/assets/images/hopital-mbour.webp';
const villaOceane = '/assets/images/villa-océane.webp';
const cfpt = '/assets/images/CFPT-B1.webp';
const abattoirstivaouane = '/assets/images/abattoirstivaouane02.webp';
const villambour = '/assets/images/Villa-Type-Nord-Américaine-(01).webp';
const villaOuestFoire = '/assets/images/Villa-Ouest-Foire-(01).webp';
const gareFret = '/assets/images/projet-amo-garefretlss-01sur01.webp';
const feltiplexsangalkam = '/assets/images/projet-amo-feltiplex-02sur02.webp';
const ConstructiondesLYNAQEdeSédhiou = '/assets/images/ConstructiondesLYNAQEdeSédhiou.webp';

const projects = {
  all: [
    {
      id: 9,
      title: 'Construction des Lycées Nation-Armée pour la Qualité et l\'Équité (Lynaqe) de Sédhiou et Kaffrine',
      category: 'institutionnel',
      description: 'Consultant individuel – Banque Mondiale Sénégal : appui aux études et à la supervision des lycées LYNAQE de Sédhiou et Kaffrine (12 milliards F CFA).',
      image: ConstructiondesLYNAQEdeSédhiou,
    },
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
    {
      id: 7,
      title: 'Gare de Fret de l’Aéroport Léopold Sédar Senghor, Sénégal',
      category: 'amo',
      description: 'Projet PPEA à l’aéroport de Dakar : gare de fret avec chambres froides, bureaux et équipements d’export, financé par la Banque Mondiale et l’État (2,5 M\$US).',
      image: gareFret,
    },
    {
      id: 8,
      title: 'Feltiplex de Sangalkam, Sénégal',
      category: 'amo',
      description: 'Centre FELTIPLEX à Sangalkam (4000 m²) pour le conditionnement de fruits et légumes, avec chambres froides, zones de stockage, coûtant 1,5 M\$US.',
      image: feltiplexsangalkam,
    }
  ],
  institutionnel: [],
  public: [],
  particulier: [],
  amo: []
};

// Remplir les catégories
projects.institutionnel = projects.all.filter(project => project.category === 'institutionnel');
projects.public = projects.all.filter(project => project.category === 'public');
projects.particulier = projects.all.filter(project => project.category === 'particulier');
projects.amo = projects.all.filter(project => project.category === 'amo');

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('amo');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSubFilters, setShowSubFilters] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState(projects.amo); // Initialiser avec les projets AMO

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Délai pour permettre l'animation de fermeture avant de réinitialiser
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleFilterClick = (filter, isMainFilter = true) => {
    if (filter === 'etudes') {
      // Si on clique sur 'etudes' et que les sous-filtres sont visibles, on les cache
      if (showSubFilters) {
        setShowSubFilters(false);
      } else {
        // Sinon, on affiche les sous-filtres et on active 'etudes'
        setShowSubFilters(true);
        setActiveFilter('etudes');
        setPortfolioItems([]);
      }
    } else if (filter === 'public' || filter === 'particulier') {
      // Si on clique sur un sous-filtre
      setActiveFilter(filter);
      setPortfolioItems(projects[filter]);
      setShowSubFilters(true);
    } else {
      // Pour les autres filtres (amo, institutionnel)
        setActiveFilter(filter);
      setPortfolioItems(projects[filter]);
      setShowSubFilters(false);
    }
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

        {/* Filtres principaux */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {[
            { label: 'Assistance à Maîtrise d\'Ouvrage Déléguée (AMO)', key: 'amo' },
            { label: 'Appuis institutionnels', key: 'institutionnel' },
            { label: 'Projets Études Architecturales et Techniques', key: 'etudes' }
          ].map(({ label, key }) => (
            <button
              key={key}
              onClick={() => handleFilterClick(key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors border border-gray-200 ${
                activeFilter === key || 
                (key === 'etudes' && (activeFilter === 'public' || activeFilter === 'particulier' || activeFilter === 'etudes'))
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sous-filtres pour Études */}
        {(showSubFilters || activeFilter === 'public' || activeFilter === 'particulier') && (
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fadeIn">
            {[
              { label: 'Bâtiments institutionnels', key: 'public' },
              { label: 'Immeubles et Villa', key: 'particulier' }
            ].map(({ label, key }) => (
              <button
                key={key}
                onClick={() => handleFilterClick(key, false)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={project.id}
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

export default Portfolio;
