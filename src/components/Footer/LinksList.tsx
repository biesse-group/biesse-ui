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

const TitleWrapper = styled.div`
  margin-left: 6px;
`;

const LinkElementWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

const ArrowIcon = styled(Icon)`
  margin-right: 10px;
`;

export const LinksList: FC<LinksListProps> = ({ title, links, ...props }) => {
  return (
    <LinksListRoot {...props}>
      <TitleWrapper>
        <Title style={{ marginBottom: "20px" }} variant="H6" color="light">
          {title}
        </Title>
      </TitleWrapper>

      {links?.map((linkElement, index) => (
        <LinkElementWrapper key={index}>
          <ArrowIcon name="chevron-right" size="18px" color="light" />

          <Text color="light" weight="book">
            {linkElement.renderLink?.(linkElement.label)}
          </Text>
        </LinkElementWrapper>
      ))}
    </LinksListRoot>
  );
};
