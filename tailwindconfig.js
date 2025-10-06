// tailwind.config.cjs (or .js)
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ringColor: { DEFAULT: 'transparent' },
    },
  },
  plugins: [],
};
