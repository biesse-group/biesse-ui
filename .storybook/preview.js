import { ThemeProvider } from "@emotion/react";
import { withThemes } from "@react-theming/storybook-addon";
import { addDecorator } from "@storybook/react";

import { biesseTheme, hsdTheme } from "../src/themes";

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [hsdTheme, biesseTheme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ["as", "theme"],
  },
};
