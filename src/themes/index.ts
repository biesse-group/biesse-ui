export * from "./hsd-theme";
export * from "./biesse-theme";

export interface BiesseTheme {
  name: string;
  color: {
    primary: string;
  };
  font: {
    family: string;
  };
}
