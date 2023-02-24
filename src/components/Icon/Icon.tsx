import { FC } from "react";
import styled from "styled-components";

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
  size?: "smaller" | "small" | "medium" | "large";
  /**
   * Custom size
   */
  height?: string;
  /**
   * Color fo the icon.
   * if not specified becomes inherit.
   */
  color?: string;
  testId?: string;
}

const getIconSize = (size?: IconProps["size"]) => {
  switch (size) {
    case "smaller":
      return "20px";
    case "small":
      return "30px";
    case "large":
      return "80px";
    default:
      return "50px";
  }
};

const IconRoot = styled.div<Pick<IconProps, "size" | "height" | "color">>`
  > svg {
    height: ${(props) => props.height || getIconSize(props.size)};
    color: ${(props) => props.color || "inherit"};
  }
`;

export const Icon: FC<IconProps> = ({ name, size, height, color, className, testId, ...props }) => {
  const IconComponent = iconsMap[name];
  return (
    <IconRoot size={size} height={height} color={color} data-testid={testId} className={className}>
      <IconComponent {...props} />
    </IconRoot>
  );
};
