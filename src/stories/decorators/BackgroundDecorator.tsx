import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type Props = {
  background?: "primary" | "light" | "dark";
  fullScreen?: boolean;
  maxWidth?: number | string;
};

const StyledBg = styled.div<Props>`
  padding: 1rem;
  background-color: ${({ background, theme }) => {
    switch (background) {
      case "primary":
        return theme.color.primary;
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
    `}
`;

export const BackgroundDecorator: FC<PropsWithChildren<Props>> = ({
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
