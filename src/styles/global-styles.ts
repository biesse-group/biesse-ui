import { css, Theme } from "@emotion/react";

export const globalStyles = (theme: Theme) => css`
  html,
  body {
    font-family: ${theme.font.family};
  }
`;
