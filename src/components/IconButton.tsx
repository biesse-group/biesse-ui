import { FC } from "react";
import styled, { css } from "styled-components";

export type IconButtonProps = {
  /**
   * Shows left or right arrow
   */
  icon: JSX.Element;
  /**
   * Shows light or primary buttons
   */
  variant: "primary" | "primary-inverted" | "light";
  /**
   * Label for accessibility
   */
  "aria-label": string;
  onClick?: () => void;
  className?: string;
  testId?: string;
};

const StyledButton = styled.button<Omit<IconButtonProps, "type" | "icon">>`
  background-color: transparent;
  width: 50px;
  height: 50px;
  ${({ variant, theme }) => {
    const color = variant === "primary" ? theme.color.primary : theme.color.white;
    return css`
      border: 1px solid ${color};
      color: ${color};
    `;
  }};
  cursor: pointer;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "primary" ? theme.color.primary : theme.color.white};
    color: ${({ variant, theme }) => {
      switch (variant) {
        case "primary":
          return theme.color.white;
        case "light":
          return theme.color.black;
        case "primary-inverted":
          return theme.color.primary;
      }
    }};
    transition: all 0.2s ease-out;
  }
`;

export const IconButton: FC<IconButtonProps> = ({ icon, testId, ...props }) => {
  return (
    <StyledButton data-testid={testId} {...props}>
      {icon}
    </StyledButton>
  );
};
