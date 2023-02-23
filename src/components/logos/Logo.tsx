import { FC } from "react";
import styled, { css, useTheme } from "styled-components";

import * as LogoSources from "./logo-sources";

export interface LogoProps {
  /**
   * Id of the logo you want to use
   */
  name: LogoName;
  /**
   * Sizes of the logo you want to use, width will override height to keep proportions
   */
  width?: string;
  /**
   * Color of the logo
   */
  color?: string;
}

// Must be update each time a new logo is inserted in the library
export type LogoName = "HSD";

const LogoRoot = styled.div<Pick<LogoProps, "width">>`
  & svg {
    width: 100%;
  }

  ${(props) => css`
    width: ${props.width};
  `}
`;

const renderLogoImg = (name: string, props: Omit<LogoProps, "width" | "name">) => {
  switch (name) {
    default:
      return <LogoSources.HsdLogo {...props} />;
  }
};

export const Logo: FC<LogoProps> = ({ name, width, ...props }) => {
  const theme = useTheme();
  props.color = props.color || theme.color.primary;
  return <LogoRoot width={width}>{renderLogoImg(name, props)}</LogoRoot>;
};
