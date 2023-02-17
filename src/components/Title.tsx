import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const HEADINGS = {
  H1: styled.h1`
    font-size: ${(props) => props.theme.font.headings.xxl};
  `,
  H2: styled.h2`
    font-size: ${(props) => props.theme.font.headings.xl};
  `,
  H3: styled.h3`
    font-size: ${(props) => props.theme.font.headings.lg};
  `,
  H4: styled.h4`
    font-size: ${(props) => props.theme.font.headings.md};
  `,
  H5: styled.h5`
    font-size: ${(props) => props.theme.font.headings.sm};
  `,
  H6: styled.h6`
    font-size: ${(props) => props.theme.font.headings.xs};
  `,
} as const;

export type TitleProps = {
  variant: keyof typeof HEADINGS;
  color?: "primary" | "light";
  className?: string;
};

const getColor = (color?: TitleProps["color"]) => css`
  color: ${(props) => props.theme.color[color === "light" ? "white" : "primary"]};
`;

export const Title: FC<PropsWithChildren<TitleProps>> = ({ variant, color, children }) => {
  const Heading = HEADINGS[variant];
  const StyledHeading = styled(Heading)`
    text-transform: uppercase;
    margin-top: 0;
    ${getColor(color)}
  `;
  return <StyledHeading>{children}</StyledHeading>;
};
