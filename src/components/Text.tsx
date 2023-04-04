import { CSSProperties, FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles/media-queries";
import { BiesseTheme } from "../themes";

export type TextProps = {
  /**
   * Font size, should be one of `xl`, `lg`, `md`, `sm`, `xs`
   */
  size?: keyof BiesseTheme["font"]["regular"]["body"];
  /**
   * Font size, should be one of `book`, `regular`, `medium`, `bold`
   */
  weight?: keyof BiesseTheme["font"]["weight"];
  /**
   * Font size, should be one of `default` (inherit), `primary`, `light`, `dark`, 'gray'
   */
  color?: "default" | "primary" | "light" | "dark" | "gray";
  /**
   * Use italic font style
   */
  italic?: boolean;
  /**
   * Whether font size changes on smaller screens (default `true`)
   */
  responsive?: boolean;
  /**
   * Text tag (`span` inline or `p` paragraph)
   */
  tag?: "span" | "p";
  /**
   * Additional CSS style
   */
  style?: CSSProperties;
};

const getColor = (color?: TextProps["color"]) => css`
  color: ${(props) => {
    switch (color) {
      case "light":
        return props.theme.color.white;
      case "primary":
        return props.theme.color.primary;
      case "dark":
        return props.theme.color.black;
      case "gray":
        return props.theme.color.gray;
      default:
        return "inherit";
    }
  }};
`;

const getLineHeight = (size?: TextProps["size"]) => css`
  line-height: ${() => {
    switch (size) {
      case "xs":
        return "18px";
      case "sm":
        return "20px";
      case "lg":
        return "26px";
      case "xl":
        return "28px";
      default:
        return "24px";
    }
  }};
`;

const getSize = (size: TextProps["size"] = "md", responsive = true) => css`
  font-size: ${(props) => props.theme.font.regular.body[size]};

  ${(props) =>
    responsive &&
    mqUntil(
      "md",
      css`
        font-size: ${props.theme.font.tablet.body[size]};
      `
    )}

  ${(props) =>
    responsive &&
    mqUntil(
      "sm",
      css`
        font-size: ${props.theme.font.mobile.body[size]};
      `
    )}
`;

const textStyle = css<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight[props.weight || "book"]};
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
  ${(props) => getSize(props.size, props.responsive)};
  ${(props) => getLineHeight(props.size)};
  ${(props) => getColor(props.color)};
`;

const StyledSpan = styled.span<TextProps>`
  ${textStyle}

  a {
    ${textStyle}
  }
`;

const StyledParagraph = styled.p<TextProps>`
  ${textStyle};
  margin: 0;

  a {
    ${textStyle}
  }
`;

export const Text: FC<PropsWithChildren<TextProps>> = ({ tag = "span", ...props }) => {
  const TextComponent = tag === "span" ? StyledSpan : StyledParagraph;
  return <TextComponent {...props} />;
};
