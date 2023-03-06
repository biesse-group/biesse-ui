import { FC } from "react";
import styled, { css } from "styled-components";

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
  color?: "light" | "primary" | string;
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
  color: ${(props) => {
    switch (color) {
      case "light":
        return props.theme.color.white;
      case "primary":
        return props.theme.color.primary;
      case undefined:
        return "inherit";
      default:
        return color;
    }
  }};
`;

const IconRoot = styled.span<Omit<IconProps, "name" | "color">>`
  ${(props) => getColor(props.color)};

  > svg {
    height: ${(props) => getIconSize(props.size)};
    color: ${(props) => props.color || "inherit"};
  }
`;

export const Icon: FC<IconProps> = ({ name, size, color, className, testId, ...props }) => {
  const IconComponent = iconsMap[name];
  return (
    <IconRoot size={size} color={color} data-testid={testId} className={className}>
      <IconComponent {...props} />
    </IconRoot>
  );
};
