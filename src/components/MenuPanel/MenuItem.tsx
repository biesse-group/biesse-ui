import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Icon } from "~components/Icon";
import { mqUntil } from "~styles";

import { type MenuPanelItem, type MenuPanelProps } from "./menuPanelProps";

type MenuItemProps = Required<Pick<MenuPanelProps, "variant">> &
  Omit<MenuPanelItem, "id" | "divider"> & { active?: boolean } & BaseProps;

const MenuItemArrow = styled(Icon)<{ $alwaysVisible?: boolean }>`
  ${(props) =>
    !props.$alwaysVisible &&
    css`
      opacity: 0;
      transition: opacity 0.2s ease-out;
    `}
`;

const MenuItemButton = styled.button<Pick<MenuItemProps, "variant" | "small">>`
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  white-space: pre-wrap;
  word-break: break-word;
  justify-content: ${({ variant }) => (variant === "white" ? "flex-start" : "space-between")};
  align-items: center;
  height: ${({ variant }) => (variant === "white" || variant === "light" ? "80px" : "auto")};
  padding: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "35px 65px";
      case "secondary":
        return "30px 60px";
      case "white":
      case "light":
        return "0 60px";
      case "dark":
        return "18px 30px";
    }
  }};
  text-align: left;
  background-color: transparent;
  color: ${({ variant, theme }) =>
    variant === "primary" || variant === "dark" ? theme.color.white : theme.color.primary};
  width: 100%;
  text-transform: ${(props) => (props.variant === "light" ? "none" : "uppercase")};
  cursor: pointer;
  font-weight: ${(props) => props.theme.font.weight[props.variant === "light" ? "medium" : "bold"]};
  font-size: ${({ variant, small }) => {
    switch (variant) {
      case "primary":
        return "40px";
      case "secondary":
        return "30px";
      case "light":
        return "22px";
      case "white":
        return "24px";
      case "dark":
        return small ? "22px" : "24px";
    }
  }};

  ${({ variant, small }) =>
    mqUntil(
      "xxl",
      css`
        font-size: ${() => {
          switch (variant) {
            case "primary":
              return "32px";
            case "secondary":
              return "26px";
            case "light":
              return "18px";
            case "white":
              return "20px";
            case "dark":
              return small ? "18px" : "20px";
          }
        }};

        padding-left: 30px;
        padding-right: 30px;
      `
    )}

  ${({ variant, small }) =>
    mqUntil(
      "xl",
      css`
        font-size: ${() => {
          switch (variant) {
            case "primary":
              return "28px";
            case "secondary":
              return "22px";
            case "light":
              return "14px";
            case "white":
              return "18px";
            case "dark":
              return small ? "16px" : "18px";
          }
        }};

        padding-left: 30px;
        padding-right: 30px;
      `
    )}

  ${({ variant, small }) =>
    mqUntil(
      "lg",
      css`
        font-size: ${() => {
          switch (variant) {
            case "primary":
              return "24px";
            case "secondary":
              return "18px";
            case "light":
              return "12px";
            case "white":
              return "16px";
            case "dark":
              return small ? "16px" : "18px";
          }
        }};

        padding-left: 30px;
        padding-right: 30px;
      `
    )}

${({ variant, small }) =>
    mqUntil(
      "md",
      css`
        font-size: ${() => {
          switch (variant) {
            case "primary":
              return "30px";
            case "secondary":
              return "24px";
            case "light":
              return "16px";
            case "white":
              return "18px";
            case "dark":
              return small ? "16px" : "18px";
          }
        }};

        padding-left: 30px;
        padding-right: 30px;
      `
    )}

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

export const MenuItem: FC<MenuItemProps> = ({ label, icon, active, ...props }) => {
  const { variant } = props;
  return (
    <MenuItemButton {...props}>
      {variant === "white" && icon && <MenuItemIcon>{icon}</MenuItemIcon>}
      {label}
      {variant !== "white" && (
        <MenuItemArrow
          name={variant === "dark" ? "chevron-right" : "arrow-right"}
          color={variant === "primary" || variant === "dark" ? "white" : "primary"}
          size={variant === "dark" ? "20px" : "30px"}
          $alwaysVisible={variant === "dark" || active}
        />
      )}
    </MenuItemButton>
  );
};
