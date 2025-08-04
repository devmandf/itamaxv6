import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';

const projects = [
  {
    title: 'Siège du Ministère de la Santé et de l\'Action Sociale',
    description: 'Consultant individuel : Assistance à la maîtrise d\'ouvrage pour la construction du Ministère de la Santé et de l\'Action Sociale dans le cadre du Programme National de Développement Sanitaire (PNDS) / Convention AGETIP / Ministère de la Santé Financement Banque Mondiale / État du Sénégal (5,4 M$US).',
    image: '/assets/images/MSAS.webp',
  },
  {
    title: 'Siège du Ministère de l\'Environnement et de la Protection de la Nature (MEPN)',
    description: 'Bâtiment administratif éco-conçu intégrant des solutions durables et des technologies vertes pour un impact environnemental minimal.',
    image: '/assets/images/MEPN02.webp',
  },
  {
    title: 'Siège de la Société Sénégalaise de Pêche et d\'Armement (SOPASEN)',
    description: 'Siège moderne et fonctionnel pour le leader sénégalais de la pêche et de l\'armement maritime.',
    image: '/assets/images/sopasen01.webp',
  },
];

const FeaturedProjects = () => {
  // La section est masquée comme demandé
  return null;
};

export default FeaturedProjects;
