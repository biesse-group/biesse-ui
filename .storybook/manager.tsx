import { addons } from "@storybook/addons";

import sbBiesseTheme from "./sbThemeBiesse";

addons.setConfig({
  theme: sbBiesseTheme,
  // FIXME Don't know how to hide only the background switcher, but not the grid
  // toolbar: {
  //   "storybook/background": {
  //     hidden: true,
  //   },
  // },
});
