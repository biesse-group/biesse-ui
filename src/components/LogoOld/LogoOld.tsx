import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";

import * as LogoSources from "./logo-sources";

export interface LogoOldProps extends BaseProps {
  /**
   * Id of the logo you want to use
   */
  name: LogoOldName;
  /**
   * Sizes of the logo you want to use, width will override height to keep proportions
   */
  width?: string;
  /**
   * Color of the logo
   */
  color?: "primary" | "white" | string;
  testId?: string;
  title?: string;
}

// Must be update each time a new logo is inserted in the library
const logoMap = {
  HSD: LogoSources.HsdLogo,
};

export type LogoOldName = keyof typeof logoMap;

const LogoRoot = styled.div<Pick<LogoOldProps, "width" | "color">>`
  & svg {
    width: 100%;
  }

  ${({ color, theme }) =>
    color &&
    css`
      color: ${color === "primary" || color === "white" ? theme.color[color] : color};
    `}

  ${(props) => css`
    width: ${props.width};
  `}
`;

export const LogoOld: FC<LogoOldProps> = ({
  name,
  width,
  testId,
  color = "inherit",
  title,
  ...props
}) => {
  const LogoComponent = logoMap[name];
  return (
    <LogoRoot width={width} data-testid={testId} color={color} aria-label={title} {...props}>
      <LogoComponent title={title} />
    </LogoRoot>
  );
};
