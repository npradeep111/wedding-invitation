/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#E4C766',
          dark: '#9C7C1B',
        },
        ivory: '#FFFDF7',
        beige: '#F3ECDD',
        forest: {
          DEFAULT: '#183A2F',
          light: '#264F40',
          dark: '#0F2620',
        },
        rosegold: '#D4A373',
      },
      fontFamily: {
        heading: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, rgba(201,162,39,0.15) 0%, rgba(24,58,47,0) 70%)',
        'gold-shimmer': 'linear-gradient(110deg, #9C7C1B 0%, #E4C766 25%, #C9A227 50%, #E4C766 75%, #9C7C1B 100%)',
      },
      boxShadow: {
        gold: '0 0 25px rgba(201,162,39,0.35)',
        card: '0 10px 40px rgba(15,38,32,0.12)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.6)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        shimmer: 'shimmer 3.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 2.2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
