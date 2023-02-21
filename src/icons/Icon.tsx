import React, { FC } from "react";
import styled from "styled-components";

import getIconSize from "./get-icon-size";
import { IconProps } from "./IconProps";
import * as IconSources from "./icons-sources";

const IconRoot = styled.div<Omit<IconProps, "name">>`
  & svg {
    width: 100%;
  }

  ${(props) => getIconSize(props.size)}
`;

const renderIconImg = (name: string) => {
  switch (name) {
    case "search":
      return <IconSources.SearchIcon />;
    default:
      return <IconSources.PlaceHolderIcon />;
  }
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return <IconRoot {...props}>{renderIconImg(name)}</IconRoot>;
};
