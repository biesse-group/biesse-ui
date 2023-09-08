import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { mqUntil } from "~styles";

import { Tab, type TabProps } from "./Tab";

export interface TabData {
  id: string | number;
  label: string;
  linkUrl?: TabProps["linkUrl"];
}

export interface TabsProps extends BaseProps {
  tabs: TabData[];
  selected: string | number;
  onSelect?: (id: string | number) => void;
}

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  ${mqUntil(
    "sm",
    css`
      overflow-x: auto;
    `
  )}
`;

export const Tabs: FC<TabsProps> = ({ tabs, onSelect, selected, ...props }) => {
  return (
    <TabsContainer {...props}>
      {tabs.map(({ id, label, linkUrl }) => (
        <Tab key={id} $selected={id === selected} onClick={() => onSelect?.(id)} linkUrl={linkUrl}>
          {label}
        </Tab>
      ))}
    </TabsContainer>
  );
};
