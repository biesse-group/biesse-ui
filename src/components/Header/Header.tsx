import { FC } from "react";
import styled, { css } from "styled-components";

import { Icon, Text } from "..";
import { mqUntil } from "../../styles/media-queries";
import { HeaderProps } from "./headerProps";
import { NavIconItem } from "./NavIconItem";

const getHeaderRootVariantStyle = (version: HeaderProps["variant"]) =>
  version === "transparent"
    ? css`
        background-color: transparent;
      `
    : css`
        background-color: ${(props) => props.theme.color.white};
        box-shadow: 0 0 10px 0 rgba(122, 122, 122, 0.5);
      `;

const HeaderRoot = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  transition: all 0.2s ease-out;

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

  ${(props) => getMainHeaderWrapperVariantStyle(props.variant)}

  ${(props) =>
    props.variant === "transparent" &&
    css`
      border-bottom: 1px solid rgb(244, 244, 244, 0.2);
    `}

    ${mqUntil(
    "md",
    css`
      padding: 0px 25px;
      height: 75px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding: 0px 20px;
      height: 70px;
    `
  )}
`;

const LogoWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 480px;

    ${mqUntil(
      "md",
      css`
        width: 345px;
      `
    )}

    ${mqUntil(
      "sm",
      css`
        width: 193px;
      `
    )}
  }
`;

const NavIconsWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const NavLinksWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;

  padding-left: 90px;
  height: 45px;
  align-items: stretch;

  ${mqUntil(
    "md",
    css`
      display: none;
    `
  )}
`;

const NavLinkElementWrapper = styled.div<Pick<HeaderProps, "variant">>`
  margin-top: 12px;
  margin-right: 58px;

  ${(props) =>
    props.variant === "colored" &&
    css`
      :hover {
        border-bottom: 2px solid ${(props) => props.theme.color.primary};
      }
    `}
`;

const HamburgerMenuIconWrapper = styled.div`
  flex-direction: row;
  align-items: center;

  width: 36px;
  cursor: pointer;

  display: none;
  ${mqUntil(
    "md",
    css`
      margin-left: 17px;
      display: block;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      width: 20px;
    `
  )}
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
          <HamburgerMenuIconWrapper>
            <Icon name="hamburger" size="100%" color="light" />
          </HamburgerMenuIconWrapper>
        </NavIconsWrapper>
      </MainHeaderWrapper>
      <NavLinksWrapper {...props}>
        {navLinks?.map((navLink, index) => (
          <NavLinkElementWrapper key={`nav-link-${index}`} variant={props.variant}>
            {navLink.renderLink(
              <Text
                size="sm"
                weight="medium"
                color={props.variant === "transparent" ? "light" : "primary"}
              >
                {navLink.label.toUpperCase()}
              </Text>
            )}
          </NavLinkElementWrapper>
        ))}
      </NavLinksWrapper>
    </HeaderRoot>
  );
};
