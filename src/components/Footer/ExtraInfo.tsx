import React, { type FC } from "react";
import styled, { css } from "styled-components";

import { Text } from "~components/Text";
import { mqUntil } from "~styles";

export interface ExtraInfoProps {
  title: string;
  lines: Array<string | JSX.Element>;
}

const Root = styled.div<{ linesCount: number }>`
  display: flex;
  flex-direction: column;

  ${mqUntil(
    "md",
    css`
      flex-direction: row;
      align-items: center;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      flex-direction: column;
      align-items: flex-start;
    `
  )}
`;

const ExtraText = styled(Text)<{ isTitle?: boolean }>`
  ${mqUntil(
    "md",
    css`
      font-size: 13px;

      a {
        font-size: 13px;
        text-decoration: underline;
      }
    `
  )}

  ${mqUntil(
    "sm",
    css`
      font-size: 14px;

      a {
        font-size: 14px;
      }
    `
  )}

  ${(props) =>
    props.isTitle &&
    mqUntil(
      "md",
      css`
        margin-right: 8px;
      `
    )}
`;

const Separator = styled.span`
  display: none;
  margin: 0 8px;

  ${mqUntil(
    "md",
    css`
      display: inline-flex;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      display: none;
    `
  )}
`;

export const ExtraInfo: FC<ExtraInfoProps> = ({ title, lines }) => {
  return (
    <Root linesCount={lines.length}>
      <ExtraText tag="p" weight="bold" size="lg" isTitle>
        {title}
      </ExtraText>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          <ExtraText tag="p" size="lg">
            {line}
          </ExtraText>
          {index < lines.length - 1 && <Separator>-</Separator>}
        </React.Fragment>
      ))}
    </Root>
  );
};
