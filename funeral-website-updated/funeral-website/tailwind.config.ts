import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#2C2C2C',
          dark: '#1A1A1A',
          light: '#404040',
        },
        beige: {
          DEFAULT: '#E8DCC8',
          dark: '#D4C4B0',
          light: '#F5F0E8',
        },
        gold: {
          DEFAULT: '#C9A86A',
          dark: '#B59555',
          light: '#DBC eighteen7F',
        },
        cream: {
          DEFAULT: '#FAFAFA',
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-crimson)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
