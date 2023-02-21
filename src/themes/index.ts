export * from "./hsd-theme";
export * from "./biesse-theme";

export interface BiesseTheme {
  name: string;
  borderRadius: string;
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    lightGray: string;
  };
  font: {
    body: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    headings: {
      xxl: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    family: string;
  };
  transition: string;
}
