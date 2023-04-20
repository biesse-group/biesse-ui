import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Preview } from "@storybook/react";
import React, { CSSProperties } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/styles";
import { biesseTheme, hsdTheme } from "../src/themes";

const getDotStyle = (theme: "biesse" | "hsd"): CSSProperties => ({
  width: 12,
  height: 12,
  borderRadius: 12,
  background: theme === "biesse" ? "#6D6E70" : "#194898",
});

const THEMES = {
  biesse: biesseTheme,
  hsd: hsdTheme,
};

export const decorators: Preview["decorators"] = [
  (Story, context) => {
    const { theme } = context.globals;

    return (
      <ThemeProvider theme={THEMES[theme] || THEMES["biesse"]}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ["as", "theme"],
      expanded: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "hsd",
      toolbar: {
        icon: "paintbrush",
        // Array of plain string values or MenuItem shape
        items: [
          { value: "biesse", title: "Biesse Group", left: <div style={getDotStyle("biesse")} /> },
          { value: "hsd", title: "HSD Mechatronics", left: <div style={getDotStyle("hsd")} /> },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
