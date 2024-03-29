import { type FC } from "react";
import styled, { css } from "styled-components";

import { type BaseProps } from "~components/baseProps";
import { Icon, type IconName } from "~components/Icon";
import { mqUntil } from "~styles";

export interface IconButtonProps extends BaseProps {
  /**
   * Shows left or right arrow
   */
  icon: IconName;
  /**
   * Shows light or primary buttons
   */
  variant: "primary" | "primary-inverted" | "light" | "primary-naked";
  /**
   * Label for accessibility
   */
  "aria-label": string;
  onClick?: () => void;
  testId?: string;
}

const StyledButton = styled.button<Omit<IconButtonProps, "type" | "icon">>`
  color: ${({ variant, theme }) =>
    variant === "primary" || variant === "primary-naked" ? theme.color.primary : theme.color.white};
  background-color: transparent;
  outline: none !important;
  cursor: pointer;
  padding: 0;
  width: ${(props) => (props.variant === "primary-naked" ? 30 : 50)}px;
  height: ${(props) => (props.variant === "primary-naked" ? 30 : 50)}px;
  border: ${({ variant, theme }) =>
    variant === "primary-naked"
      ? "none"
      : `1px solid ${variant === "primary" ? theme.color.primary : theme.color.white}`};

  ${(props) =>
    props.variant !== "primary-naked" &&
    mqUntil(
      "sm",
      css`
        width: 40px;
        height: 40px;
      `
    )}

  ${({ variant, theme }) =>
    variant !== "primary-naked" &&
    css`
      &:hover {
        background-color: ${variant === "primary" ? theme.color.primary : theme.color.white};
        color: ${() => {
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
    `}
`;

export const IconButton: FC<IconButtonProps> = ({ icon, testId, ...props }) => {
  return (
    <StyledButton data-testid={testId} {...props}>
      <Icon name={icon} size="26px" />
    </StyledButton>
  );
};
