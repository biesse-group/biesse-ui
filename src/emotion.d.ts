import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    name: string;
    color: {
      primary: string;
    };
    font: {
      family: string;
    };
  }
}
