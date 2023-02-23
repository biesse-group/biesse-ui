import { FC } from "react";
import styled, { useTheme } from "styled-components";

import iconsMap from "./icons-map";

export type IconName = keyof typeof iconsMap;

export interface IconProps {
  /**
   * Id of the icon you want to use
   */
  name: IconName;
  /**
   * Which from the default sizes of the icon you want to use
   */
  size?: "small" | "medium" | "large";
  /**
   * Custom size
   */
  height?: string;
  /**
   * Color of icon
   */
  color?: string;
}

const getIconSize = (size?: string) => {
  switch (size) {
    case "small":
      return "30px";
    case "large":
      return "80px";
    default:
      return "50px";
  }
};

const IconRoot = styled.div<Pick<IconProps, "size" | "height">>`
  > svg {
    height: ${(props) => props.height || getIconSize(props.size)};
    color: inherit;
  }
`;

export const Icon: FC<IconProps> = ({ name, size, height, ...props }) => {
  const IconComponent = iconsMap[name];
  const theme = useTheme();
  props.color = props.color || theme.color.primary;
  return (
    <IconRoot size={size} height={height}>
      <IconComponent {...props} />
    </IconRoot>
  );
};
