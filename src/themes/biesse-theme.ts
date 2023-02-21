import { DefaultTheme } from "styled-components";

export const biesseTheme: DefaultTheme = {
  name: "Biesse Group",
  borderRadius: "40px",
  color: {
    primary: "#6D6E70",
    secondary: "#6D6E70",
    white: "#FFF",
    black: "#252525",
    lightGray: "#F5F5F5",
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
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",sans-serif',
  },
  transition: "all 0.2s ease-out",
};
