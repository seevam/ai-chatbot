/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // WhatsApp green theme
        primary: {
          50: '#e7f5ec',
          100: '#c3e6cd',
          200: '#9dd6ac',
          300: '#75c68a',
          400: '#56ba70',
          500: '#25D366', // WhatsApp green
          600: '#20c05c',
          700: '#1aaa50',
          800: '#159444',
          900: '#0c6e2f',
        },
        // WhatsApp specific colors
        'wa-incoming': '#FFFFFF',
        'wa-outgoing': '#DCF8C6',
        'wa-bg': '#ECE5DD',
        'wa-header': '#075E54',
        'wa-dark': '#128C7E',
        'wa-teal': '#00A884',
        safe: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
}
