import { css } from "styled-components";

export const multilineEllipsis = (linesNumber: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${linesNumber};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const singleLineEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
