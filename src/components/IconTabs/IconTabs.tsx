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
  variant?: "vertical" | "horizontal";
  className?: string;
};

const IconTabsContainer = styled.div<Pick<IconTabsProps, "variant">>`
  display: flex;
  flex-direction: ${(props) => (props.variant === "vertical" ? "column" : "row")};
  gap: 20px;
`;

export const IconTabs: FC<IconTabsProps> = ({
  tabs,
  onSelect,
  selected,
  variant = "vertical",
  ...props
}) => {
  return (
    <IconTabsContainer variant={variant} {...props}>
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
