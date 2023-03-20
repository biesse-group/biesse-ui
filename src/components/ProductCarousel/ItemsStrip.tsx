import styled, { css } from "styled-components";

import { mqFrom, mqUntil } from "../../styles";

export const ItemsStrip = styled.div<{ isMobile?: boolean }>`
  align-items: center;
  flex: 1 1 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 40px;

  ${mqUntil(
    "xl",
    css`
      display: flex;
      justify-content: center;
      top: 20px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      display: flex;
      justify-content: center;
      top: 170px;
    `
  )}

  ${(props) =>
    (props.isMobile ? mqFrom : mqUntil)(
      "md",
      css`
        display: none;
      `
    )}
`;
