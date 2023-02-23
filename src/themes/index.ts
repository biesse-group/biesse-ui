export * from "./hsd-theme";
export * from "./biesse-theme";

export interface BiesseTheme {
  name: string;
  card: {
    borderRadius: string;
  };
  button: {
    borderRadius: string;
  };
  input: {
    borderRadius: string;
    boxShadow: {
      dark: string;
      light: string;
    };
  };
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
    weight: {
      book: number;
      regular: number;
      medium: number;
      bold: number;
    };
    family: string;
  };
  transition: string;
}
