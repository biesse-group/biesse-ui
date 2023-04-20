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
  /**
   * Whether the title has to be upper case
   */
  uppercase?: boolean;
  className?: string;
  style?: CSSProperties;
};

type HeadingProps = Omit<TitleProps, "variant">;

const getHeadingStyle = ({
  size,
  color,
  uppercase,
}: Pick<TitleProps, "size" | "color" | "uppercase">) => css`
  margin-top: 0;
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.regular.headings[size || "md"]};
  text-transform: ${uppercase ? "uppercase" : "none"};

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
    ${({ size = "xxl", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  H2: styled.h2<HeadingProps>`
    ${({ size = "xl", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  H3: styled.h3<HeadingProps>`
    ${({ size = "lg", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  H4: styled.h4<HeadingProps>`
    ${({ size = "md", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  H5: styled.h5<HeadingProps>`
    ${({ size = "sm", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  H6: styled.h6<HeadingProps>`
    ${({ size = "xs", ...props }) => getHeadingStyle({ size, ...props })}
  `,
} as const;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ variant = "H3", ...props }) => {
  const Heading = HEADINGS[variant];
  return <Heading {...props} />;
};
