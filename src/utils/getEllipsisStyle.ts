import { css } from "styled-components";

export function getEllipsisStyle(linesNumber?: number) {
  if (linesNumber) {
    return css`
      display: -webkit-box;
      -webkit-line-clamp: ${linesNumber};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }
}
