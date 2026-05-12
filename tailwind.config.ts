import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: 'rgba(15, 23, 42, 0.72)',
      },
      boxShadow: {
        glow: '0 0 80px rgba(139, 92, 246, 0.18)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(79, 70, 229, 0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.18), transparent 28%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
