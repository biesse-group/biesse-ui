import styled, { css } from "styled-components";

import { mqUntil } from "~styles";

export const TextContainer = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.color.primary};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  z-index: 100;
  width: 600px;
  bottom: 0;
  left: 0;
  padding: 62px 45px 37px 122px;

  ${mqUntil(
    "md",
    css`
      padding: 36px 17px 36px 25px;
      width: 400px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding: 26px 12px 26px 24px;
      width: 245px;
    `
  )}
`;
