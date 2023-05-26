import { FC } from "react";
import styled, { css } from "styled-components";

import { BiesseTheme } from "../../themes";
import iconsMap from "./icons-map";

export type IconName = keyof typeof iconsMap;

export interface IconProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Id of the icon you want to use
   */
  name: IconName;
  /**
   * Which from the default sizes of the icon you want to use
   */
  size?: "xs" | "sm" | "md" | "lg" | string;
  /**
   * Color fo the icon.
   * if not specified becomes inherit.
   */
  color?:
    | keyof BiesseTheme["color"]["material"]
    | keyof Pick<BiesseTheme["color"], "primary" | "secondary" | "white">;
  onClick?: () => void;
  testId?: string;
}

const getIconSize = (size: IconProps["size"] = "md") => {
  switch (size) {
    case "xs":
      return "20px";
    case "sm":
      return "30px";
    case "lg":
      return "80px";
    case "md":
      return "50px";
    default:
      return size;
  }
};

const getColor = (color: IconProps["color"]) => css`
  color: ${({ theme }) =>
    color === undefined
      ? "inherit"
      : color === "primary" || color === "secondary" || color === "white"
      ? theme.color[color]
      : theme.color.material[color]};
`;

const IconRoot = styled.span<Omit<IconProps, "name">>`
  display: inline-flex;
  ${(props) => {
    const size = getIconSize(props.size);
    return css`
      height: ${size};
      width: ${size};
      flex: 0 0 ${size};
    `;
  }}
  ${(props) => getColor(props.color)};

  > svg {
    height: 100%;
    width: 100%;
    color: ${(props) => props.color || "inherit"};
  }
`;

export const Icon: FC<IconProps> = ({ name, size, color, className, testId, ...props }) => {
  const IconComponent = iconsMap[name];
  return (
    <IconRoot color={color} size={size} data-testid={testId} className={className}>
      <IconComponent {...props} />
    </IconRoot>
  );
};
