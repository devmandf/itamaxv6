import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Merci = () => {
  // Défilement vers le haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
            <CheckCircleIcon className="h-16 w-16 text-green-600" aria-hidden="true" />
          </div>
          
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Message envoyé avec succès !
          </h2>
          
          <p className="mt-4 text-gray-600">
            Nous avons bien reçu votre message et vous remercions de nous avoir contactés.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
          
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Retour à l'accueil
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Vous allez être redirigé automatiquement vers la page d'accueil dans <span id="countdown">10</span> secondes.
          </p>
        </motion.div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Besoin d'aide immédiate ? Appelez-nous au <a href="tel:+33766320970" className="text-blue-600 hover:text-blue-800">07 66 32 09 70</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merci;
