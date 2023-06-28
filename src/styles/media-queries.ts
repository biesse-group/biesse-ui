import {
  css,
  type DefaultTheme,
  type FlattenInterpolation,
  type ThemeProps,
} from "styled-components";

type MediaQuery = (
  breakpoint: keyof DefaultTheme["breakpoints"],
  style: FlattenInterpolation<ThemeProps<DefaultTheme>>
) => FlattenInterpolation<ThemeProps<DefaultTheme>>;

export const mqUntil: MediaQuery = (breakpoint, style) => css`
  @media screen and (max-width: ${(props) => props.theme.breakpoints[breakpoint] - 1}px) {
    ${style}
  }
`;

export const mqFrom: MediaQuery = (breakpoint, style) => css`
  @media screen and (min-width: ${(props) => props.theme.breakpoints[breakpoint]}px) {
    ${style}
  }
`;
