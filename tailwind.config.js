module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { enabled: true, content: ["./example/index.html"] },
  theme: {
    screens: {
      dt: "780px",
    },
    colors: {
      primary: {
        light: "#F18F5E",
        main: "#F47738",
        dark: "#C8602B",
      },
      secondary: "#22394D",
      text: {
        primary: "#0B0C0C",
        secondary: "#505A5F",
      },
      link: {
        normal: "#1D70B8",
        hover: "#003078",
      },
      border: "#D6D5D4",
      "input-border": "#0B0C0C",
      focus: "#F47738",
      error: "#D4351C",
      success: "#00703C",
      black: "#000000",
      grey: {
        dark: "#9E9E9E",
        mid: "#EEEEEE",
        light: "#FAFAFA",
        bg: "#E3E3E3",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Roboto", "Open Sans", "sans-serif"],
      rc: ['"Roboto Condensed"'],
    },
    fontSize: {
      "heading-xl-dt": ["48px", "56px"],
      "heading-xl": ["32px", "40px"],
      "heading-l-dt": ["36px", "40px"],
      "heading-l": ["24px", "32px"],
      "heading-m-dt": ["24px", "32px"],
      "heading-m": ["18px", "28px"],
      "heading-s": ["16px", "24px"],
      "caption-xl-dt": ["27px", "32px"],
      "caption-xl": ["18px", "26px"],
      "caption-l-dt": ["24px", "28px"],
      "caption-l": ["18px", "21px"],
      "caption-m-dt": ["19px", "23px"],
      "caption-m": ["16px", "19px"],
      "form-field": ["16x", "20px"],
      "body-l-dt": ["19px", "28px"],
      "body-l": ["16px", "24px"],
      "body-s-dt": ["16px", "24px"],
      legend: ["19px", "23px"],
      link: ["16px", "19px"],
      "text-btn": ["16px", "24px"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    padding: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "36px",
    },
    margin: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      10: "10px",
    },
    boxShadow: {
      card: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
      radiobtn: "0 0 0 5px #F47738",
    },
    inset: {
      0: 0,
      10: "10px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
