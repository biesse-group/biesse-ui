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
}

const InfoBoxBodyContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 1fr;
  column-gap: 20px;

  ${mqUntil(
    "sm",
    css`
      grid-template-rows: auto auto;
      grid-template-columns: 35px 1fr;
      column-gap: 10px;
    `
  )}
`;

const InfoTitleWrapper = styled.div`
  grid-area: 1/2;
  > span {
    font-weight: bold;
  }
`;

const InfoIcon = styled(Icon)`
  grid-area: 2 / 1;
  justify-self: end;
  align-self: end;

  margin-bottom: 5px;

  ${mqUntil(
    "sm",
    css`
      align-self: start;
    `
  )}
`;

const InfoTextWrapper = styled.div`
  white-space: normal;
  grid-area: 2 / 2;
`;

export const ContactsInfoBox: FC<InfoBoxProps> = ({ title, body, iconName, ...props }) => {
  return (
    <InfoBoxBodyContainer {...props}>
      {title && (
        <InfoTitleWrapper>
          <Text size="xs" color="light" font-weight="book">
            {title}
          </Text>
        </InfoTitleWrapper>
      )}
      {iconName && <InfoIcon name={iconName} size="20px" color="light" />}

      {typeof body === "string" ? (
        <InfoTextWrapper>
          <Text size="xs" color="light" font-weight="book">
            {body}
          </Text>
        </InfoTextWrapper>
      ) : (
        <InfoTextWrapper>{body}</InfoTextWrapper>
      )}
    </InfoBoxBodyContainer>
  );
};
