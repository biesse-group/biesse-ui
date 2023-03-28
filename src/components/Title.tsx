import { FC, PropsWithChildren } from "react";
import styled, { css, CSSProperties } from "styled-components";

import { mqUntil } from "../styles/media-queries";
import { BiesseTheme } from "../themes";

export type TitleProps = {
  /**
   * Font size, should be one of `xxl`, `xl`, `lg`, `md`, `sm`, `xs`
   */
  size?: keyof BiesseTheme["font"]["regular"]["headings"];
  /**
   * Heading tag, should be one of `H1`, `H2`, `H3`, `H4`, `H5`, `H6`
   */
  variant: keyof typeof HEADINGS;
  /**
   * Title color, can ben `primary` or `light`
   */
  color?: "primary" | "light";
  className?: string;
  style?: CSSProperties;
};

type HeadingProps = Omit<TitleProps, "variant">;

const headingStyle = css`
  text-transform: uppercase;
  margin-top: 0;
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

const getSize = (size: TitleProps["size"]) => css`
  font-size: ${(props) => props.theme.font.regular.headings[size || "md"]};

  ${(props) =>
    mqUntil(
      "md",
      css`
        font-size: ${props.theme.font.tablet.headings[size || "md"]};
      `
    )}

  ${(props) =>
    mqUntil(
      "sm",
      css`
        font-size: ${props.theme.font.mobile.headings[size || "md"]};
      `
    )}
`;

const getColor = (color?: TitleProps["color"]) => css`
  color: ${(props) => {
    switch (color) {
      case "light":
        return props.theme.color["white"];
      case "primary":
        return props.theme.color["primary"];
      default:
        return "inherit";
    }
  }};
`;

const HEADINGS = {
  H1: styled.h1<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "xxl")};
  `,
  H2: styled.h2<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "xl")};
  `,
  H3: styled.h3<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "lg")};
  `,
  H4: styled.h4<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "md")};
  `,
  H5: styled.h5<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "sm")};
  `,
  H6: styled.h6<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    ${(props) => getSize(props.size || "xs")};
  `,
} as const;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ variant = "H3", ...props }) => {
  const Heading = HEADINGS[variant];
  return <Heading {...props} />;
};
