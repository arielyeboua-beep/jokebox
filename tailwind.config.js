/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0F0B1A',
          deep: '#08050E',
          card: '#181226',
          cardLight: '#221A36',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        neon: {
          orange: '#FF7A1A',
          pink: '#FF2E88',
          green: '#2BE38B',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          muted: '#9E97AA',
          subtle: '#6A637A',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        dramatic: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'neon-orange': '0 0 30px rgba(255, 122, 26, 0.35)',
        'neon-pink': '0 0 30px rgba(255, 46, 136, 0.35)',
        'neon-green': '0 0 30px rgba(43, 227, 139, 0.35)',
        'card-elevated': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
