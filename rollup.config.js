import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
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
      copy({
        targets: [
          { src: "src/styles/fonts/*", dest: "dist/fonts" },
          { src: "src/styles/font-faces.css", dest: "dist" },
        ],
      }),
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
