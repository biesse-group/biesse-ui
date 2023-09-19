import { type FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "~styles";

import { IconButton } from "../IconButton";
import { Text } from "../Text";
import { MenuDivider } from "./MenuDivider";
import { MenuItem } from "./MenuItem";
import { type MenuPanelProps } from "./menuPanelProps";

const Panel = styled.div<Pick<MenuPanelProps, "variant" | "width">>`
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
  width: ${(props) => props.width ?? "100%"};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ControlsContainer = styled.div<Pick<MenuPanelProps, "variant">>`
  display: flex;
  flex: none;
  width: 100%;
  height: 97px;
  padding: 20px 20px 27px
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return "70px";
        case "dark":
          return "30px";
        default:
          return "60px";
      }
    }};

  ${mqUntil(
    "xxl",
    css`
      padding-left: 30px;
    `
  )}
`;

const MenuItemsContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`;

const MenuExtra = styled.div<Pick<MenuPanelProps, "variant">>`
  flex: none;
  margin-bottom: 40px;
  padding: 0
    ${(props) => {
      switch (props.variant) {
        case "primary":
          return "70px";
        case "dark":
          return "30px";
        default:
          return "60px";
      }
    }};

  ${mqUntil(
    "xxl",
    css`
      padding: 0 30px;
    `
  )}
`;

const MenuTitle = styled(Text)<Pick<MenuPanelProps, "variant">>`
  text-transform: uppercase;
  padding: 0 ${(props) => (props.variant === "primary" ? "70px" : "60px")};
  margin-bottom: 15px;

  ${mqUntil(
    "xxl",
    css`
      padding: 0 30px;
    `
  )}
`;

export const MenuPanel: FC<MenuPanelProps> = ({
  className,
  items,
  activeItem,
  variant = "primary",
  width = "100%",
  title,
  extra,
  onClose,
  onBack,
}) => {
  return (
    <Panel {...{ variant, width, className }}>
      <ControlsContainer variant={variant}>
        {onBack && (
          <IconButton
            variant={
              variant === "primary" ? "primary-inverted" : variant === "dark" ? "light" : "primary"
            }
            icon="arrow-left"
            aria-label="back"
            onClick={onBack}
          />
        )}
        {onClose && (
          <IconButton
            variant={
              variant === "primary" ? "primary-inverted" : variant === "dark" ? "light" : "primary"
            }
            icon="close"
            aria-label="close"
            onClick={onClose}
            style={{ marginLeft: "auto" }}
          />
        )}
      </ControlsContainer>
      {extra && <MenuExtra variant={variant}>{extra}</MenuExtra>}
      {title && (
        <MenuTitle
          tag="p"
          variant={variant}
          color={variant === "primary" || variant === "dark" ? "light" : "primary"}
        >
          {title}
        </MenuTitle>
      )}
      <MenuItemsContainer>
        {items.map(({ divider, id, ...itemProps }, index) =>
          divider ? (
            <MenuDivider key={index} variant={variant} />
          ) : (
            <MenuItem key={index} variant={variant} active={id === activeItem} {...itemProps} />
          )
        )}
      </MenuItemsContainer>
    </Panel>
  );
};
