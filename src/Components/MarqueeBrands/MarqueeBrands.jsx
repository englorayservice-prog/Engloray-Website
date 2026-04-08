import React from 'react';
import './MarqueeBrands.css';

import logoOne from '../../assets/logos/amoura-Photoroom.png';
import logoTwo from '../../assets/logos/maax life-Photoroom.png';
import logoThree from '../../assets/logos/studio makeup-Photoroom.png';
import logoFour from '../../assets/logos/Pavizham-Photoroom.png';
import logoFive from '../../assets/logos/ecec logo.png';
import logoSix from '../../assets/logos/aara-Photoroom.png';
import logoSeven from '../../assets/logos/amico-Photoroom.png';
import logoEight from '../../assets/logos/brandex-Photoroom.png';
import logoNine from '../../assets/logos/nestoria-Photoroom.png';
import logoTen from '../../assets/logos/vels.png';

const MarqueeBrands = () => {
  // Array of online placeholder logos (replace with your actual client logos later)
  const clientLogos = [
    { src: logoTwo, name: "Maax Life" },
    { src: logoFour, name: "Pavizham", scale: 1.3 }, // Increased size
    { src: logoFive, name: "ECEC" },
    { src: logoSix, name: "Aara" },
    { src: logoSeven, name: "Amico", scale: 0.85 }, // Decreased size
    { src: logoEight, name: "Brandex" },
    { src: logoNine, name: "Nestoria" },
    { src: logoTen, name: "Vels" }
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-title">Trusted By Industry Leaders</h2>
        
        <div className="marquee-container">
          <div className="marquee-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-item">
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="client-logo"
                  style={{ transform: `scale(${logo.scale || 1})` }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeBrands;