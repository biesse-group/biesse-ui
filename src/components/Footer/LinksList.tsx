import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Icon } from "~components/Icon";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { mqUntil } from "~styles";

export interface LinkListElement {
  /**
   * Link text
   */
  label: string;
  /**
   * External link element, function should wrap the argument as children
   */
  renderLink?: (label: string) => React.ReactNode;
  className?: string;
}

export interface LinksListProps extends BaseProps {
  title: string;
  links?: LinkListElement[];
}

const LinksListRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const LinkListTitle = styled(Title)`
  margin-left: 6px;
  margin-bottom: 20px;
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
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

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
      <LinkListTitle variant="h6" color="light" uppercase>
        {title}
      </LinkListTitle>
      {links?.map((linkElement, index) => (
        <LinkElementWrapper key={index}>
          <ArrowIcon name="chevron-right" size="18px" color="white" />
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
