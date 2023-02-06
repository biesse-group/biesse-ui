import "@emotion/react";

import { BiesseTheme } from "./themes";

declare module "@emotion/react" {
  export interface Theme extends BiesseTheme {}
}
