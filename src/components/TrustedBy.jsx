import React from 'react';

const TrustedBy = () => {
  // Logos des institutions partenaires
  const companies = [
    {
      name: 'Banque Mondiale',
      logo: '/assets/images/world-bank-logo.webp',
      url: 'https://www.banquemondiale.org/'
    },
    {
      name: 'Banque Africaine de Développement',
      logo: '/assets/images/logo-bad.webp',
      url: 'https://au.int/'
    },
    {
      name: 'Programme des Nations Unies pour le développement',
      logo: '/assets/images/pnud-logo-blue.png',
      url: 'https://au.int/'
    },
    {
      name: 'Association des universités africaines',
      logo: '/assets/images/AAU-Official-Logo.webp',
      url: 'https://au.int/'
    }
    
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12">
          Ils nous font confiance
        </h2>
        <div className="grid grid-cols-2 gap-8 justify-items-center items-center lg:flex lg:flex-wrap lg:justify-center lg:gap-16">
          {companies.map((company, index) => (
            <a 
              key={index} 
              href={company.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 flex justify-center items-center w-full h-full lg:w-auto lg:h-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-16 md:h-24 w-auto object-contain transition-all duration-300 transform group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
