import React, { FC } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Text } from "./Text";

export type BreadcrumbItemData = {
  label: string;
  path: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItemData[];
  renderLink: (path: string, children: JSX.Element) => JSX.Element;
  className?: string;
};

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
