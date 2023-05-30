import styled from "styled-components";

import { MenuPanelProps } from "./menuPanelProps";

export const MenuDivider = styled.div<Pick<MenuPanelProps, "variant">>`
  height: 1px;
  background-color: ${({ variant, theme }) =>
    theme.color[variant === "primary" || variant === "dark" ? "white" : "primary"]};
  margin: ${(props) => {
    switch (props.variant) {
      case "primary":
        return "35px 70px";
      case "dark":
        return "20px 30px";
      default:
        return "30px 60px";
    }
  }};
`;
