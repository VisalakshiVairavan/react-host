module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2b1a12',
        roast: '#6f4e37',
        crema: '#f3e6d3',
        foam: '#fbf7f1',
        apron: '#2f5d50',
      },
      fontFamily: {
        display: ['"Young Serif"', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
