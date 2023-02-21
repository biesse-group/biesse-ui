import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Text } from "../../components";
import { Icon } from "../../icons";
import { NavIconItemProps } from "./headerProps";

const getNavIconItemWrapperAdditionalStyle = (version: NavIconItemProps["version"]) =>
  version === "transparent"
    ? css`
        font-family: "NB International Pro Book";
        font-weight: 300;
        letter-spacing: 0;
      `
    : css`
        font-family: "Bebas Neue Regular";
        letter-spacing: 0;
        line-height: 24px;
        text-transform: uppercase;
      `;

const NavIconItemWrapper = styled.a<Pick<NavIconItemProps, "version">>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 65px;
  text-align: center;
  height: fit-content;
  & > span {
    margin-left: 10px;
    display: inline;
  }

  ${(props) => getNavIconItemWrapperAdditionalStyle(props.version)}
`;

export const NavIconItem: FC<NavIconItemProps> = ({ label, icon, url, ...props }) => {
  return (
    <NavIconItemWrapper href={url} {...props}>
      <Icon size="small" name={icon} />
      <Text size="xs" color="light">
        {label}
      </Text>
    </NavIconItemWrapper>
  );
};
