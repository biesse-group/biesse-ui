import "styled-components";

import { BiesseTheme } from "./themes";

declare module "styled-components" {
  export interface DefaultTheme extends BiesseTheme {}
}
