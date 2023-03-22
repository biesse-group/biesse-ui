import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { ContactsInfoBox, InfoBoxProps } from "./InfoBox";
import { LinksList, LinksListProps } from "./LinksList";
import { LocatorBox, LocatorBoxProps } from "./LocatorBox";
import { SocialLink, SocialLinkProps } from "./SocialLink";

export interface FooterProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Logo on top of the footer
   */
  logo?: JSX.Element;
  /**
   * Link list on the central body, first from the left
   */
  leftLinksList?: LinksListProps;
  /**
   * Link list on the central body, second from the left
   */
  rightLinksList?: LinksListProps;
  /**
   * Element on the right, should contain contacts map, default version is HSD static one
   */
  contactsLocator?: LocatorBoxProps;
  /**
   * First info box, containing site data, placed on the bottom of the footer
   */
  siteInfo?: InfoBoxProps;
  /**
   * Second info box, containing site data, placed on the bottom of the footer
   */
  contactsInfo?: InfoBoxProps;
  /**
   * Social Link, located on top right corner (desktop view)
   */
  socialLink?: SocialLinkProps;
  testId?: string;
}

const FooterRoot = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary};

  padding: 40px 90px 50px 90px;
  ${mqUntil(
    "md",
    css`
      padding: 60px 25px 40px 25px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      padding: 60px 5px 45px 5px;
    `
  )}
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;

  display: grid;

  grid-template-rows: auto 1fr;
  row-gap: 20px;
  grid-template-columns: repeat(3, auto 1fr) [social-link-start] auto;
  column-gap: 10px;

  grid-template-areas:
    "logo . projects . services . locator"
    "info-box . projects . services . locator";

  ${mqUntil(
    "md",
    css`
      grid-template-rows: minmax(40px, auto) 1fr auto;
      row-gap: 24px;
      grid-template-columns: 1fr 1fr auto;
      column-gap: 0px;

      grid-template-areas:
        "logo logo logo"
        "projects services locator"
        "info-box info-box info-box";
    `
  )}

  ${mqUntil(
    "sm",
    css`
      grid-template-rows: repeat(5, auto);
      grid-template-columns: 45px 1fr;
      row-gap: 45px;

      grid-template-areas:
        "logo logo"
        "locator locator"
        ". projects"
        ". services"
        "info-box info-box";
    `
  )}
`;

const LogoWrapper = styled.div`
  grid-area: logo;
  color: ${(props) => props.theme.color.white};
  width: 300px;
  ${mqUntil(
    "md",
    css`
      width: 260px;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      align-self: center;
      justify-self: center;
    `
  )}
`;

const LocatorWrapper = styled.div`
  grid-area: locator;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;

  ${mqUntil(
    "sm",
    css`
      justify-self: stretch;
    `
  )}
`;

const InfoWrapper = styled.div`
  grid-area: info-box;

  display: grid;
  grid-template-rows: 1fr repeat(2, auto);
  grid-template-columns: auto;
  grid-template-areas:
    "."
    "info-site"
    "info-contacts";

  ${mqUntil(
    "md",
    css`
      grid-template-rows: auto;
      grid-template-columns: repeat(2, auto);
      column-gap: 10px;
      grid-template-areas: "info-site info-contacts";
    `
  )}

  ${mqUntil(
    "sm",
    css`
      grid-template-rows: repeat(2, auto);
      grid-template-columns: auto;
      grid-template-areas:
        "info-site"
        "info-contacts";
    `
  )}
`;

const SiteWrapper = styled.div`
  grid-area: info-site;
`;

const ContactsWrapper = styled.div`
  grid-area: info-contacts;
`;

const LeftLinksWrapper = styled.div`
  grid-area: projects;
`;

const RightLinksWrapper = styled.div`
  grid-area: services;
`;

const SocialLinkWrapper = styled.div`
  grid-area: 1 / social-link-start;
  justify-self: end;
  z-index: 1;
`;

export const Footer: FC<FooterProps> = ({
  className,
  testId,
  logo,
  leftLinksList,
  rightLinksList,
  contactsLocator,
  siteInfo,
  contactsInfo,
  socialLink,
  ...props
}) => {
  return (
    <FooterRoot className={className} data-testid={testId} {...props}>
      <FooterContainer>
        <LogoWrapper>{logo}</LogoWrapper>

        {(siteInfo || contactsInfo) && (
          <InfoWrapper>
            {siteInfo && (
              <SiteWrapper>
                <ContactsInfoBox {...siteInfo} />
              </SiteWrapper>
            )}
            {contactsInfo && (
              <ContactsWrapper>
                <ContactsInfoBox {...contactsInfo} />
              </ContactsWrapper>
            )}
          </InfoWrapper>
        )}

        {leftLinksList && (
          <LeftLinksWrapper>
            <LinksList {...leftLinksList} />
          </LeftLinksWrapper>
        )}
        {rightLinksList && (
          <RightLinksWrapper>
            <LinksList {...rightLinksList} />
          </RightLinksWrapper>
        )}

        {socialLink && (
          <SocialLinkWrapper>
            <SocialLink {...socialLink} />
          </SocialLinkWrapper>
        )}
        {contactsLocator && (
          <LocatorWrapper>
            <LocatorBox {...contactsLocator} />
          </LocatorWrapper>
        )}
      </FooterContainer>
    </FooterRoot>
  );
};
