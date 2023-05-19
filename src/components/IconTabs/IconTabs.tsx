import { FC } from "react";
import styled from "styled-components";

import { Icon, IconName } from "../Icon/Icon";
import { IconTab } from "./IconTab";

interface TabData {
  id: string | number;
  ariaLabel: string;
  icon: IconName;
}

export type IconTabsProps = {
  tabs: TabData[];
  selected: string | number;
  onSelect?: (id: string | number) => void;
};

const IconTabsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${IconTab}:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const IconTabs: FC<IconTabsProps> = ({ tabs, onSelect, selected, ...props }) => {
  return (
    <IconTabsContainer {...props}>
      {tabs.map(({ id, ariaLabel, icon }) => (
        <IconTab
          key={id}
          aria-label={ariaLabel}
          selected={id === selected}
          onClick={() => onSelect?.(id)}
        >
          <Icon name={icon} size="38px" />
        </IconTab>
      ))}
    </IconTabsContainer>
  );
};
