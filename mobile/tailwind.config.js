/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#eff6fe',
        primary: '#908',
      },
      fontFamily: {
        regular: 'Ubuntu_400Regular',
        medium: 'Ubuntu_500Medium',
        bold: 'Ubuntu_700Bold',
      },
    },
  },
  plugins: [],
};
