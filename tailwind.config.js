/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white-primary": "#FFF5E7",
        "black-primary": "#0D0D0D",
        "brown-primary": "#6B3200",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}
