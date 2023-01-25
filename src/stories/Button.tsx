/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { FC } from "react";

const buttonStyle = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
`;

const buttonPrimary = css`
  color: white;
  background-color: #1ea7fd;
`;

const buttonSecondary = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const buttonSmall = css`
  font-size: 12px;
  padding: 10px 16px;
`;

const buttonLarge = css`
  font-size: 16px;
  padding: 12px 24px;
`;

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({ primary = false, size = "medium", label, ...props }) => {
  return (
    <button
      type="button"
      css={[
        buttonStyle,
        primary ? buttonPrimary : buttonSecondary,
        size === "large" && buttonLarge,
        size === "small" && buttonSmall,
      ]}
      {...props}
    >
      {label}
    </button>
  );
};
