/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '460px',
    },
    extend: {
      fontFamily: {
        head: ['"Poppins"', 'sans-serif'],
        //Light, Regular, Medium, SemiBold, Bold, Black
        body: ['Roboto Slab', 'serif'],
        // Regular
        merry: ['Merriweather', 'serif'],
        // Regular
        slackey: ['Slackey', 'display'],
        // Regular
      },
    },
  },
  plugins: [],
};

//
