import { FC } from "react";
import styled from "styled-components";

import { Tab } from "./Tab";

interface TabData {
  id: string | number;
  label: string;
}

export type TabsProps = {
  tabs: TabData[];
  selected: string | number;
  onSelect?: (id: string | number) => void;
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${Tab}:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Tabs: FC<TabsProps> = ({ tabs, onSelect, selected }) => {
  return (
    <TabsContainer>
      {tabs.map(({ id, label }) => (
        <Tab key={id} selected={id === selected} onClick={() => onSelect?.(id)}>
          {label}
        </Tab>
      ))}
    </TabsContainer>
  );
};
