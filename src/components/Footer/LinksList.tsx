import { FC } from "react";
import styled from "styled-components";

import { Icon } from "../Icon";
import { Text } from "../Text";
import { Title } from "../Title";

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

export interface LinksListProps {
  title?: string;
  links?: LinkListElement[];
}

const LinksListRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
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

const SocialLinkContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

export const LinksList: FC<LinksListProps> = ({ title, links, ...props }) => {
  return (
    <LinksListRoot>
      <Title style={{ marginBottom: "20px" }} variant="H6" color="light">
        {title}
      </Title>

      {links?.map((linkElement, index) => (
        <LinkElementWrapper key={index}>
          <Icon name="chevron-right" size="15px" color="light" />
          <Text color="light" weight="book">
            {linkElement.label}
          </Text>
          <SocialLinkContainer>{linkElement.linkComponent}</SocialLinkContainer>
        </LinkElementWrapper>
      ))}
    </LinksListRoot>
  );
};
