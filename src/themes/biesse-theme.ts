import { type DefaultTheme } from "styled-components";

import { hsdTheme } from "./hsd-theme";

export const biesseTheme: DefaultTheme = {
  ...hsdTheme,
  name: "Biesse Group",
  color: {
    ...hsdTheme.color,
    primary: "#6D6E70",
    secondary: "#6D6E70",
  },
};
