import { CSSProperties, FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { BiesseTheme } from "../themes";

export type TextProps = {
  size?: keyof BiesseTheme["font"]["body"];
  weight?: keyof BiesseTheme["font"]["weight"];
  color?: "default" | "primary" | "light";
  tag?: "span" | "p";
  style?: CSSProperties;
};

const getColor = (color?: TextProps["color"]) => css`
  color: ${(props) => {
    switch (color) {
      case "light":
        return props.theme.color.white;
      case "primary":
        return props.theme.color.primary;
      default:
        return props.theme.color.black;
    }
  }};
`;

const getLineHeight = (size?: TextProps["size"]) => css`
  line-height: ${(props) => {
    switch (size) {
      case "xs":
        return "18px";
      case "sm":
        return "20px";
      case "lg":
        return "26px";
      default:
        return "24px";
    }
  }};
`;

const textStyle = css<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight[props.weight || "book"]};
  font-size: ${(props) => props.theme.font.body[props.size || "md"]};
  ${(props) => getLineHeight(props.size)};
  ${(props) => getColor(props.color)};
`;

const StyledSpan = styled.span<TextProps>`
  ${textStyle}
`;

const StyledParagraph = styled.p<TextProps>`
  ${textStyle};
  margin: 0;
`;

export const Text: FC<PropsWithChildren<TextProps>> = ({ tag = "span", ...props }) => {
  const TextComponent = tag === "span" ? StyledSpan : StyledParagraph;
  return <TextComponent {...props} />;
};
