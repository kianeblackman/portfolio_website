/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '540px',
    },
    extend: {
      fontFamily: {
        head: ['"Poppins"', 'sans-serif'],
        //Light, Regular, Medium, SemiBold, Bold, Black
        body: ['Merriweather', 'serif'],
        // Light
      },
    },
  },
  plugins: [],
};

//
