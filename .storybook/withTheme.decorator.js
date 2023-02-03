import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";

import { globalStyles } from "../src/styles/global-styles";
import { biesseTheme, hsdTheme } from "../src/themes";

const THEMES = {
  biesse: biesseTheme,
  hsd: hsdTheme,
};

// Sets the background based on theme by creating another global style definition
const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["biesse"]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
