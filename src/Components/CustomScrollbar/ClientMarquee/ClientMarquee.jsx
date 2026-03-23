import React from 'react';
import './ClientMarquee.css';

// Import all client logos from the shared assets/logos folder
import techLogoOne from '../../../assets/logos/aara-Photoroom.png';
import techLogoTwo from '../../../assets/logos/amico_logo_transparent_text.png';
import techLogoThree from '../../../assets/logos/malar-Photoroom.png';
import techLogoFour from '../../../assets/logos/manjari-Photoroom.png';
import techLogoFive from '../../../assets/logos/nestoria-Photoroom.png';
import techLogoSix from '../../../assets/logos/say-Photoroom.png';
import techLogoSeven from '../../../assets/logos/tamil_naturals_transparent_text.png';
import techLogoEight from '../../../assets/logos/maax life-Photoroom.png';
import techLogoNine from '../../../assets/logos/brandex_transparent_text.png';
import techLogoTen from '../../../assets/logos/wooden street-Photoroom.png';
import techLogoEleven from '../../../assets/logos/amoura-Photoroom.png';
import techLogoTwelve from '../../../assets/logos/coreFitness-Photoroom.png';
import techLogoThirteen from '../../../assets/logos/ecec logo.png';
import techLogoFourteen from '../../../assets/logos/studio makeup-Photoroom.png';
import techLogoFifteen from '../../../assets/logos/Pavizham-Photoroom.png';

const logos = [
    { id: 1, src: techLogoOne, alt: 'Aara' },
    { id: 2, src: techLogoTwo, alt: 'Amico' },
    { id: 3, src: techLogoThree, alt: 'Malar' },
    { id: 4, src: techLogoFour, alt: 'Manjari' },
    { id: 5, src: techLogoFive, alt: 'Nestoria' },
    { id: 6, src: techLogoSix, alt: 'Say', },
    { id: 7, src: techLogoSeven, alt: 'Tamil Naturals', },
    { id: 8, src: techLogoEight, alt: 'Maax Life' },
    { id: 9, src: techLogoNine, alt: 'Brandex' },
    { id: 10, src: techLogoTen, alt: 'Wooden Street' },
    { id: 11, src: techLogoEleven, alt: 'Amoura' },
    { id: 12, src: techLogoTwelve, alt: 'Core Fitness' },
    { id: 13, src: techLogoThirteen, alt: 'ECEC' },
    { id: 14, src: techLogoFourteen, alt: 'Studio Makeup' },
    { id: 15, src: techLogoFifteen, alt: 'Pavizham', },
];

const ClientMarquee = () => {
    // All 15 logos scroll; viewport is CSS-constrained to show ~3 at a time
    const duplicated = [...logos, ...logos];

    return (
        <section className="client-marquee-section">
            <p className="client-marquee-title">Trusted by 200+ Clients</p>

            <div className="client-marquee-wrapper">
                {/* Left fade edge */}
                <div className="client-marquee-fade client-marquee-fade--left" />

                <div className="client-marquee-track-container">
                    <div className="client-marquee-track">
                        {duplicated.map((logo, idx) => (
                            <div key={idx} className="client-marquee-item">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={`client-marquee-logo ${logo.keepOriginal ? 'keep-original' : ''}`}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right fade edge */}
                <div className="client-marquee-fade client-marquee-fade--right" />
            </div>
        </section>
    );
};

export default ClientMarquee;
