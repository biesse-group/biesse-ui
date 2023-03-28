import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { Icon, IconName } from "./Icon";

export interface ButtonProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "primary-inverted" | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium";
  /**
   * Full-width button
   */
  isBlock?: boolean;
  /**
   * Shows an icon on the right
   */
  rightIcon?: IconName;
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
  }
};

const RightIcon = styled(Icon)`
  margin-left: 12px;
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

  ${(props) => getSizeStyle(props.size)}
  ${(props) => getVariantStyle(props.variant)}

  ${(props) =>
    props.isBlock &&
    css`
      width: 100%;
    `}
`;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  testId,
  children,
  rightIcon,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton data-testid={testId} type={type} {...props}>
      {children}
      {rightIcon && <RightIcon name={rightIcon} size="26px" />}
    </StyledButton>
  );
};
