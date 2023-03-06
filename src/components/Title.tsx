import { FC, PropsWithChildren } from "react";
import styled, { css, CSSProperties } from "styled-components";

export type TitleProps = {
  variant: keyof typeof HEADINGS;
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

const getColor = (color?: TitleProps["color"]) => css`
  color: ${(props) => props.theme.color[color === "light" ? "white" : "primary"]};
`;

const HEADINGS = {
  H1: styled.h1<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.xxl};
  `,
  H2: styled.h2<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.xl};
  `,
  H3: styled.h3<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.lg};
  `,
  H4: styled.h4<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.md};
  `,
  H5: styled.h5<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.sm};
  `,
  H6: styled.h6<HeadingProps>`
    ${headingStyle}
    ${(props) => getColor(props.color)}
    font-size: ${(props) => props.theme.font.headings.xs};
  `,
} as const;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ variant, ...props }) => {
  const Heading = HEADINGS[variant];
  return <Heading {...props} />;
};
