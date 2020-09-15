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
      headerblack: '#0B0C0C',
      bggrey: '#F3F2F1',
      grey: '#505A5F',
      radioblack: '#222222',
    },
    fontFamily:{
      sans:['"Roboto Condensed"'],
    },
    fontSize:{
      navbarheader: ['20px','24px'],
      h1: ['28px','40px'],
      a: ['15px','20px'],
      pointer: ['10px', '10px'],
      cardtext: ['16px','24px'],
      label: ['19px', '25px'],
    },
    padding:{
      sm: '8px',
      md: '16px',
      lg: '24px'
    },
    margin:{
      radiobtnx: '7.5px',
      sm: '8px',
      radiobtnleft: '15px',
      md: '16px',
      lg: '24px',
    },
    fontWeight:{
      light: 300,
      bold: 700,
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '10': '10px'
    },
    boxShadow:{
      card: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
      radiobtn: '0 0 0 5px rgb(29, 112, 184)',
    },
    inset:{
      '0': 0,
      '10': '10px'
    },
    extend: {},
  },
  variants: {
    
  },
  plugins: [],
}
