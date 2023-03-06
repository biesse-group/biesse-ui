import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/styles";
import { biesseTheme, hsdTheme } from "../src/themes";

const THEMES = {
  biesse: biesseTheme,
  hsd: hsdTheme,
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["biesse"]}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};
