import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import ImageModal from './ImageModal';

// Import des images locales depuis le dossier public
const kananga = '/assets/images/projet-BM-Kinshasa.webp';
const aua = '/assets/images/CEA (1).webp';
const ceaProjects = [
  { 
    image: '/assets/images/CEA (1).webp',
    description: "2017 - Université d'État de Benue, Technologie Alimentaire et Recherche, Nigeria."
  },
  {
    image: '/assets/images/CEA (2).webp',
    description: "2017 - KNUST RWESCK, Université Kwame Nkrumah des Sciences et de la Technologie, Ghana (Kumasi)."
  },
  {
    image: '/assets/images/CEA (3).webp',
    description: "2017 - CEA-SMA, Centre d'Excellence Africain en Sciences Mathématiques et Applications, Bénin."
  },
  {
    image: '/assets/images/CEA (4).webp',
    description: "École Nationale Supérieure de Statistique et d'Économie Appliquée (ENSEA), Côte d'Ivoire."
  },
  {
    image: '/assets/images/CEA (5).webp',
    description: "Centre d'Excellence Africain en Mathématiques Informatique et TIC (CEA-MITIC), UGB, Saint-Louis, Sénégal."
  },
  {
    image: '/assets/images/CEA (6).webp',
    description: "2019 - Centre d'Excellence pour Centre de Formation et de Démonstration en Eau et Agriculture (CFD/EA), Burkina Faso."
  },
  {
    image: '/assets/images/CEA (7).webp',
    description: "Centre d'Excellence Africain en Mines et Environnement Minier (CEA-MEM) de l'INP-HB, Yamoussoukro/Abidjan."
  },
  {
    image: '/assets/images/CEA (8).webp',
    description: "2019 - Centre d'Excellence Régional sur les Sciences Aviaires (CERSA), Université de Lomé."
  },
  {
    image: '/assets/images/CEA (9).webp',
    description: "2019 - Centre d'Excellence Africain en Mathématiques Informatique et TIC (CEA-MITIC), UGB, Saint-Louis, Sénégal."
  },
  {
    image: '/assets/images/CEA (10).webp',
    description: "Février 2019 - CEA-SMA, Centre d'Excellence Africain en Sciences Mathématiques et Applications, Bénin."
  },
  {
    image: '/assets/images/CEA (11).webp',
    description: "2022 - Centre for Training, Research and Expertise in Drug Sciences (CFOREM), Ouagadougou, Burkina Faso."
  },
  {
    image: '/assets/images/CEA (12).webp',
    description: "2022 - Gambia Technical Training Institute, Africa Centre of Excellence ACE Impact Project (STEE), Gambie. AFRICA CENTRE OF EXCELLENCE ACE IMPACT PROJECT (STEE)/ GAMBIA"
  },
  {
    image: '/assets/images/CEA (13).webp',
    description: "Février 2023 - Centre Émergent Environnement Minier de l'EMIG, Niger."
  },
  {
    image: '/assets/images/CEA (14).webp',
    description: "Juin 2023 - Centre d'Excellence Africain en Innovations Biotechnologiques pour l'Élimination des Maladies à Transmission Vectorielle (CEA/ITECH-MTV), Bobo-Dioulasso, Burkina Faso."
  },
  {
    image: '/assets/images/CEA (15).webp',
    description: "Octobre 2023 - Centre d'Excellence Africain UD École d'Ingénieurs (CoE_Djibouti), Djibouti."
  },
  {
    image: '/assets/images/CEA (16).webp',
    description: "Juin 2024 - Centre d'Excellence pour les Productions Animales (Lait, Viande, Cuirs et Peaux) de l'Université Abdou Moumouni de Niamey (CERPP), Niger."
  },
  {
    image: '/assets/images/CEA (17).webp',
    description: "Centre d'Excellence pour le Changement Climatique, la Biodiversité et l'Agriculture Durable (CCBAD), Abidjan, Côte d'Ivoire."
  }
];
const hopitalMbour = '/assets/images/hopital-mbour.webp';
const villaOceane = '/assets/images/villa-océane.webp';
const cfpt = '/assets/images/CFPT-B1.webp';
const cfptTypeA = '/assets/images/TypeA.webp';
const abattoirstivaouane = '/assets/images/abattoirstivaouane02.webp';
const villambour = '/assets/images/Villa-Type-Nord-Américaine-(01).webp';
const villaOuestFoire2 = '/assets/images/Villa-Ouest-Foire-(02).webp';
const gareFret = '/assets/images/projet-amo-garefretlss-01sur01.webp';
const feltiplexsangalkam = '/assets/images/projet-amo-feltiplex-02sur02.webp';
const ConstructiondesLYNAQEdeSédhiou = '/assets/images/ConstructiondesLYNAQEdeSédhiou.webp';

