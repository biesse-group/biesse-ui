import React, { type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { Icon, type IconName } from "~components/Icon";

export interface ButtonProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "primary-inverted" | "outline-inverted" | "outline" | "primary-naked";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Full-width button
   */
  isBlock?: boolean;
  /**
   * Shows an icon on the left
   */
  leftIcon?: IconName;
  /**
   * Shows an icon on the right
   */
  rightIcon?: IconName;
  /**
   * Whether the button has been disabled
   */
  disabled?: boolean;
  /**
   * Button HTML type (default `"button"`)
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  testId?: string;
}

const getSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return css`
        font-size: ${(props) => props.theme.font.regular.body.sm};
        padding: 0px 26px;
        height: 30px;
      `;
    case "large":
      return css`
        font-size: ${(props) => props.theme.font.regular.body.lg};
        padding: 0px 32px;
        height: 50px;
      `;
    default:
      return css`
        font-size: ${(props) => props.theme.font.regular.body.md};
        padding: 0px 32px;
        height: 40px;
      `;
  }
};

const getVariantStyle = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};

        &:hover {
          color: ${(props) => props.theme.color.primary};
          background-color: ${(props) => props.theme.color.white};
        }
      `;
    case "primary-inverted":
      return css`
        color: ${(props) => props.theme.color.primary};
        background-color: ${(props) => props.theme.color.white};
        border: 1px solid ${(props) => props.theme.color.white};

        &:hover {
          color: ${(props) => props.theme.color.white};
          background-color: ${(props) => props.theme.color.primary};
        }
      `;
    case "outline-inverted":
      return css`
        background: transparent;
        color: ${(props) => props.theme.color.white};
        border: 1px solid ${(props) => props.theme.color.white};

        &:hover {
          color: ${(props) => props.theme.color.primary};
          background-color: ${(props) => props.theme.color.white};
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};

        &:hover {
          background-color: ${(props) => props.theme.color.primary};
          color: ${(props) => props.theme.color.white};
        }
      `;
    case "primary-naked":
      return css`
        background: transparent;
        color: ${(props) => props.theme.color.primary};
        text-transform: none;
        padding: 0px;
      `;
  }
};

const LeftIcon = styled(Icon)<Pick<ButtonProps, "variant">>`
  margin-right: ${(props) => (props.variant === "primary-naked" ? "6px" : "12px")};
  display: inline;
`;

const RightIcon = styled(Icon)<Pick<ButtonProps, "variant">>`
  margin-left: ${(props) => (props.variant === "primary-naked" ? "6px" : "12px")};
  display: inline;
`;

const StyledButton = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: bold;
  border: 0;
  border-radius: ${(props) => props.theme.button.borderRadius};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  outline: none !important;
  white-space: nowrap;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: auto;
      pointer-events: none;
    `}

  ${(props) => getSizeStyle(props.size)}
  ${(props) => getVariantStyle(props.variant)}

  ${(props) =>
    props.isBlock &&
    css`
      width: 100%;
    `}
`;

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  ({ testId, children, rightIcon, type = "button", leftIcon, variant, ...props }, ref) => {
    const iconSize = variant === "primary-naked" && props.size === "small" ? "10px" : "26px";
    return (
      <StyledButton ref={ref} data-testid={testId} type={type} {...{ ...props, variant }}>
        {leftIcon && <LeftIcon name={leftIcon} size={iconSize} variant={variant} />}
        {children}
        {rightIcon && <RightIcon name={rightIcon} size={iconSize} variant={variant} />}
      </StyledButton>
    );
  }
);
