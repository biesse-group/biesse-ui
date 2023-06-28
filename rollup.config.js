import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";

export default [
  {
    input: "src/index.ts",
    external: ["styled-components", "@biesse-group/fonts"],
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      tsConfigPaths(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["./.storybook/*", "./src/**/*.stories*"],
      }),
      postcss(),
      terser(),
    ],
  },
];
