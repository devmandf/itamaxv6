import React, { useState, useEffect, useRef } from 'react';

const TrustedBy = () => {
  const [isPaused, setIsPaused] = useState(false);
  const currentPositionRef = useRef(0);
  const lastTimestampRef = useRef(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const companies = [
    {
      name: 'Banque Mondiale',
      logo: '/assets/images/world-bank-logo.webp',
      url: 'https://www.banquemondiale.org/'
    },
    {
      name: 'Banque Africaine de Développement',
      logo: '/assets/images/logo-bad.webp',
      url: 'https://www.afdb.org/'
    },
    {
      name: 'Programme des Nations Unies pour le développement',
      logo: '/assets/images/pnud-logo-blue.png',
      url: 'https://www.undp.org/'
    },
    {
      name: 'Association des universités africaines',
      logo: '/assets/images/AAU-Official-Logo.webp',
      url: 'https://www.aau.org/'
    }
  ];

  const createInfiniteLogos = () => {
    const repeats = 12;
    const result = [];
    for (let i = 0; i < repeats; i++) {
      companies.forEach((company, idx) => {
        result.push({
          ...company,
          id: `${i}-${idx}`
        });
      });
    }
    return result;
  };

  const infiniteLogos = createInfiniteLogos();

  useEffect(() => {
    const speed = 0.05; // pixels per millisecond (augmenté pour un défilement plus rapide)

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!isPaused && containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth / 2;
        let pos = currentPositionRef.current + delta * speed;
        if (pos >= totalWidth) {
          pos -= totalWidth;
        }
        currentPositionRef.current = pos;
        containerRef.current.style.transform = `translateX(-${pos}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12">
          Ils nous font confiance
        </h2>

        <div className="lg:hidden grid grid-cols-2 gap-8 justify-items-center items-center">
          {companies.map((company, index) => (
            <a
              key={`mobile-${index}`}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-all duration-300 flex justify-center items-center w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <img
                src={company.logo}
                alt={company.name}
                className="h-32 sm:h-40 w-auto object-contain transition-all duration-300 transform group-hover:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:block relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex items-center py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ width: 'max-content', willChange: 'transform' }}
          >
            {infiniteLogos.map((company, index) => (
              <a
                key={company.id || `desktop-${index}`}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-12 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-32 w-auto object-contain"
                  style={{ minWidth: '220px' }}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrustedBy;