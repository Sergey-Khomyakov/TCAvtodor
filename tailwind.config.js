/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,mjs,jsx,pug}", "./*.html"],
  theme: {
    extend: {
      marging:{
        'unset': 'unset',
      },
      width: {
        'fill-available': 'fill-available',
      },
      container:{
        screens:{
          xs: "100%",
          sm: "100%",
          md: '100%',
          lg: '90rem',
        }
      },
      transitionProperty: {
        'max-width': 'max-width',
        'width': 'width',
        'bg' : 'background-color',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(151deg, rgba(255,81,0,1) 0%, rgba(255,173,0,1) 100%)',
      },
      width: {
        'fill-available': 'fill-available',
      },
      gridTemplateColumns: {
        'full': '100%',
        'auto-1fr': 'auto 1fr',
        'auto-auto': 'auto auto',
        '1fr-auto': '1fr auto',
        '1fr-1fr': '1fr 1fr',
        'auto-auto-1fr': 'auto auto 1fr',
        '1fr-auto-1fr' : '1fr auto 1fr',
        'auto-1fr-auto' : 'auto 1fr auto',
        'auto-auto-auto': 'auto auto auto',
      },
      fontFamily:{
        'Helvetica': ['Helvetica', 'sans-serif'],
      },
      animation: {
        'custome-pulse': 'customePulse 5s infinite linear',
      },
      keyframes: {
        customePulse: {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
           },
          '90%': { 
            transform: 'scale(3)',
            opacity: '0'
           },
          '100%': { 
            transform: 'scale(1)',
            opacity: '0'
           },
        }
      },
      colors:{
        transparent: 'transparent',
        white: '#ffffff',
        black: '#404040',
        primary: '#fd7e14',
        primaryHover: '#EE5006',
        secondary: '#6c707d',
        darkGray: '#343A40',
        lightGray: '#f5f5f5',
        orange:{
          '100': "#fea860",
          '200': "#fd9a47",
          '300': "#fd8c2d",
          '400': "#fd7e14",
          '500': "#f57102",
          '600': "#dc6502",
          '700': "#c35a02",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("tailwindcss-animation-delay"),
  ],
}

