import React, { type FC } from "react";
import styled from "styled-components";

import { Text } from "~components/Text";

import { Icon } from "../Icon";

export interface BreadcrumbItemData {
  label: string;
  path: string;
}

export interface BreadcrumbProps {
  /**
   * List of breadcrumb items
   */
  items: BreadcrumbItemData[];
  /**
   * Render link component function
   *
   * @param path the item path to navigate
   * @param children the content of the link element
   * @returns the generated link element
   */
  renderLink: (path: string, children: JSX.Element) => JSX.Element;
  className?: string;
}

const BreadcrumbRoot = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 26px;
  padding: 6px 14px;
  gap: 5px;
  border-radius: 99px;
  background-color: ${(props) => props.theme.breadcrumb.backgroundColor};
`;

const BreadcrumbLabel = styled(Text)`
  text-transform: uppercase;
  font-size: 11px;
  line-height: 12px;
  white-space: nowrap;
  color: ${(props) => props.theme.color.black};
`;

const DividerIcon = styled(Icon)`
  color: ${(props) => props.theme.breadcrumb.dividerColor};
`;

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, renderLink, ...props }) => {
  return (
    <BreadcrumbRoot {...props}>
      {items.map(({ label, path }, index) => {
        const isLast = index === items.length - 1;
        const element = (
          <BreadcrumbLabel style={{ textTransform: "uppercase" }} weight={isLast ? "bold" : "book"}>
            {label}
          </BreadcrumbLabel>
        );
        return (
          <React.Fragment key={index}>
            {isLast ? element : renderLink(path, element)}
            {!isLast && <DividerIcon name="chevron-left" size="12px" />}
          </React.Fragment>
        );
      })}
    </BreadcrumbRoot>
  );
};
