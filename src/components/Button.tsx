import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "outline";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium";
  /**
   * Full-width button
   */
  isBlock?: boolean;
  /**
   * Callback on click
   */
  onClick?: () => void;
}

const getSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return css`
        font-size: ${(props) => props.theme.font.body.sm};
        padding: 8px 26px;
      `;
    default:
      return css`
        font-size: ${(props) => props.theme.font.body.md};
        padding: 13px 32px;
      `;
  }
};

const getVariantStyle = (variant: ButtonProps["variant"]) => {
  return variant === "primary"
    ? css`
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};

        &:hover {
          color: ${(props) => props.theme.color.primary};
          background-color: ${(props) => props.theme.color.white};
        }
      `
    : css`
        background-color: transparent;
        color: ${(props) => props.theme.color.primary};
        border: 1px solid ${(props) => props.theme.color.primary};

        &:hover {
          background-color: ${(props) => props.theme.color.primary};
          color: ${(props) => props.theme.color.white};
        }
      `;
};

const ButtonStyled = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: bold;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  line-height: 1;

  ${(props) => getSizeStyle(props.size)}
  ${(props) => getVariantStyle(props.variant)}

  ${(props) =>
    props.isBlock &&
    css`
      width: 100%;
    `}
`;

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return <ButtonStyled {...props} />;
};
