import { type FC } from "react";
import styled from "styled-components";

import { type BaseProps } from "~components/baseProps";
import { Icon, type IconName } from "~components/Icon";

import { IconTab } from "./IconTab";

export interface IconTabData {
  id: string | number;
  ariaLabel: string;
  icon: IconName;
}

export interface IconTabsProps extends BaseProps {
  tabs: IconTabData[];
  selected: string | number;
  onSelect?: (id: string | number) => void;
  variant?: "vertical" | "horizontal";
}

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
          onClick={() => onSelect?.(id)}
          $selected={id === selected}
        >
          <Icon name={icon} size="38px" />
        </IconTab>
      ))}
    </IconTabsContainer>
  );
};
