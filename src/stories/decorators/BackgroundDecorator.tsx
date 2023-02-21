import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = { background?: "primary" | "light" | "dark" };

const StyledBg = styled.div<Props>`
  padding: 30px;
  height: 100vh;
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
`;

export const BackgroundDecorator: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <StyledBg {...props}>
      <div style={{ maxWidth: 300 }}>{children}</div>
    </StyledBg>
  );
};
