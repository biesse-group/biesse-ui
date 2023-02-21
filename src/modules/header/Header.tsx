import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Text } from "../../components";
import { HeaderProps } from "./headerProps";
import { NavIconItem } from "./NavIconItem";

const getHeaderRootAdditionalStyle = (version: HeaderProps["version"]) =>
  version === "transparent"
    ? css`
        height: 134px;
      `
    : css`
        height: 120px;
        background-color: ${(props) => props.theme.color.white};
        box-shadow: 0 0 10px 0 rgba(122, 122, 122, 0.5);
      `;

const HeaderRoot = styled.div<Pick<HeaderProps, "version">>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & * {
    text-decoration: none;
    text-align: center;
  }

  ${(props) => getHeaderRootAdditionalStyle(props.version)}
`;

const getMainHeaderWrapperAdditionalStyle = (version: HeaderProps["version"]) =>
  version === "transparent"
    ? css`
        height: 95px;
      `
    : css`
        background-color: ${(props) => props.theme.color.primary};
        height: 75px;
      `;

const MainHeaderWrapper = styled.div<Pick<HeaderProps, "version">>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 110px 0px 90px;

  & * {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ${(props) => getMainHeaderWrapperAdditionalStyle(props.version)}
`;

const LogoWrapper = styled.div<Pick<HeaderProps, "version">>`
  margin-top: 30px;
  ${(props) =>
    props.version === "transparent"
      ? css`
          max-height: 35px;
        `
      : css`
          max-height: 25px;
        `};
`;

const NavIconsWrapper = styled.div<Pick<HeaderProps, "version">>`
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.version === "transparent" ? "36px" : "26px")};
`;

const getNavLinksWrapperAdditionalStyle = (version: HeaderProps["version"]) =>
  version === "transparent"
    ? css`
        border-top: 1px solid rgb(244, 244, 244, 0.2);
      `
    : css`
        & > a {
          & > span {
            font-family: "Bebas Neue Regular";
          }
          &:hover {
            border-bottom: 2px solid ${(props) => props.theme.color.primary};
          }
        }
      `;

const NavLinksWrapper = styled.div<Pick<HeaderProps, "version">>`
  display: flex;
  flex-direction: row;

  padding-left: 90px;
  height: 45px;
  align-items: stretch;

  & * {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  & > a {
    margin-top: 12px;
    margin-right: 58px;
    & > span {
      font-family: "NB International Pro Medium";
      display: inline;
    }
  }

  ${(props) => getNavLinksWrapperAdditionalStyle(props.version)}
`;

export const Header: FC<HeaderProps> = ({ logo, navIcons, navLinks, ...props }) => {
  return (
    <HeaderRoot {...props}>
      <MainHeaderWrapper {...props}>
        <LogoWrapper {...props}>{logo}</LogoWrapper>
        <NavIconsWrapper {...props}>
          {navIcons?.map((navIcon, index) => (
            <NavIconItem key={`nav-icon-${index}`} {...navIcon} version={props.version} />
          ))}
        </NavIconsWrapper>
      </MainHeaderWrapper>
      <NavLinksWrapper {...props}>
        {navLinks?.map((navLink, index) => (
          <a key={`nav-link-${index}`} href={navLink.url}>
            <Text size="xs" color={props.version === "transparent" ? "light" : "primary"}>
              {navLink.label.toUpperCase()}
            </Text>
          </a>
        ))}
      </NavLinksWrapper>
    </HeaderRoot>
  );
};
