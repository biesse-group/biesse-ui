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
   * External link element,
   * function should wrap the argument as children
   */
  renderLink?: (label: string) => JSX.Element;
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
  margin: 5px 0px;
  > div {
    margin-right: 5px;
  }
`;

export const LinksList: FC<LinksListProps> = ({ title, links, ...props }) => {
  return (
    <LinksListRoot {...props}>
      <Title style={{ marginBottom: "20px" }} variant="H6" color="light">
        {title}
      </Title>

      {links?.map((linkElement, index) => (
        <LinkElementWrapper key={index}>
          <Icon name="chevron-right" size="15px" color="light" />

          <Text color="light" weight="book">
            {linkElement.renderLink?.(linkElement.label)}
          </Text>
        </LinkElementWrapper>
      ))}
    </LinksListRoot>
  );
};
