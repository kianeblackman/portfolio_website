/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '460px',
    },
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
