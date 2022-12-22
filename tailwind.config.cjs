/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '540px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
