import { FC } from "react";
import styled, { css } from "styled-components";

import { Icon } from "../Icon";
import { MenuPanelItem, MenuPanelProps } from "./menuPanelProps";

type MenuItemProps = Required<Pick<MenuPanelProps, "variant">> & MenuPanelItem;

const MenuItemArrow = styled(Icon)`
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

const MenuItemButton = styled.button<Pick<MenuItemProps, "variant">>`
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: ${({ variant }) => (variant === "white" ? "flex-start" : "space-between")};
  align-items: center;
  height: ${({ variant }) => (variant === "white" || variant === "light" ? "80px" : "auto")};
  padding: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "35px 70px";
      case "secondary":
        return "30px 60px";
      case "white":
      case "light":
        return "0 60px";
    }
  }};
  text-align: left;
  background-color: transparent;
  color: ${(props) =>
    props.variant === "primary" ? props.theme.color.white : props.theme.color.primary};
  width: 100%;
  text-transform: ${(props) => (props.variant === "light" ? "none" : "uppercase")};
  cursor: pointer;
  font-weight: ${(props) => props.theme.font.weight[props.variant === "light" ? "medium" : "bold"]};
  font-size: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "40px";
      case "secondary":
        return "30px";
      case "light":
        return "22px";
      case "white":
        return "24px";
    }
  }};

  &:hover {
    ${MenuItemArrow} {
      opacity: 1;
    }
  }

  ${(props) =>
    props.variant === "light" &&
    css`
      border-top: 1px solid #d8d8d8;
      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: ${(props) => props.theme.color.white};
      }
    `}
`;

const MenuItemIcon = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-right: 20px;
`;

export const MenuItem: FC<MenuItemProps> = ({ label, icon, ...props }) => {
  return (
    <MenuItemButton {...props}>
      {props.variant === "white" && icon && <MenuItemIcon>{icon}</MenuItemIcon>}
      {label}
      {props.variant !== "white" && (
        <MenuItemArrow
          name="arrow-right"
          color={props.variant === "primary" ? "white" : "primary"}
          size="30px"
        />
      )}
    </MenuItemButton>
  );
};
