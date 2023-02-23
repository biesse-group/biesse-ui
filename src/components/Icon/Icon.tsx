import { FC } from "react";
import styled, { css, useTheme } from "styled-components";

import iconsMap from "./icons-map";

export interface IconProps {
  /**
   * Id of the icon you want to use
   */
  name: keyof typeof iconsMap;
  /**
   * Which from the default sizes of the icon you want to use
   */
  size?: "small" | "medium" | "large";
  /**
   * Color of icon
   */
  color?: string;
}

const getIconSize = (size?: string) => {
  switch (size) {
    case "small":
      return css`
        height: 30px;
      `;
    case "large":
      return css`
        height: 80px;
      `;
    default:
      return css`
        height: 50px;
      `;
  }
};

const IconRoot = styled.div<Pick<IconProps, "size">>`
  > svg {
    height: 100%;
  }

  ${(props) => getIconSize(props.size)}
`;

export const Icon: FC<IconProps> = ({ name, size, ...props }) => {
  const IconComponent = iconsMap[name];
  const theme = useTheme();
  props.color = props.color || theme.color.primary;
  return (
    <IconRoot size={size}>
      <IconComponent {...props} />
    </IconRoot>
  );
};
