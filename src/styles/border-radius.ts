import { css } from "styled-components";

export const borderRadius = (radius: string) => css`
  overflow: hidden;
  border-bottom-left-radius: ${radius};
  border-top-right-radius: ${radius};
`;
