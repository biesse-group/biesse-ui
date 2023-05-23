import React, { FC } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Text } from "./Text";

export type BreadcrumbProps = {
  items: string[];
  renderLink: (children: JSX.Element) => JSX.Element;
};

const BreadcrumbRoot = styled.div`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 14px;
  border-radius: ${(props) => props.theme.breadcrumb.borderRadius};
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
  margin: 0 5px;
`;

export const Breadcrumb: FC<BreadcrumbProps> = ({ items, renderLink }) => {
  return (
    <BreadcrumbRoot>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const element = (
          <BreadcrumbLabel style={{ textTransform: "uppercase" }} weight={isLast ? "bold" : "book"}>
            {item}
          </BreadcrumbLabel>
        );
        return (
          <React.Fragment key={index}>
            {isLast ? element : renderLink(element)}
            {!isLast && <DividerIcon name="chevron-left" size="12px" />}
          </React.Fragment>
        );
      })}
    </BreadcrumbRoot>
  );
};
