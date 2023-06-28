/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    "storybook-addon-pseudo-states",
  ],
  webpackFinal: async (config: any) => {
    config.resolve!.plugins = config.resolve!.plugins ?? [];
    config.resolve!.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "../tsconfig.json",
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !prop.parent.fileName.includes("node_modules") : true),
    },
  },
  core: {},
  docs: {
    autodocs: "tag",
  },
};

module.exports = config;
