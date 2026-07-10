import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Light EdTech Palette ───────────────────────────────
        brand: {
          purple: '#6C4CF1',
          purpleHover: '#5B3DD0',
          purpleLight: '#EDE9FE',
          indigo: '#4F46E5',
          indigoLight: '#EEF2FF',
          lime: '#84CC16',
          limeLight: '#F7FEE7',
          // Legacy dark-theme tokens (kept for compatibility)
          navy: '#0B132B',
          sky: '#0ea5e9',
          skyHover: '#38bdf8',
          red: '#e30613',
          blue: '#1d4ed8',
          cyan: '#00f0ff',
          pink: '#ec4899',
          gold: '#fbbf24',
          emerald: '#10b981',
        },
        surface: {
          white: '#FFFFFF',
          alt: '#F7F8FC',
          card: '#FFFFFF',
          border: '#ECEEF5',
          muted: '#F1F3F9',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          muted: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        // Legacy dark bg tokens
        bg: {
          dark: '#0a1128',
          card: 'rgba(13, 21, 39, 0.45)',
          cardHover: 'rgba(20, 30, 54, 0.6)',
          island: 'rgba(7, 11, 25, 0.6)',
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        heading: ['"Plus Jakarta Sans"', 'Outfit', ...defaultTheme.fontFamily.sans],
        body: ['"Plus Jakarta Sans"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        // New light-theme shadows
        'card-soft': '0 2px 16px 0 rgba(108, 76, 241, 0.06), 0 1px 4px 0 rgba(15, 23, 42, 0.04)',
        'card-hover': '0 8px 32px 0 rgba(108, 76, 241, 0.12), 0 2px 8px 0 rgba(15, 23, 42, 0.06)',
        'btn-purple': '0 4px 20px 0 rgba(108, 76, 241, 0.35)',
        'btn-purple-hover': '0 8px 30px 0 rgba(108, 76, 241, 0.45)',
        'floating-card': '0 20px 60px -10px rgba(108, 76, 241, 0.12)',
        // Legacy
        'glow-sky': '0 0 15px rgba(14, 165, 233, 0.35)',
        'glow-navy': '0 0 15px rgba(11, 19, 43, 0.25)',
        'glow-red': '0 0 15px rgba(227, 6, 19, 0.35)',
        'glow-blue': '0 0 15px rgba(29, 78, 216, 0.35)',
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.25)',
        'glow-purple': '0 0 15px rgba(168, 85, 247, 0.25)',
        'glow-pink': '0 0 15px rgba(236, 72, 153, 0.25)',
        'floating': '0 20px 45px -10px rgba(0, 0, 0, 0.5)',
        'inset-white': 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'island': '16px',
        'navbar': '20px',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'scale-in': 'scaleIn 0.4s ease-out both',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
