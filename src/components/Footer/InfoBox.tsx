import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Icon, IconName } from "../Icon";
import { Text } from "../Text";

export interface InfoBoxProps {
  /**
   * Title of the info section, set in bold
   */
  title?: string;
  /**
   * Text to be displayed in the info section
   */
  body?: string | JSX.Element;
  /**
   * Icon to be placed on the left of the info box
   */
  iconName?: IconName;
  className?: string;
}

const InfoBoxBodyContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 1fr;
  column-gap: 20px;

  ${mqUntil(
    "md",
    css`
      column-gap: 10px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      grid-template-columns: 35px 1fr;
    `
  )}
`;

const InfoTitle = styled(Text)`
  grid-area: 1/2;
`;

const InfoIcon = styled(Icon)`
  grid-area: 2 / 1;
  justify-self: end;
  align-self: end;
  margin-bottom: 5px;

  ${mqUntil(
    "md",
    css`
      align-self: start;
    `
  )}
`;

const InfoTextWrapper = styled.div`
  white-space: normal;
  grid-area: 2 / 2;
`;

export const InfoBox: FC<InfoBoxProps> = ({ title, body, iconName, ...props }) => {
  return (
    <InfoBoxBodyContainer {...props}>
      {title && (
        <InfoTitle size="xs" color="light" weight="bold">
          {title}
        </InfoTitle>
      )}
      {iconName && <InfoIcon name={iconName} size="24px" color="white" />}
      <InfoTextWrapper>
        {typeof body === "string" ? (
          <Text size="xs" color="light" weight="book">
            {body}
          </Text>
        ) : (
          body
        )}
      </InfoTextWrapper>
    </InfoBoxBodyContainer>
  );
};
