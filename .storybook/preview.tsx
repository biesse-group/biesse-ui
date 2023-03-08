import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { CSSProperties } from "react";

import { withTheme } from "./withTheme.decorator";

export const decorators = [withTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ["as", "theme"],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const getDotStyle = (theme: "biesse" | "hsd"): CSSProperties => ({
  width: 12,
  height: 12,
  borderRadius: 12,
  background: theme === "biesse" ? "#6D6E70" : "#194898",
});

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "biesse",
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
};
