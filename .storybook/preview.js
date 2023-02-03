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
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape
      items: [
        { value: "biesse", title: "Biesse Group" },
        { value: "hsd", title: "HSD Mechatronics" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
