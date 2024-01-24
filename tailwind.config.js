/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peach': '#E7816B',
        'black': '#1D1C1E',
        'white': '#FFFFFF',
        'lightpeach': '#FFAD9B',
        'darkgrey': '#333136',
        'lightgrey': '#F1F3F5',
        'bordergrey': '#979797',
      },
      backgroundImage: {
        'hero-mobile-footer': "url(./newimg/mobile-footer-hero.png)",
        'hero-tablet-footer': "url(./newimg/tablet-footer-hero.png)",
        'hero-desktop-footer': "url(./newimg/desktop-footer-hero.png)",
        'hero-mobile-mobile': "url(./newimg/mobile-hero-mobile.png)",
        'hero-mobile-oval': "url(./newimg/mobile-hero-oval.png)",
      }
    },
  },
  plugins: [],
}


