import { type FC, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { Icon } from "~components/Icon";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { useUniqueDates } from "~hooks/useUniqueDates";
import { borderRadius } from "~styles";
import { mqUntil } from "~styles/media-queries";

import { type EventCardProps } from "./eventCardProps";

const DateLinkIcon = styled(Icon)`
  opacity: 0;
  transition: opacity 0.2s ease-out;
  margin: auto;

  ${mqUntil(
    "md",
    css`
      opacity: 1;
    `
  )};
`;

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 85px auto;
  background-color: ${(props) => props.theme.color.lightGray};
  transition: all 0.2s ease-out;
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  ${(props) => borderRadius(props.theme.card.borderRadius)}

  :hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};
    ${DateLinkIcon} {
      opacity: 1;
    }
  }
`;

const EventCardMainWrapper = styled.div`
  grid-area: 1/ 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0px 22px;
`;

const CardTitle = styled(Title)`
  margin-bottom: 11px;
  white-space: pre-wrap;
  word-break: break-word;
`;

const DateSeparator = styled.span`
  margin: 0 4px;

  ${mqUntil(
    "sm",
    css`
      display: none;
    `
  )}
`;

const DateSubtitle = styled(Text)`
  ${mqUntil(
    "sm",
    css`
      display: inline-flex;
      flex-direction: column;
    `
  )}
`;

const DateLinkWrapper = styled.div`
  grid-area: 1/ 1 / span 2 / span 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 15px 0px 20px;
  text-align: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
`;

const ChildWrapper = styled.div`
  grid-area: 2 / 2;
  padding: 28px 15px 20px 20px;
`;

const DateDay = styled(Text)`
  margin-bottom: 0px;
  line-height: 40px;
  font-size: ${(props) => props.theme.font.regular.headings.xl};

  ${mqUntil(
    "sm",
    css`
      font-size: 40px;
    `
  )}
`;

export const PrimaryEventCard: FC<PropsWithChildren<Omit<EventCardProps, "variant">>> = ({
  testId,
  title,
  titleTag = "h3",
  startDate,
  endDate,
  description,
  children,
  location,
  ...props
}) => {
  const uniqueDates = useUniqueDates(startDate, endDate);
  return (
    <EventCardRoot data-testid={testId} {...props}>
      <DateLinkWrapper>
        <DateDay weight="bold">{`${startDate.format("DD")}`}</DateDay>
        <Text size="md" weight="medium">
          {`${startDate.format("MMMYY")}`.toUpperCase()}
        </Text>
        {uniqueDates.length > 1 && endDate && (
          <>
            <DateDay weight="bold">{`${endDate.format("MM")}`}</DateDay>
            <Text size="md" weight="medium">
              {`${endDate.format("MMMYY")}`.toUpperCase()}
            </Text>
          </>
        )}
        <DateLinkIcon name="arrow-right" color="white" size="23px" />
      </DateLinkWrapper>

      <EventCardMainWrapper>
        <CardTitle variant={titleTag} size="lg" color="primary" uppercase>
          {title}
        </CardTitle>
        <div style={{ marginBottom: 20 }}>
          <DateSubtitle size="sm" italic>
            <span>{startDate.format("DD MMMM YYYY")}</span>
            {uniqueDates.length > 1 && endDate && (
              <>
                <DateSeparator>/</DateSeparator>
                <span>{endDate.format("DD MMMM YYYY")}</span>
              </>
            )}
          </DateSubtitle>
          {location && (
            <Text tag="p" size="sm" italic>
              {location}
            </Text>
          )}
        </div>
        <Text>
          {typeof description === "string" ? <Text size="md">{description}</Text> : description}
        </Text>
      </EventCardMainWrapper>
      <ChildWrapper>{children}</ChildWrapper>
    </EventCardRoot>
  );
};
