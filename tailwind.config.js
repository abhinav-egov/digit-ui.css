module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors:{
      darkblue: '#16222A',
      lightnavyblue: '#3A6073',
      lightblue: '#1D70B8',
      white: '#ffffff',
      black: '#231F20',
      hdblack: '#0B0C0C',
      bggrey: '#F3F2F1',
      grey: '#505A5F',
    },
    fontFamily:{
      sans:['"Roboto Condensed"'],
    },
    fontSize:{
      navbarheader: ['20px','24px'],
      h1: ['25px','40px'],
      a: ['15px','20px'],
      pointer: ['10px', '10px'],
    },
    padding:{
      sm: '8px',
      md: '16px',
      lg: '24px'
    },
    margin:{
      sm: '8px',
      md: '16px',
      lg: '24px'
    },
    fontWeight:{
      light: 300,
      bold: 700,
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
