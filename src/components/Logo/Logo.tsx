import { FC } from "react";
import styled, { css } from "styled-components";

import * as LogoSources from "./logo-sources";

export interface LogoProps {
  /**
   * Optional component class name
   */
  className?: string;
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
  testId?: string;
}

// Must be update each time a new logo is inserted in the library
const logoMap = {
  HSD: LogoSources.HsdLogo,
  Kuka: LogoSources.KukaLogo,
};

export type LogoName = keyof typeof logoMap;

const LogoRoot = styled.div<Pick<LogoProps, "width" | "color">>`
  & svg {
    width: 100%;
  }

  color: ${(props) => props.color};

  ${(props) => css`
    width: ${props.width};
  `}
`;

export const Logo: FC<LogoProps> = ({
  name,
  width,
  className,
  testId,
  color = "inherit",
  ...props
}) => {
  const LogoComponent = logoMap[name];
  return (
    <LogoRoot width={width} className={className} data-testid={testId} color={color}>
      <LogoComponent {...props} />
    </LogoRoot>
  );
};
