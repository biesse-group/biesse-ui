import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { Title } from "../Title";

interface LinkListElement {
  /**
   * Link text
   */
  label: string;
  /**
   * External link element, function should wrap the argument as children
   */
  renderLink?: (label: string) => JSX.Element;
  className?: string;
}

export interface LinksListProps {
  title: string;
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

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const LinkText = styled(Text)`
  ${mqUntil(
    "md",
    css`
      font-size: 13px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      font-size: 14px;
    `
  )}
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
          <LinkText color="light" weight="book">
            {linkElement.renderLink
              ? linkElement.renderLink?.(linkElement.label)
              : linkElement.label}
          </LinkText>
        </LinkElementWrapper>
      ))}
    </LinksListRoot>
  );
};
