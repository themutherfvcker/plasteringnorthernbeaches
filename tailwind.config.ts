import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Plastering NB brand palette — TODO refine in design phase
        // Working assumption: clean modern blue + warm accent (will iterate with Lombardo build)
        ink: '#0F172A',         // Deep slate-ink for headings + hero
        brand: '#1E40AF',       // Strong trade-blue for CTAs + accents
        'brand-dark': '#1E3A8A',
        accent: '#F59E0B',      // Warm amber for urgency / phone CTAs
        'accent-light': '#FEF3C7',
        surface: '#F8FAFC',     // Light neutral card background
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
