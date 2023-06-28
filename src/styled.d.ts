import "styled-components";

import { type BiesseTheme } from "./themes";

declare module "styled-components" {
  export interface DefaultTheme extends BiesseTheme {}
}
