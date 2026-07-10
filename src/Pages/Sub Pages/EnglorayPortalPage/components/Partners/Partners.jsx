import React from 'react';

// ─── All partner logos from case study images ───────────────────────────────
// Base path points to your local asset folder in the repo
const BASE = 'src/assets/case study images';

const allLogos = [
  // Application
  { name: 'Aara',             src: `${BASE}/Application/aara.png` },
  { name: 'Orthopedic Clinic',src: `${BASE}/Application/orthopetic clinic.png` },
  { name: 'Pavizham',         src: `${BASE}/Application/pavizham.jpg` },

  // Branding
  { name: 'Amoura',           src: `${BASE}/branding/amoura.png` },
  { name: 'ECEC',             src: `${BASE}/branding/ecec.png` },
  { name: 'Isha Bites',       src: `${BASE}/branding/isha bites.png` },
  { name: 'Malar',            src: `${BASE}/branding/malar.jpg` },
  { name: 'Nestoria',         src: `${BASE}/branding/Nestoria.jpg` },
  { name: 'Say',              src: `${BASE}/branding/say.jpg` },
  { name: 'Via Nature',       src: `${BASE}/branding/via nature.png` },

  // Products
  { name: 'Amico',            src: `${BASE}/products/amico.png` },
  { name: 'Brandex',          src: `${BASE}/products/brandex.png` },
  { name: 'Maax Life',        src: `${BASE}/products/maax life.png` },
  { name: 'SR Foods',         src: `${BASE}/products/sr Foods.jpg` },
  { name: 'Studio Makeup',    src: `${BASE}/products/studio makeup.png` },
  { name: 'Tamil Naturals',   src: `${BASE}/products/tamil natrals.png` },

  // UI/UX
  { name: 'Divya Makeovers',  src: `${BASE}/uiux/Divya makeovers.jpg` },
  { name: 'Gym Life',         src: `${BASE}/uiux/gym life.png` },
  { name: 'Viaan',            src: `${BASE}/uiux/viaan.jpg` },

  // Websites
  { name: 'Green Park School',src: `${BASE}/websites/green park school.png` },
  { name: 'Mitt Travels',     src: `${BASE}/websites/mitt travels.jpg` },
];

// ─── Split 21 logos into 3 rows of 7 (no repeats) ────────────────────────────
const ROW_SIZE = 7;
const row1Logos = allLogos.slice(0, ROW_SIZE);          // indices 0-6
const row2Logos = allLogos.slice(ROW_SIZE, ROW_SIZE * 2); // indices 7-13
const row3Logos = allLogos.slice(ROW_SIZE * 2);          // indices 14-20

// ─── Single marquee row ───────────────────────────────────────────────────────
const MarqueeRow = ({ logos, direction = 'left', speed = 30 }) => {
  // Duplicate once so the scroll feels infinite
  const items = [...logos, ...logos];
  const animationName = direction === 'left' ? 'scrollLeft' : 'scrollRight';

  return (
    <div className="partners-track-wrapper">
      <div
        className="partners-track"
        style={{
          animationName,
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {items.map((logo, idx) => (
          <div key={idx} className="partner-card">
            <img
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="partner-logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
export const Partners = () => {
  return (
    <section className="partners-section" id="partners">

      {/* Keyframe styles injected inline so the component is self-contained */}
      <style>{`
        .partners-section {
          padding: 18px 0;
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
          overflow: hidden;
        }

        /* ── Header ── */
        .partners-header {
          text-align: center;
          margin-bottom: 10px;
          padding: 0 24px;
        }
        .partners-eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0ea5e9;
          margin-bottom: 4px;
        }
        .partners-title {
          font-size: clamp(18px, 2.4vw, 26px);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px;
          line-height: 1.15;
        }
        .partners-subtitle {
          font-size: 13px;
          color: #64748b;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* ── Track wrapper — clips overflow & adds soft fade edges ── */
        .partners-track-wrapper {
          overflow: hidden;
          position: relative;
          margin-bottom: 0;
        }
        .partners-track-wrapper::before,
        .partners-track-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .partners-track-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .partners-track-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        /* ── The scrolling strip ── */
        .partners-track {
          display: flex;
          width: max-content;
          gap: 14px;
          padding: 2px 0;
          will-change: transform;
        }

        /* ── Individual logo card ── */
        .partner-card {
          flex-shrink: 0;
          width: 104px;
          height: 52px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        @media (min-width: 768px) {
          .partner-card {
            width: 128px;
            height: 60px;
            border-radius: 12px;
            padding: 8px 12px;
          }
        }

        /* Conic gradient radium light beam */
        .partner-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          transform: translate(-50%, -50%) rotate(0deg);
          background: conic-gradient(
            from 0deg,
            transparent 50%,
            #0ea5e9 70%,
            #00f0ff 90%,
            #0ea5e9 95%,
            transparent 100%
          );
          z-index: -2;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        /* White mask inside the card, leaving a 1.5px border glow */
        .partner-card::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          background: #ffffff;
          border-radius: 12px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .partner-card:hover {
          border-color: transparent;
          box-shadow: 0 8px 24px rgba(14, 165, 233, 0.15);
          transform: translateY(-2px);
        }

        .partner-card:hover::before {
          opacity: 1;
          animation: rotateRadium 2s linear infinite;
        }

        .partner-card:hover::after {
          opacity: 1;
        }

        .partner-logo {
          max-width: 100%;
          max-height: 34px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(60%);
          opacity: 0.8;
          position: relative;
          z-index: 2;
          transition: filter 0.25s, opacity 0.25s;
        }

        .partner-card:hover .partner-logo {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* ── Keyframes ── */
        @keyframes rotateRadium {
          0%   { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Respect reduced-motion preference ── */
        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="partners-header section-heading-glow">
        <span className="partners-eyebrow relative" style={{zIndex: 10}}>Our Partners</span>
        <h2 className="partners-title relative" style={{zIndex: 10}}>Brands We've Built With</h2>
        <p className="partners-subtitle">
          Trusted by startups, clinics, schools, and consumer brands across industries
          — from identity design to full-stack digital products.
        </p>
      </div>

      {/* Row 1 → left to right */}
      <MarqueeRow logos={row1Logos} direction="left"  speed={28} />

      {/* Row 2 → right to left */}
      <MarqueeRow logos={row2Logos} direction="right" speed={32} />

      {/* Row 3 → left to right */}
      <MarqueeRow logos={row3Logos} direction="left"  speed={26} />

    </section>
  );
};

export default Partners;