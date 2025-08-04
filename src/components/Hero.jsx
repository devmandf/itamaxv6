import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants pour le texte
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/pexels-hero-section-background.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/45"></div>
      
      <motion.div 
        className="relative z-10 text-white w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zoom: 1, maxWidth: '100%' }}
      >
        <div className="text-left pl-8 mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, rgba(67, 82, 235, 1), transparent)' }}></div>
          <motion.h1 
            className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-['Jura'] font-bold leading-none tracking-tight break-words overflow-visible"
            variants={itemVariants}
            style={{ wordBreak: 'break-word' }}
          >
            ITAMAX
          </motion.h1>
          
          <motion.div 
            className="mt-2 h-1.5 w-48"
            style={{ background: 'linear-gradient(to right, rgba(67, 82, 235, 1), transparent)' }}
            variants={itemVariants}
          />
        </div>

        <motion.div 
          className="text-right mt-8 sm:mt-12 md:mt-16 w-full max-w-full sm:max-w-xl ml-auto"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed italic break-words"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ wordBreak: 'break-word' }}
          >
            Cabinet d'architecture de référence au Sénégal
          </motion.h1>
          <motion.div 
            className="text-base sm:text-lg md:text-xl mt-4 font-light"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="mb-2 break-words">
              Experts en conception architecturale et aménagement intérieur à Dakar
            </p>
            <div className="inline-block max-w-full">
              <span 
                className="inline-block font-medium mt-2 px-3 py-1 rounded-md break-words" 
                style={{ 
                  color: 'white',
                  backgroundColor: 'rgba(67, 82, 235, 0.1)',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  wordBreak: 'break-word',
                  display: 'inline-block',
                  maxWidth: '100%'
                }}
              >
                Réalisations d'envergure à travers l'Afrique de l'Ouest
              </span>
            </div>
          </motion.div>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Hero;
