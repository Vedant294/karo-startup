/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F8FAFC',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        },
        accent: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          pink: '#EC4899',
        },
        success: '#10B981',
        textPrimary: '#0F172A',
        textSecondary: '#475569',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
        'gradient-light-mesh': 'radial-gradient(at 80% 0%, hsla(189,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.5) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(240,100%,86%,0.4) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,0.2) 0px, transparent 50%)',
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'colored': '0 20px 40px -15px rgba(139, 92, 246, 0.15)',
        'material': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
