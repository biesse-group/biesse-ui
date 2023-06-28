import { type FC, type PropsWithChildren } from "react";
import { type DefaultTheme, ThemeProvider } from "styled-components";

import { hsdTheme } from "./hsd-theme";

export interface BiesseThemeProviderProps {
  theme?: DefaultTheme;
}

export const BiesseThemeProvider: FC<PropsWithChildren<BiesseThemeProviderProps>> = ({
  theme = hsdTheme,
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
