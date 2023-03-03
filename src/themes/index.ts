export * from "./hsd-theme";
export * from "./biesse-theme";

export interface BiesseTheme {
  name: string;
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  card: {
    borderRadius: string;
    boxShadow: string;
  };
  eventCard: {
    boxShadow: string;
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
    borderColor: string;
  };
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    lightGray: string;
    gray: string;

    material: {
      wood: string;
      metal: string;
      composite: string;
      glass: string;
      stone: string;
    };
  };
  font: {
    mobile: {
      body: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      headings: {
        xxl?: string;
        xl?: string;
        lg?: string;
        md?: string;
        sm?: string;
        xs?: string;
      };
    };
    tablet: {
      body: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
      };
      headings: {
        xxl?: string;
        xl?: string;
        lg?: string;
        md?: string;
        sm?: string;
        xs?: string;
      };
    };
    body: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
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
