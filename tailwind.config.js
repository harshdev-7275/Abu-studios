/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        honeyYellow: '#F5AB00',
        darkBlack: '#000000',
        powderWhite: '#FFFFFC',
        darkBlue: '#2927A6',
        lightBlue: '#5C5B94',
        orange: '#F4562A',
        boneWhite: '#E1DCC9',
        extraBoneWhite: '#E0BD83',
      }
    },
  },
  plugins: [],
}
