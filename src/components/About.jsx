import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaRulerCombined, FaLeaf } from 'react-icons/fa';

const About = () => {
  const stats = [
    { value: '15+', label: 'Années d\'expérience' },
    { value: '200+', label: 'Projets réalisés' },
    { value: '12', label: 'Pays d\'intervention' },
  ];

  const features = [
    {
      icon: <FaBuilding className="text-3xl text-blue-600" />,
      title: 'Expertise reconnue',
      description: 'Notre équipe d\'architectes primés apporte une vision novatrice à chaque projet.'
    },
    {
      icon: <FaRulerCombined className="text-3xl text-blue-600" />,
      title: 'Approche sur mesure',
      description: 'Chaque projet est unique et mérite une solution personnalisée et innovante.'
    },
    {
      icon: <FaLeaf className="text-3xl text-blue-600" />,
      title: 'Engagement durable',
      description: 'Nous intégrons des pratiques éco-responsables dans toutes nos réalisations.'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Colonne de gauche - Image */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 w-full max-w-xl mx-auto">
              <img 
                src="/assets/images/imagine.webp" 
                alt="Projet architectural Itamax"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '550px' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-blue-600 rounded-2xl -z-10 opacity-20"></div>
          </motion.div>

          {/* Colonne de droite - Contenu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Notre Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            L'innovation architecturale<span className="text-blue-600"> au service de l'Afrique</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chez ITAMAX, nous ne concevons pas que des bâtiments. Nous façonnons des espaces qui inspirent, transforment et élèvent les communautés à travers l'Afrique. Notre approche allie esthétique audacieuse et fonctionnalité optimale, tout en respectant notre engagement envers le développement durable.
            </p>
            
            {/* Caractéristiques */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-blue-50">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