const projects = {
  all: [
    {
      id: 9,
      title: 'Construction des Lycées Nation-Armée pour la Qualité et l\'Équité (Lynaqe) de Sédhiou et Kaffrine, Sénégal',
      category: 'institutionnel',
      description: 'Consultant individuel – Banque Mondiale Sénégal : appui aux études et à la supervision des lycées LYNAQE de Sédhiou et Kaffrine (12 milliards F CFA).',
      image: ConstructiondesLYNAQEdeSédhiou,
      showViewPhotos: true,
      images: [
        ConstructiondesLYNAQEdeSédhiou,
        '/assets/images/Constructiondes LYNAQEde Sédhiou(02).webp'
      ],
    },
    {
      id: 1,
      title: 'Complexe Royal de Kananga (18 000 élèves), République Démocratique du Congo, Kinshasa',
      category: 'institutionnel',
      description: 'Projet de réhabilitation du Complexe scolaire de Kananga pour moderniser l\'éducation.',
      image: kananga,
    },
    {
      id: 2,
      title: "Supervision Régionale des Centres d'Excellence Africains – Banque Mondiale & Association des Universités Africaines (AUA)",
      category: 'institutionnel',
      description: "Centres d'Excellence Africains - Divers projets de formation et de recherche",
      image: aua,
      images: ceaProjects,
    },
    {
      id: 77,
      title: 'Centre Hospitalier National Psychiatrique',
      category: 'public',
      description: 'CHNP de Thiaroye',
      image: '/assets/images/CHNP01.webp',
      showViewPhotos: true,
      images: [
        '/assets/images/CHNP01.webp',
        '/assets/images/CHNP02.webp',
        '/assets/images/CHNP03.webp'
      ]
    },
    {
      id: 10,
      title: 'Centre de Formation Professionnelle et Technique de TYPE A, Sénégal',
      category: 'public',
      description: 'Prototype A sur 7 ha : 1295 m² de salles de cours, 780 m² d’ateliers pratiques, hébergements, équipements annexes, voiries et espaces verts.',
      image: cfptTypeA,
    },
    {
      id: 3,
      title: 'Centre de Formation Professionnelle et Technique de TYPE B, Sénégal',
      category: 'public',
      description: 'Projet sur 10 ha incluant salles, ateliers, hébergements et voiries, pour 1,18 milliard F CFA par centre, soit 24,3 milliards pour 15 centres.',
      image: cfpt,
    },
    {
      id: 4,
      title: 'Villa Grand Standing à Mbour.',
      category: 'particulier',
      description: 'Style nord-américain avec hall, plusieurs salons, chambres master, dressing, garages, piscine, gym, salle TV et billard, coût d\'environ 750 millions F CFA.',
      image: villambour,
      showViewPhotos: true,
      images: [
        villambour,
        '/assets/images/Villa-Type-Nord-Américaine-(02).webp',
        '/assets/images/Villa-Type-Nord-Américaine-(03).webp'
      ]
    },
    {
      id: 5,
      title: 'Construction des Abattoirs de Tivaouane, Sénégal',
      category: 'public',
      description: 'Projet AGETIP de 10 ha : construction d\'un complexe abattoir complet pour 1,1 milliard F CFA plus 83 millions d\'honoraires.',
      image: abattoirstivaouane,
    },
    {
      id: 13,
      title: 'Construction des Abattoirs de Mbour, Sénégal',
      category: 'public',
      description: 'Études architecturales et techniques, ainsi que du suivi des travaux pour la construction des abattoirs de Mbour, pour un coût d\'environ 1,3 milliard FCFA.',
      image: '/assets/images/AbattoirMbour.webp',
    },
    {
      id: 14,
      title: 'Extension et réhabilitation d\'hôpitaux au Sénégal dans le cadre du Projet SN 25 financé par LuxDev.',
      category: 'public',
      description: 'En partenariat avec Davila Architecture (Brésil) : Études et Suivi des Travaux du Projet SN 25.',
      images: [
        '/assets/images/HôpStLouis.webp',
        '/assets/images/HôpPETE.webp',
        '/assets/images/HôpOurossogui.webp',
        '/assets/images/HôpNDIOUM.webp'
      ],
      image: '/assets/images/HôpStLouis.webp', // Gardé pour la rétrocompatibilité
    },
    {
      id: 6,
      title: 'Villa Ouest Foire',
      category: 'particulier',
      description: 'Construction d\'une villa R+3 à Ouest Foire.',
      image: villaOuestFoire2,
    },
    {
      id: 15,
      title: 'Villa Familiale à Fatick',
      category: 'particulier',
      description: 'Simple, spacieuse et aérée.',
      image: '/assets/images/Villa-Fatick-(02).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/Villa-Fatick-(02).webp',
        '/assets/images/Villa-Fatick-(01).webp'
      ],
    },
    {
      id: 16,
      title: 'Extension et Réhabilitation Villa Grand Yoff',
      category: 'particulier',
      description: 'R+1 en R+3 Grand Yoff',
      image: '/assets/images/R+1-en-R+3-Grand-Yoff-(01).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/R+1-en-R+3-Grand-Yoff-(01).webp',
        '/assets/images/R+1-en-R+3-Grand-Yoff-(03).webp'
      ],
    },
    {
      id: 17,
      title: 'Immeuble R+4 à HLM Grand Yoff',
      category: 'particulier',
      description: 'Immeuble R+4',
      image: '/assets/images/Immeuble-R+4-(01).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/Immeuble-R+4-(01).webp',
        '/assets/images/Immeuble-R+4-(03).webp'
      ],
    },
    {
      id: 18,
      title: 'Immeuble à KEUR MBAYE FALL ',
      category: 'particulier',
      description: 'R+5 KEUR MBAYE FALL',
      image: '/assets/images/R+5-Keur-Mbaye-Fall-(02).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/R+5-Keur-Mbaye-Fall-(02).webp',
        '/assets/images/R+5-Keur-Mbaye-Fall-(03).webp'
      ],
    },
    {
      id: 19,
      title: 'VIP R+3 LOUNGE ALMADIES DAKAR',
      category: 'particulier',
      description: 'R+3 VIP Lounge Almadie',
      image: '/assets/images/R+3-VIP-Lounge-Almadie-(01).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/R+3-VIP-Lounge-Almadie-(01).webp',
        '/assets/images/R+3-VIP-Lounge-Almadie-(02).webp'
      ],
    },
    {
      id: 20,
      title: 'Immeuble R+7 Patte d’Oie',
      category: 'particulier',
      description: 'R+7 Patte d’Oie',
      image: '/assets/images/R+7-Patte-d-Oie-(01).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/R+7-Patte-d-Oie-(01).webp',
        '/assets/images/R+7-Patte-d-Oie-(02).webp'
      ],
    },
    {
      id: 21,
      title: 'Villa à Nouakchott Mauritanie',
      category: 'particulier',
      description: 'Villa Grand Standing',
      image: '/assets/images/Villa-grand-standing-(06).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/Villa-grand-standing-(06).webp',
        '/assets/images/Villa-grand-standing-(05).webp'
      ],
    },
    {
      id: 22,
      title: 'VILLA Sacré-Cœur Dakar',
      category: 'particulier',
      description: 'Villa de 300 m2',
      image: '/assets/images/Villa-300-m2-(01).webp',
      showViewPhotos: true,
      images: [
        '/assets/images/Villa-300-m2-(01).webp',
        '/assets/images/Villa-300-m2-(03).webp'
      ],
    },
    {
      id: 7,
      title: 'Gare de Fret de l\'Aéroport Léopold Sédar Senghor, Sénégal',
      category: 'amo',
      description: "Projet de Promotion des Exportations Agricoles - PPEA/Ministère de l'Agriculture : Gare de fret avec chambres froides, bureaux et équipements d'export, financé par la Banque Mondiale et l'État (2,5 M$US).",
      image: gareFret,
      showViewPhotos: true,
      images: [
        gareFret,
        '/assets/images/projet-amo-garefretlss-02.webp'
      ],
    },
    {
      id: 8,
      title: 'Feltiplex de Sangalkam, Sénégal',
      category: 'amo',
      description: "Projet de Promotion des Exportations Agricoles - PPEA/Ministère de l'Agriculture : Centre sur 4000 m² pour le conditionnement de fruits et légumes, avec chambres froides, zones de stockage (1,6 M$US).",
      image: '/assets/images/FeltiSangalkam.webp',
      showViewPhotos: true,
      images: [
        '/assets/images/FeltiSangalkam.webp',
        '/assets/images/projet-amo-feltiplex-01sur02.webp',
        '/assets/images/projet-amo-feltiplex-02sur02.webp',
        '/assets/images/Feltiplex04.webp',
        '/assets/images/Feltiplex05.webp'
      ],
    },
    {
      id: 10,
      title: 'Siège du Ministère de la Santé et de l\'Action Sociale',
      category: 'amo',
      description: 'Consultant individuel : Assistance à la maîtrise d\'ouvrage pour la construction du Ministère de la Santé et de l\'Action Sociale dans le cadre du Programme National de Développement Sanitaire (PNDS) / Convention AGETIP / Ministère de la Santé Financement Banque Mondiale / État du Sénégal (5.4 M$US).',
      image: '/assets/images/MSAS.webp',
      showViewPhotos: true,
      images: [
        '/assets/images/MSAS.webp',
        '/assets/images/MSAS02.webp'
      ],
    },
    {
      id: 11,
      title: 'Bibliothèque de l\'Université Joseph Ki-Zerbo (BUC), Ouagadougou, Burkina Faso',
      category: 'institutionnel',
      description: 'Appui technique au Projet d\'Appui à l\'Enseignement Supérieur (PAES) financé par la Banque mondiale au Burkina Faso : études et suivi des extensions et rénovations d\'infrastructures universitaires à Ouagadougou (BUC, labos, voirie, crèche, salles, amphithéâtres).',
      image: '/assets/images/BUC.webp',
    },
    {
      id: 12,
      title: 'Construction de plus de 650 Salles de Classe, Mauritanie',
      category: 'institutionnel',
      description: 'Mission d\'appui à la Banque mondiale en Mauritanie : audit, évaluation et suivi de la construction d\'environ 650 salles de classe dans le cadre du Projet d\'Appui au Secteur de l\'Éducation de Base (PASEB I & II) dans les régions du Gorgol, Guidimakha, Assaba, Hodh Ech Chargui et Hodh El Gharbi.',
      image: '/assets/images/Maurita650.webp',
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

const Realisations = () => {
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
      // Si on clique sur 'etudes', on affiche les sous-filtres et on sélectionne automatiquement 'public'
      setShowSubFilters(true);
      setActiveFilter('public');
      setPortfolioItems(projects['public']);
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
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Nos Réalisations</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
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
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="bg-white/90 text-blue-600 px-4 py-2 rounded-full font-medium shadow-md flex items-center">
                    {project.showViewPhotos ? 'Voir les photos' : (project.images?.length > 1 ? 'Voir les projets' : 'Voir en grand')}
                    {(project.images?.length > 1 || project.showViewPhotos) && (
                      <Squares2X2Icon className="w-4 h-4 ml-1" />
                    )}
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

export default Realisations;
