import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "BIESSE Group",
    brandUrl: "https://www.biessegroup.com/it/",
    brandImage: "https://www.biessegroup.com/img/logo-biessegroup.jpg",
    brandTarget: "_blank",
  }),
  // FIXME Don't know how to hide only the background switcher, but not the grid
  // toolbar: {
  //   "storybook/background": {
  //     hidden: true,
  //   },
  // },
});
