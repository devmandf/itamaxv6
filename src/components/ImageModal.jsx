import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const ImageModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
  
  // Récupérer les images et gérer à la fois les tableaux simples et les tableaux d'objets
  const images = project.images ? 
    (Array.isArray(project.images[0]) ? project.images : project.images) 
    : (project.image ? [project.image] : []);

  // Chargement de l'image courante
  const currentImageData = images[currentImageIndex];
  const currentImageUrl = currentImageData ? 
    (typeof currentImageData === 'string' ? currentImageData : (currentImageData.image || '')) 
    : '';
  
  // Récupérer la description de l'image courante si elle existe, sinon utiliser la description du projet
  let currentDescription = project?.description;
  if (currentImageData && typeof currentImageData === 'object' && currentImageData.description) {
    currentDescription = currentImageData.description;
  }

  // Vérifier si le projet a plusieurs images
  const hasMultipleImages = images.length > 1;

  // Gérer le chargement des images
  const loadImage = useCallback((url) => {
    if (!url) return;
    
    setIsLoading(true);
    const img = new window.Image();
    img.src = url;
    
    img.onload = () => {
      setCurrentImage(url);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.error('Erreur de chargement de l\'image:', url);
      setIsLoading(false);
    };
  }, []);

  // Charger l'image quand l'URL change
  useEffect(() => {
    if (currentImageUrl) {
      loadImage(currentImageUrl);
    }
  }, [currentImageUrl, loadImage]);

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

  // Style du conteneur de l'image
  const imageContainerStyle = {
    // Pas de style particulier, le contenu définira la hauteur
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/90" />
      
      <motion.div 
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col z-10"
        style={{ maxHeight: '90vh' }}
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
        {/* Conteneur d'image */}
        <div 
          className="relative w-full flex items-center justify-center"
          style={imageContainerStyle}
        >
          {/* Conteneur de l'image */}
          <div className="w-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {/* Image */}
              <motion.div
                key={`image-${currentImageIndex}`}
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentImage && (
                  <div className="w-full flex items-center justify-center">
                    <img 
                      src={currentImage} 
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      onLoad={() => setIsLoading(false)}
                      style={{ visibility: isLoading ? 'hidden' : 'visible' }}
                    />
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="text-white"
                        >
                          <ArrowPathIcon className="w-12 h-12" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
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
        
        <div className="p-4 bg-[rgba(31,41,55,1)] border-t border-gray-700 min-h-[120px]">
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
