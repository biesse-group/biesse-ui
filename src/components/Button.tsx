/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

const buttonStyle = (theme: Theme) => css`
  font-family: ${theme.font.family};
  font-weight: 500;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

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
    ? (theme: Theme) => css`
        color: white;
        background-color: ${theme.color.primary};
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;
};

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

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size,
  primary,
  ...props
}) => {
  return (
    <button css={[buttonStyle, getSizeStyle(size), getVariantStyle(primary)]} {...props}>
      {children}
    </button>
  );
};
