/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightBlue: '#233F95',
        lightGrayishBlue: '#A3B3C9',  
      },
    },
  },
  plugins: [],
}
