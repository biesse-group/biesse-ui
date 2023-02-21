import React, { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const getSizeStyle = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    case "large":
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    default:
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
  }
};

const getVariantStyle = (primary?: boolean) => {
  return primary
    ? css`
        color: white;
        background-color: ${(props) => props.theme.color.primary};
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;
};

const ButtonStyled = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: 500;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getSizeStyle(props.size)}
  ${(props) => getVariantStyle(props.primary)}
`;

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return <ButtonStyled {...props} />;
};
