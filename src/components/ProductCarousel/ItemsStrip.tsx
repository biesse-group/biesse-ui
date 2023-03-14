import styled, { css } from "styled-components";

import { mqFrom, mqUntil } from "../../styles";

export const ItemsStrip = styled.div<{ isMobile?: boolean }>`
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

${(props) =>
    (props.isMobile ? mqFrom : mqUntil)(
      "md",
      css`
        display: none;
      `
    )}
`;
