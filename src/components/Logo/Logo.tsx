import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { mqUntil } from "~styles/media-queries";

import logoBlack from "../../assets/logo/hsd-logo-black.jpg";
import logoFlat from "../../assets/logo/hsd-logo-flat.jpg";
import logoGradient from "../../assets/logo/hsd-logo-gradient.png";
import logoWhite from "../../assets/logo/hsd-logo-white.png";

export type LogoVariant = "gradient" | "flat" | "black" | "white";

export interface LogoProps extends BaseProps {
  /**
   * Selection of the logo variant to display
   */
  variant?: LogoVariant;
  /**
   * Width of the logo (e.g., '200px', '10rem')
   */
  width?: string;
  /**
   * Accessible title/alt for the logo
   */
  title?: string;
  testId?: string;
}

const logoMap: Record<LogoVariant, string> = {
  gradient: logoGradient,
  flat: logoFlat,
  black: logoBlack,
  white: logoWhite,
};

const LogoRoot = styled.div<{ $width?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: ${({ $width }) => $width ?? "auto"};
  margin-left: -40px;
  transform: translateY(-5px);

  ${mqUntil(
    "md",
    css`
      margin-left: -20px;
    `
  )}

  img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
  }
`;

export const Logo: FC<LogoProps> = ({
  variant = "white",
  width,
  title = "HSD Logo",
  testId,
  ...props
}) => {
  const src = logoMap[variant];

  return (
    <LogoRoot $width={width} data-testid={testId} {...props}>
      <img src={src} alt={title} title={title} />
    </LogoRoot>
  );
};
