import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return false;
    }

    // Afficher un indicateur de chargement
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/vlamidronbaltazar@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Non fourni',
          subject: formData.subject || 'Sans objet',
          message: formData.message,
          _subject: 'Nouveau message depuis le site itamax.fr',
          _template: 'table',
          _captcha: 'false',
          _honey: '', // Champ honeypot vide
          _next: 'https://itamax.fr/merci',
          _autoresponse: `Bonjour ${formData.name},\n\nMerci pour votre message. Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.\n\nCordialement,\nL'équipe ITAMAX`
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('Message envoyé avec succès ! Nous vous recontacterons bientôt.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      // Réactiver le bouton dans tous les cas
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez discuter d'un projet ? Nous serions ravis d'échanger avec vous.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h3>
            <form 
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* Configuration FormSubmit */}
              {/* Configuration FormSubmit pour itamax.fr */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_subject" value="Nouveau message depuis le site itamax.fr" />
              <input type="hidden" name="_next" value="https://itamax.fr/merci" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Votre nom *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Notre adresse</h4>
                    <p className="mt-1 text-gray-600">
                      Liberté 6 Extension<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:itamax@orange.sn" className="hover:text-blue-600 transition-colors">itamax@orange.sn</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Téléphone</h4>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+221338671855" className="hover:text-blue-600 transition-colors">+221 33 867 18 55</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Horaires d'ouverture</h4>
                    <p className="mt-1 text-gray-600">
                      Lundi - Vendredi : 8h00 - 17h00
                    </p>
                    <p className="mt-1 text-gray-600">
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-100 p-2 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
