/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        gold: {
          DEFAULT: '#fbbf24',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        premium: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-emerald-gold': 'linear-gradient(135deg, #10b981 0%, #fbbf24 100%)',
        'gradient-emerald-gold-reverse': 'linear-gradient(135deg, #fbbf24 0%, #10b981 100%)',
      },
      boxShadow: {
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-gold': '0 0 20px rgba(251, 191, 36, 0.3)',
        'glow-emerald-strong': '0 0 40px rgba(16, 185, 129, 0.5)',
      },
    },
  },
  plugins: [],
}
