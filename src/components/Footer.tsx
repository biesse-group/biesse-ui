import { FC } from "react";
import styled from "styled-components";

import { Icon, IconName } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";

interface LinkListElement {
  /**
   * Link text
   */
  label: string;
  /**
   * External link element
   */
  linkComponent?: JSX.Element;
}

interface LinkList {
  title: string;
  links: LinkListElement[];
}

interface LocatorBoxProps {
  /**
   * Title to be shown on top of locator
   */
  title: string;
  render: JSX.Element;
}

interface SocialLinkProps {
  /**
   * Label next to the social link
   */
  label: string;
  socialIcon: IconName;
  link: JSX.Element;
}

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
   * Link list on the central body
   * first to the left
   */
  projectsLinks?: LinkList;
  /**
   * Link list on the central body
   * second to the left
   */
  servicesLinks?: LinkList;
  /**
   * Element on the right, should contain  contacts map
   */
  contactsLocator?: LocatorBoxProps;
  /**
   * Body of the location section
   */
  locationBody?: string | JSX.Element;
  /**
   * Title of the contacts section
   */
  contactsBody?: string | JSX.Element;
  /**
   * Social Link
   * located top right only in desktop view
   */
  socialLink?: SocialLinkProps;
  testId?: string;
}

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary};
  min-height: 300px;

  display: grid;

  grid-template-rows: auto 1fr;
  grid-template-columns: 2fr 1fr 1fr 2fr;

  padding: 40px 90px 50px 90px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 60px 25px 40px 25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: 55px auto;
    row-gap: 44px;
    padding: 60px 0px 45px 0px;
  }
`;

const LogoWrapper = styled.div`
  grid-area: 1 / 1;

  margin-bottom: 48px;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-bottom: 0px;
    align-self: center;

    grid-area: 1 / 1 / span 1 / span 2;
    display: flex;
    justify-content: center;
  }
`;

const LinkListWrapper = styled.div<{ column: "left" | "right" }>`
  grid-area: 1 / ${(props) => (props.column === "left" ? 2 : 3)} / span 2 / span 1;
  justify-self: center;

  display: flex;
  flex-direction: column;

  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-area: 2 / ${(props) => (props.column === "left" ? 1 : 2)};
    justify-self: start;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-area: ${(props) => (props.column === "left" ? 3 : 4)} / 2;
    justify-self: start;
  }
`;

const LinkElementWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 0px;
  > div {
    margin-right: 5px;
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

const FooterTitle = styled(Title)`
  margin-bottom: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

const LinkText = styled(Text)`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 13px;
  }
`;

const renderLinkList = (linkList?: LinkList) => (
  <>
    <FooterTitle variant="H6" color="light">
      {linkList?.title}
    </FooterTitle>
    <>
      {linkList?.links.map((linkElement, index) => (
        <LinkElementWrapper key={index}>
          <Icon name="chevron-right" size="15px" color="light" />
          <LinkText color="light" weight="book">
            {linkElement.label}
          </LinkText>
          <LinkContainer>{linkElement.linkComponent}</LinkContainer>
        </LinkElementWrapper>
      ))}
    </>
  </>
);

const LocatorWrapper = styled.div`
  grid-area: 1 / 4 / span 2 / span 1;

  justify-self: end;

  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-area: 2 / 3;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-area: 2 / 2;
    justify-self: start;
  }
`;

const LocatorComponentWrapper = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
`;

const InfoWrapper = styled.div`
  grid-area: 2 / 1;
  display: inline-flex;
  flex-direction: column;
  align-self: end;
  margin-top: 24px;
  > div {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
    margin-right: 20px;
    > div {
      margin-right: 20px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      grid-area: 3 / 1 / span 1 / span 3;
      flex-direction: row;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    grid-area: 5 / 1 / span 1 / span 2;
  }
`;

const InfoText = styled(Text)`
  white-space: pre;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 12px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 12px;
  }
`;

const SocialWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  > span {
    margin-right: 12px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
const SocialLinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const LocatorTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
      margin-left: 20px;
    }
  }
`;

const LocatorTitle = styled(Title)`
  margin-bottom: 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const Footer: FC<FooterProps> = ({
  className,
  testId,
  logo,
  projectsLinks,
  servicesLinks,
  contactsLocator,
  locationBody,
  contactsBody,
  socialLink,
  ...props
}) => {
  return (
    <FooterContainer className={className} data-testid={testId} {...props}>
      <LogoWrapper>{logo}</LogoWrapper>
      <InfoWrapper>
        {typeof locationBody === "string" ? (
          <div>
            <Icon name="location" size="xs" color="light" />
            <InfoText size="xs" color="light" font-weight="book">
              {locationBody}
            </InfoText>
          </div>
        ) : (
          <div>
            <Icon name="location" size="xs" color="light" />
            {locationBody}
          </div>
        )}
        {typeof contactsBody === "string" ? (
          <div>
            <Icon name="contacts" size="xs" color="light" />

            <InfoText size="xs" color="light" font-weight="book">
              {contactsBody}
            </InfoText>
          </div>
        ) : (
          <div>
            <Icon name="contacts" size="xs" color="light" />
            {contactsBody}
          </div>
        )}
      </InfoWrapper>
      <LinkListWrapper column="left">{renderLinkList(projectsLinks)}</LinkListWrapper>
      <LinkListWrapper column="right">{renderLinkList(servicesLinks)}</LinkListWrapper>
      {contactsLocator && (
        <LocatorWrapper>
          <LocatorTitleWrapper>
            <LocatorTitle variant="H6" color="light">
              {contactsLocator.title}
            </LocatorTitle>
            {socialLink && (
              <SocialWrapper>
                <Text color="light" weight="book">
                  {socialLink.label}
                </Text>
                <div style={{ position: "relative" }}>
                  <Icon name={socialLink.socialIcon} size="xs" color="light" />
                  <SocialLinkWrapper>{socialLink.link}</SocialLinkWrapper>
                </div>
              </SocialWrapper>
            )}
          </LocatorTitleWrapper>
          <LocatorComponentWrapper>{contactsLocator.render}</LocatorComponentWrapper>
        </LocatorWrapper>
      )}
    </FooterContainer>
  );
};
