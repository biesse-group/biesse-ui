import { type FC, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

export interface StyledBgProps {
  background?: "primary" | "secondary" | "light" | "dark";
  fullScreen?: boolean;
  maxWidth?: number | string;
}

const StyledBg = styled.div<StyledBgProps>`
  padding: 1rem;
  background-color: ${({ background, theme }) => {
    switch (background) {
      case "primary":
        return theme.color.primary;
      case "secondary":
        return theme.color.secondary;
      case "dark":
        return theme.color.black;
      case "light":
        return theme.color.lightGray;
    }
  }};
  ${(props) =>
    props.fullScreen &&
    css`
      height: 100vh;
      padding: 0;
    `}
`;

export const BackgroundDecorator: FC<PropsWithChildren<StyledBgProps>> = ({
  children,
  maxWidth = 300,
  ...props
}) => {
  return (
    <StyledBg {...props}>
      <div style={{ maxWidth }}>{children}</div>
    </StyledBg>
  );
};
