import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles";
import { Icon } from "./Icon";
import { Text } from "./Text";

export type QuoteProps = {
  citation: string;
  authorName: string;
  authorDescription: string;
};

const Background = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.lightGray};
  padding: 66px 25px 58px;
  display: flex;
  justify-content: center;

  ${mqUntil(
    "sm",
    css`
      padding-top: 84px;
      padding-bottom: 30px;
    `
  )}
`;

const Inner = styled.div`
  width: calc(100% / 3 * 2);
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
  text-align: center;

  ${mqUntil(
    "md",
    css`
      width: 100%;
      max-width: 540px;
    `
  )}
`;

const CitationText = styled(Text)`
  margin-bottom: 20px !important;
  position: relative;

  ${mqUntil(
    "sm",
    css`
      margin-bottom: 60px !important;
    `
  )}
`;

const QuoteOpenIcon = styled(Icon)`
  position: absolute;
  top: -14px;
  left: -60px;

  ${mqUntil(
    "sm",
    css`
      top: -55px;
      left: 0;
    `
  )}
`;

const QuoteCloseIcon = styled(Icon)`
  position: absolute;
  bottom: 0;
  right: -60px;

  ${mqUntil(
    "sm",
    css`
      bottom: -45px;
      right: 0;
    `
  )}
`;

const QuoteAuthor = styled(Text)`
  text-transform: uppercase;
`;

export const Quote: FC<QuoteProps> = ({ citation, authorName, authorDescription, ...props }) => {
  return (
    <Background {...props}>
      <Inner>
        <CitationText tag="p" italic size="xl">
          <QuoteOpenIcon name="quote-open" color="primary" size="40px" />
          <QuoteCloseIcon name="quote-close" color="primary" size="40px" />
          {citation}
        </CitationText>
        <QuoteAuthor tag="p" weight="bold" size="lg" responsive={false}>
          {authorName}
        </QuoteAuthor>
        <Text tag="p" weight="bold" responsive={false}>
          {authorDescription}
        </Text>
      </Inner>
    </Background>
  );
};
