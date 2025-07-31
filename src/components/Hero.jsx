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
        <div className="text-left pl-8 mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, rgba(67, 82, 235, 1), transparent)' }}></div>
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-['Jura'] font-bold leading-none tracking-tight"
            variants={itemVariants}
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
            <span 
              className="inline-block font-medium mt-2 px-3 py-1 rounded-md" 
              style={{ 
                color: 'white',
                backgroundColor: 'rgba(67, 82, 235, 0.1)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              de grande envergure à travers l'Afrique
            </span>
          </motion.p>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default Hero;
