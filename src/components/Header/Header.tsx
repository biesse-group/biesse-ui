import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Text } from "..";
import { HeaderProps } from "./headerProps";
import { NavIconItem } from "./NavIconItem";

const getHeaderRootVariantStyle = (version: HeaderProps["variant"]) =>
  version === "transparent"
    ? css`
        background-color: transparent;
      `
    : css`
        height: 120px;

        background-color: ${(props) => props.theme.color.white};
        box-shadow: 0 0 10px 0 rgba(122, 122, 122, 0.5);
      `;

const HeaderRoot = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 134px;

  transition: all 0.2s ease-out;

  & * {
    text-decoration: none;
    text-align: center;
  }

  ${(props) => getHeaderRootVariantStyle(props.variant)}
`;

const getMainHeaderWrapperVariantStyle = (version: HeaderProps["variant"]) =>
  version === "transparent"
    ? css`
        background-color: transparent;
      `
    : css`
        background-color: ${(props) => props.theme.color.primary};
        height: 75px;
      `;

const MainHeaderWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 95px;

  padding: 0px 110px 0px 90px;

  transition: all 0.2s ease-out;

  & * {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ${(props) => getMainHeaderWrapperVariantStyle(props.variant)}
`;

const LogoWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const NavIconsWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const getNavLinksWrapperVariantStyle = (version: HeaderProps["variant"]) =>
  version === "transparent"
    ? css`
        border-top: 1px solid rgb(244, 244, 244, 0.2);
      `
    : css`
        & > a {
          &:hover {
            border-bottom: 2px solid ${(props) => props.theme.color.primary};
          }
        }
      `;

const NavLinksWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;

  padding-left: 90px;
  height: 45px;
  align-items: stretch;

  * {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  > a {
    margin-top: 12px;
    margin-right: 58px;
  }

  ${(props) => getNavLinksWrapperVariantStyle(props.variant)}
`;

export const Header: FC<HeaderProps> = ({
  logo,
  navIcons,
  navLinks,
  className,
  testId,
  ...props
}) => {
  return (
    <HeaderRoot {...props} className={className} data-testid={testId}>
      <MainHeaderWrapper {...props}>
        <LogoWrapper {...props}>{logo}</LogoWrapper>
        <NavIconsWrapper {...props}>
          {navIcons?.map((navIcon, index) => (
            <NavIconItem key={`nav-icon-${index}`} {...navIcon} variant={props.variant} />
          ))}
        </NavIconsWrapper>
      </MainHeaderWrapper>
      <NavLinksWrapper {...props}>
        {navLinks?.map((navLink, index) => (
          <a key={`nav-link-${index}`} href={navLink.url}>
            <Text
              size="sm"
              weight="medium"
              color={props.variant === "transparent" ? "light" : "primary"}
            >
              {navLink.label.toUpperCase()}
            </Text>
          </a>
        ))}
      </NavLinksWrapper>
    </HeaderRoot>
  );
};
