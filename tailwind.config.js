/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: '#f4f4f4',
          100: '#e1e1e1',
          200: '#c5c5c5',
          300: '#a6a6a6',
          400: '#898989',
          500: '#6f6f6f',
          600: '#565656',
          700: '#404040',
          800: '#2b2b2b',
          900: '#1a1a1a',
          950: '#0f0f0f',
        },
        gold: {
          burned: '#B89741',
          light: '#E2C778',
          dark: '#856A27'
        },
        silver: {
          cold: '#9CA3AF',
          dark: '#4B5563'
        },
        crimson: {
          deep: '#8B0000',
          glow: '#C41E3A'
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'fog': 'url("/fog-texture.png")', // We can use CSS gradients/mix-blend instead of an actual image if possible, to keep it light.
      },
      animation: {
        'fog-flow': 'fogFlow 30s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fogFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
