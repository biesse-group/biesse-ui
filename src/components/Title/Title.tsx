import { type FC, type PropsWithChildren } from "react";
import styled, {
  css,
  type CSSProperties,
  type DefaultTheme,
  type StyledComponent,
} from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { mqUntil } from "~styles/media-queries";
import { type BiesseTheme } from "~themes";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps extends BaseProps {
  /**
   * Font size, should be one of `xxl`, `xl`, `lg`, `md`, `sm`, `xs`
   */
  size?: keyof BiesseTheme["font"]["regular"]["headings"];
  /**
   * Heading tag, should be one of `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
   */
  variant: HeadingTag;
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
}

type HeadingProps = Omit<TitleProps, "variant">;

const getHeadingStyle = ({
  size,
  color,
  uppercase,
}: Pick<TitleProps, "size" | "color" | "uppercase">) => css`
  margin-top: 0;
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.regular.headings[size ?? "md"]};
  text-transform: ${uppercase ? "uppercase" : "none"};

  ${(props) =>
    mqUntil(
      "md",
      css`
        font-size: ${props.theme.font.tablet.headings[size ?? "md"]};
      `
    )}

  ${(props) =>
    mqUntil(
      "sm",
      css`
        font-size: ${props.theme.font.mobile.headings[size ?? "md"]};
      `
    )}

  color: ${(props) => {
    switch (color) {
      case "light":
        return props.theme.color.white;
      case "primary":
        return props.theme.color.primary;
      default:
        return "inherit";
    }
  }};
`;

const HEADINGS: Record<HeadingTag, StyledComponent<HeadingTag, DefaultTheme, HeadingProps>> = {
  h1: styled.h1<HeadingProps>`
    ${({ size = "xxl", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  h2: styled.h2<HeadingProps>`
    ${({ size = "xl", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  h3: styled.h3<HeadingProps>`
    ${({ size = "lg", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  h4: styled.h4<HeadingProps>`
    ${({ size = "md", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  h5: styled.h5<HeadingProps>`
    ${({ size = "sm", ...props }) => getHeadingStyle({ size, ...props })}
  `,
  h6: styled.h6<HeadingProps>`
    ${({ size = "xs", ...props }) => getHeadingStyle({ size, ...props })}
  `,
} as const;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ variant = "h3", ...props }) => {
  const Heading = HEADINGS[variant];
  return <Heading {...props} />;
};
