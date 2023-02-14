export * from "./hsd-theme";
export * from "./biesse-theme";

export interface BiesseTheme {
  name: string;
  color: {
    primary: string;
    secondary?: string;
  };
  font: {
    size?: {
      small?: string;
      medium?: string;
      large?: string;
    };
    family: string;
  };
}
