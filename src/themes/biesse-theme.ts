import { DefaultTheme } from "styled-components";

export const biesseTheme: DefaultTheme = {
  name: "Biesse Group",
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1400px",
    xxl: "1600px",
  },
  card: {
    borderRadius: "40px",
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
  eventCard: {
    boxShadow: "rgba(140,140,140,0.5)",
  },
  color: {
    primary: "#6D6E70",
    secondary: "#6D6E70",
    white: "#FFF",
    black: "#252525",
    lightGray: "#F5F5F5",

    material: {
      wood: "#F9942E",
      composite: "#8080FF",
      glass: "#38BEEF",
      metal: "#93949A",
      stone: "#F9942E",
    },
  },
  font: {
    body: {
      xs: "13px",
      sm: "14px",
      md: "16px",
      lg: "18px",
    },
    headings: {
      xxl: "50px",
      xl: "45px",
      lg: "40px",
      md: "34px",
      sm: "30px",
      xs: "24px",
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
