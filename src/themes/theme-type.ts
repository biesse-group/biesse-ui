interface FontSizesHeading {
  xxl: string;
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

interface FontSizesBody {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

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
  videoPlayer: {
    buttonBoxShadow: string;
  };
  eventCard: {
    boxShadow: string;
    heroBoxShadow: string;
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
    checkbox: {
      backgroundColor: string;
    };
  };
  breadcrumb: {
    backgroundColor: string;
    dividerColor: string;
  };
  color: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    lightGray: string;
    darkGray: string;
    gray: string;
    modalBackground: string;

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
      body: Partial<FontSizesBody>;
      headings: Partial<FontSizesHeading>;
    };
    tablet: {
      body: Partial<FontSizesBody>;
      headings: Partial<FontSizesHeading>;
    };
    regular: {
      body: FontSizesBody;
      headings: FontSizesHeading;
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
