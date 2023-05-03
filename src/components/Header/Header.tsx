import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { HeaderProps } from "./headerProps";
import { NavIconItem } from "./NavIconItem";

const HeaderRoot = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  transition: all 0.2s ease-out;
  color: ${(props) => props.theme.color.white};

  ${(props) =>
    props.variant === "transparent"
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: ${props.theme.color.white};
          box-shadow: 0 0 10px 0 rgba(122, 122, 122, 0.5);
        `}
`;

const MainHeaderWrapper = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  justify-content: center;
  height: 95px;
  padding: 0 90px;
  transition: all 0.2s ease-out;

  ${(props) =>
    props.variant === "transparent"
      ? css`
          background-color: transparent;
          border-bottom: 1px solid rgba(244, 244, 244, 0.2);
        `
      : css`
          background-color: ${props.theme.color.primary};
          height: 75px;
        `}

  ${mqUntil(
    "lg",
    css`
      padding: 0px 50px;
      height: 75px;
    `
  )}

    ${mqUntil(
    "md",
    css`
      padding: 0px 25px;
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

const MainHeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 auto;

  > div,
  > a {
    flex: 0 1 480px;

    ${mqUntil(
      "lg",
      css`
        flex: 0 1 345px;
      `
    )}

    ${mqUntil(
      "sm",
      css`
        flex: 0 1 200px;
      `
    )}
  }
`;

const MainNav = styled.nav<Pick<HeaderProps, "variant">>`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const SecondaryHeader = styled.div<Pick<HeaderProps, "variant">>`
  display: flex;
  justify-content: center;
  padding: 0 90px;
  height: 45px;

  ${mqUntil(
    "lg",
    css`
      padding: 0 50px;
    `
  )}

  ${mqUntil(
    "md",
    css`
      display: none;
    `
  )}
`;

const SecondaryNav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
  align-items: stretch;
`;

const SecondaryNavItem = styled.div<{ isSelected?: boolean } & Pick<HeaderProps, "variant">>`
  margin-top: 12px;
  margin-right: 58px;

  ${(props) =>
    props.variant === "colored" &&
    props.isSelected &&
    css`
      border-bottom: 2px solid ${(props) => props.theme.color.primary};
    `}

  ${(props) =>
    props.variant === "colored" &&
    css`
      :hover {
        border-bottom: 2px solid ${(props) => props.theme.color.primary};
      }
    `}
`;

const HamburgerMenuIconWrapper = styled.div`
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
      {/* Main Header */}
      <MainHeaderWrapper {...props}>
        <MainHeaderInner>
          <LogoWrapper>{logo}</LogoWrapper>
          <MainNav {...props}>
            {navIcons?.map((navIcon, index) => (
              <NavIconItem key={`nav-icon-${index}`} {...navIcon} variant={props.variant} />
            ))}
            <HamburgerMenuIconWrapper>
              <Icon name="hamburger" size="100%" color="white" />
            </HamburgerMenuIconWrapper>
          </MainNav>
        </MainHeaderInner>
      </MainHeaderWrapper>

      {/* Secondary Header */}
      <SecondaryHeader {...props}>
        <SecondaryNav>
          {navLinks?.map((navLink, index) => (
            <SecondaryNavItem
              key={`nav-link-${index}`}
              variant={props.variant}
              isSelected={navLink.isSelected}
            >
              {navLink.renderLink(
                <Text
                  size="sm"
                  weight="medium"
                  color={props.variant === "transparent" ? "light" : "primary"}
                >
                  {navLink.label.toUpperCase()}
                </Text>
              )}
            </SecondaryNavItem>
          ))}
        </SecondaryNav>
      </SecondaryHeader>
    </HeaderRoot>
  );
};
