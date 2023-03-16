import { DefaultTheme } from "styled-components";

export const biesseTheme: DefaultTheme = {
  name: "Biesse Group",
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
    xxl: 1600,
  },
  card: {
    borderRadius: "40px",
    boxShadow: "0 0 20px 0 rgba(140,140,140,0.5)",
  },
  button: {
    borderRadius: "20px",
  },
  input: {
    borderRadius: "25px",
    boxShadow: {
      dark: "rgba(0, 0, 0, 0.8)",
      light: "rgba(135, 135, 135, 0.8)",
    },
    borderColor: "#C4C4C4",
  },
  videoPlayer: {
    buttonBoxShadow: "0 2px 10px 0 rgba(0,0,0,0.5)",
  },
  eventCard: {
    boxShadow: "rgba(140,140,140,0.5)",
  },
  color: {
    primary: "#6D6E70",
    secondary: "#6D6E70",
    white: "#FFF",
    black: "#252525",
    lightGray: "#F5F5F5",
    gray: "#A2A2A2",

    material: {
      wood: "#F9942E",
      composite: "#8080FF",
      glass: "#38BEEF",
      metal: "#93949A",
      stone: "#F9942E",
    },
  },
  font: {
    tablet: {
      body: {
        xs: "12px",
        lg: "16px",
      },
      headings: {
        xl: "40px",
        xs: "20px",
      },
    },
    mobile: {
      body: {
        md: "14px",
        lg: "14px",
      },
      headings: {
        xxl: "30px",
        xl: "30px",
        md: "25px",
        sm: "20px",
        xs: "20px",
      },
    },
    regular: {
      body: {
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      headings: {
        xxl: "50px",
        xl: "45px",
        lg: "40px",
        md: "34px",
        sm: "30px",
        xs: "24px",
      },
    },
    weight: {
      book: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    family:
      'NB International Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",sans-serif',
  },
  transition: "all 0.2s ease-out",
};
