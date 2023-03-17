import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";

const BackgroundOuter = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  padding: 42px 90px;
  height: 440px;
  margin-bottom: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BackgroundInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
`;

export const BackgroundStrip: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BackgroundOuter>
      <BackgroundInner>{children}</BackgroundInner>
    </BackgroundOuter>
  );
};
