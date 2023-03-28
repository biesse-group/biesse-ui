import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { ExtraInfo, ExtraInfoProps } from "./ExtraInfo";
import { InfoBox, InfoBoxProps } from "./InfoBox";
import { LinksList, LinksListProps } from "./LinksList";
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
   * Element containing extra information
   */
  extraInfo?: ExtraInfoProps[];
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
  color: ${(props) => props.theme.color.white};
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
  row-gap: 20px;
  column-gap: 10px;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(3, auto 1fr) [social-link-start] auto;
  grid-template-areas:
    "logo . projects . services . social-link"
    "info-box . projects . services . ."
    "info-box . projects . services . extra";

  ${mqUntil(
    "md",
    css`
      row-gap: 24px;
      column-gap: 0px;
      grid-template-columns: repeat(2, auto 1fr) auto;
      grid-template-areas:
        "logo . projects . services"
        "info-box . projects . services"
        "info-box . projects . services"
        "social-link . projects . services"
        "extra extra extra extra extra";
    `
  )}

  ${mqUntil(
    "sm",
    css`
      row-gap: 45px;
      grid-template-rows: repeat(5, auto);
      grid-template-columns: 45px 1fr;
      grid-template-areas:
        "logo logo"
        "info-box info-box"
        ". projects"
        ". services"
        ". social-link"
        ". extra";
    `
  )}
`;

const LogoWrapper = styled.div`
  grid-area: logo;
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
      justify-self: center;
    `
  )}
`;

const ExtraWrapper = styled.div`
  grid-area: extra;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;

  > :not(:last-child) {
    margin-bottom: 24px;
  }

  ${mqUntil(
    "md",
    css`
      flex-direction: row;
      margin-left: 36px;

      > :not(:last-child) {
        margin-right: 24px;
        margin-bottom: 0;
      }
    `
  )}

  ${mqUntil(
    "sm",
    css`
      flex-direction: column;
      align-items: flex-start;
      margin-left: 0;

      > :not(:last-child) {
        margin-right: 0;
        margin-bottom: 24px;
      }
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
      grid-template-rows: auto auto 1fr;
      column-gap: 10px;
      row-gap: 15px;
      align-items: start;
      grid-template-areas:
        "info-site"
        "info-contacts"
        ".";
    `
  )}

  ${mqUntil(
    "sm",
    css`
      grid-template-columns: auto;
      row-gap: 0;
    `
  )}
`;

const SiteInfoBox = styled(InfoBox)`
  grid-area: info-site;
`;

const ContactsInfoBox = styled(InfoBox)`
  grid-area: info-contacts;
`;

const LeftLinksList = styled(LinksList)`
  grid-area: projects;
`;

const RightLinksList = styled(LinksList)`
  grid-area: services;
`;

const StyledSocialLink = styled(SocialLink)`
  grid-area: social-link;
`;

export const Footer: FC<FooterProps> = ({
  className,
  testId,
  logo,
  leftLinksList,
  rightLinksList,
  siteInfo,
  contactsInfo,
  extraInfo,
  socialLink,
  ...props
}) => {
  return (
    <FooterRoot className={className} data-testid={testId} {...props}>
      <FooterContainer>
        <LogoWrapper>{logo}</LogoWrapper>
        {(siteInfo || contactsInfo) && (
          <InfoWrapper>
            {siteInfo && <SiteInfoBox {...siteInfo} />}
            {contactsInfo && <ContactsInfoBox {...contactsInfo} />}
          </InfoWrapper>
        )}
        {leftLinksList && <LeftLinksList {...leftLinksList} />}
        {rightLinksList && <RightLinksList {...rightLinksList} />}
        {socialLink && <StyledSocialLink {...socialLink} />}
        {extraInfo && (
          <ExtraWrapper>
            {extraInfo.map((props, index) => (
              <ExtraInfo key={index} {...props} />
            ))}
          </ExtraWrapper>
        )}
      </FooterContainer>
    </FooterRoot>
  );
};
