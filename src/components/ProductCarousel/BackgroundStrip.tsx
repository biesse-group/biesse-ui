import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";

export const BackgroundStrip = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  padding: 42px 90px;
  height: 440px;
  margin-bottom: 124px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};

  ${mqUntil(
    "xl",
    css`
      height: 300px;
      margin-bottom: 100px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      height: 440px;
      margin-bottom: 120px;
      padding: 42px 25px;
    `
  )}

${mqUntil(
    "sm",
    css`
      height: 330px;
      margin-bottom: 76px;
      padding: 42px 25px;
    `
  )}
`;
