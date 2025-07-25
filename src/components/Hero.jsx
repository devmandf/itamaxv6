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
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center px-4 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/pexels-hero-section-background.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/45"></div>
      
      <motion.div 
        className="relative z-10 text-white w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-left pl-8 border-l-4 border-blue-500 mb-12">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-['Jura'] font-bold leading-none tracking-tight"
            variants={itemVariants}
          >
            ITAMAX
          </motion.h1>
          
          <motion.div 
            className="mt-2 h-1.5 bg-gradient-to-r from-blue-500 to-transparent w-48"
            variants={itemVariants}
          />
        </div>

        <motion.div 
          className="text-right mt-16 max-w-xl ml-auto"
          variants={itemVariants}
        >
          <motion.p 
            className="text-xl md:text-2xl font-light leading-relaxed italic"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Cabinet de référence en études architecturales
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mt-4 font-light"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Spécialisé dans les infrastructures publiques et institutionnelles
            <span className="block text-blue-300 font-medium">de grande envergure à travers l'Afrique</span>
          </motion.p>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Hero;
