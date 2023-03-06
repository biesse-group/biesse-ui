import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";

export const ItemsStrip = styled.div`
  align-items: center;
  flex: 1 1 auto;
  position: absolute;
  left: 110px;
  right: 110px;
  bottom: 0;
  top: 100px;

  ${mqUntil(
    "xl",
    css`
      top: 90px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      display: flex;
      justify-content: center;
      top: 200px;
    `
  )}
`;
