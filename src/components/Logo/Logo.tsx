import { type FC } from "react";
import styled from "styled-components";

import type { BaseProps } from "~components/baseProps";

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
  width: ${({ $width }) => $width ?? "auto"};
  height: 100%;

  img {
    height: 100%;
    width: 100%;
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
