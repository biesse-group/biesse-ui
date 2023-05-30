import { FC } from "react";
import styled from "styled-components";

import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { MenuItem } from "./MenuItem";
import { MenuPanelProps } from "./menuPanelProps";

const Panel = styled.div<Required<Pick<MenuPanelProps, "variant" | "width">>>`
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.color.primary;
      case "secondary":
        return theme.color.secondary;
      case "light":
        return theme.color.lightGray;
      case "white":
        return theme.color.white;
      case "dark":
        return theme.color.black;
    }
  }};
  width: ${(props) => props.width};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CloseContainer = styled.div`
  height: 97px;
  padding: 20px 20px 27px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`;

const MenuExtra = styled.div<Pick<MenuPanelProps, "variant">>`
  padding: 0 ${(props) => (props.variant === "primary" ? "70px" : "60px")};
  margin-bottom: 40px;
`;

const MenuTitle = styled(Text)<Pick<MenuPanelProps, "variant">>`
  text-transform: uppercase;
  padding: 0 ${(props) => (props.variant === "primary" ? "70px" : "60px")};
  margin-bottom: 15px;
`;

export const MenuPanel: FC<MenuPanelProps> = ({
  className,
  items,
  variant = "primary",
  width = "100%",
  title,
  extra,
  onClose,
}) => {
  return (
    <Panel {...{ variant, width, className }}>
      <CloseContainer>
        {onClose && (
          <IconButton
            variant={variant === "primary" ? "primary-inverted" : "primary"}
            icon="close"
            aria-label="close"
          />
        )}
      </CloseContainer>
      {extra && <MenuExtra variant={variant}>{extra}</MenuExtra>}
      {title && (
        <MenuTitle tag="p" variant={variant} color={variant === "primary" ? "light" : "primary"}>
          {title}
        </MenuTitle>
      )}
      <MenuItems>
        {items.map((itemProps, index) => (
          <MenuItem key={index} {...itemProps} variant={variant} />
        ))}
      </MenuItems>
    </Panel>
  );
};
