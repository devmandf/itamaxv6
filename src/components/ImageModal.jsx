import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ImageModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Récupérer les images et gérer à la fois les tableaux simples et les tableaux d'objets
  const images = project.images ? 
    (Array.isArray(project.images[0]) ? project.images : project.images) 
    : (project.image ? [project.image] : []);

  const currentImage = images[currentImageIndex];
  const currentImageUrl = currentImage ? 
    (typeof currentImage === 'string' ? currentImage : (currentImage.image || '')) 
    : '';
  
  // Récupérer la description de l'image courante si elle existe, sinon utiliser la description du projet
  let currentDescription = project?.description;
  if (currentImage && typeof currentImage === 'object' && currentImage.description) {
    currentDescription = currentImage.description;
  }

  // Vérifier si le projet a plusieurs images
  const hasMultipleImages = images.length > 1;

  // Gérer la navigation entre les images
  const goToNextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Gérer la touche Échap et les flèches
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasMultipleImages) {
        goToNextImage();
      } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
        goToPrevImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, hasMultipleImages]);

  if (!isOpen || !currentImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/90" />
      
      <motion.div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col z-10"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            type: 'spring',
            damping: 25,
            stiffness: 300
          }
        }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 overflow-hidden flex items-center justify-center">
          <img 
            src={currentImageUrl} 
            alt={`${project.title} - Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-contain max-h-[70vh]"
            key={currentImageIndex}
          />
          
          {hasMultipleImages && (
            <>
              {/* Indicateurs en haut */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'w-6 bg-[rgba(52,235,15,1)]' 
                        : 'bg-gray-800/80 hover:bg-gray-900'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Bouton précédent */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevImage();
                }}
                className="absolute left-4 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                aria-label="Image précédente"
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </button>
              
              {/* Bouton suivant */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                className="absolute right-4 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                aria-label="Image suivante"
              >
                <ChevronRightIcon className="w-8 h-8" />
              </button>
              
              {/* Compteur en bas à droite */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1.5 rounded-md font-['Jura']">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        
        <div className="p-4 bg-[rgba(31,41,55,1)] border-t border-gray-700">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          {currentDescription && (
            <p className="mt-2 text-gray-300">{currentDescription}</p>
          )}
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Fermer la modale"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
};

export default ImageModal;
