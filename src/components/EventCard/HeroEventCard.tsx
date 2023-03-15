import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { EventCardProps } from "./eventCardProps";

const HeroEventCardRoot = styled.div`
  position: relative;
  width: auto;
  max-width: 400px;
  height: auto;
  overflow: hidden;

  display: inline-grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "date-subgrid title"
    "description description";

  background-color: ${(props) => props.theme.color.white};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};

  transition: all 0.2s linear;

  :hover {
    box-shadow: 0 0 20px 0 ${(props) => props.theme.eventCard.boxShadow};
  }

  ${mqUntil(
    "md",
    css`
      max-width: 350px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      display: none;
    `
  )}
`;

const DateSubgrid = styled.div`
  grid-area: date-subgrid;
  display: inline-grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  column-gap: 4px;
  grid-template-areas:
    "start-DD start-MMYY"
    "end-DD end-MMYY";

  padding: 12px 8px 12px 15px;
  height: 80px;

  background-color: ${(props) => props.theme.color.lightGray};
  text-transform: uppercase;
`;

const DayStyledText = styled(Text)`
  font-size: 32px;
  line-height: 28px;
`;

const MonthYearStyledText = styled(Text)`
  font-size: 17px;
  line-height: 18px;
`;

const StartDateDay = styled(DayStyledText)`
  grid-area: start-DD;
`;

const StartDateMonthYear = styled(MonthYearStyledText)`
  grid-area: start-MMYY;
  align-self: end;
  margin-bottom: 5px;
`;

const EndDateDay = styled(DayStyledText)`
  grid-area: end-DD;
`;
const EndDateMonth = styled(MonthYearStyledText)`
  grid-area: end-MMYY;
`;

const DescriptionItem = styled.div`
  grid-area: description;
  padding: 12px 36px 12px 15%;

  background-color: ${(props) => props.theme.color.primary};
`;

const TitleWrapper = styled.div`
  grid-area: title;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 80px;
`;

const StyledTitle = styled(Text)`
  line-height: 26px;
  text-transform: uppercase;

  padding: 12px 10px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 60px;

  ${mqUntil(
    "md",
    css`
      margin-right: 25px;
    `
  )}
`;

export const HeroEventCard: FC<EventCardProps> = ({
  className,
  testId,
  title,
  startDate,
  endDate,
  description,
  link,
  language,
  ...props
}) => {
  return (
    <HeroEventCardRoot className={className} data-testid={testId} {...props}>
      <DateSubgrid>
        <StartDateDay color="primary" weight="bold">{`${startDate.format("DD")}`}</StartDateDay>
        <StartDateMonthYear color="dark">
          {`${startDate.format("MMM")}`}
          <b>{`${startDate.format("YY")}`}</b>
        </StartDateMonthYear>
        <EndDateDay color="primary" weight="bold">{`${endDate.format("DD")}`}</EndDateDay>
        <EndDateMonth color="dark">
          {`${endDate.format("MMM")}`}
          <b>{`${endDate.format("YY")}`}</b>
        </EndDateMonth>
      </DateSubgrid>
      {title && (
        <TitleWrapper>
          <StyledTitle color="primary" size="xl" weight="bold">
            {title}
          </StyledTitle>
          <StyledIcon name="chevron-right" color="primary" size="22px" />
        </TitleWrapper>
      )}
      {description && (
        <DescriptionItem>
          {typeof description === "string" ? (
            <Text size="sm" color="light" weight="book">
              {`${description.substring(0, 80)}${description.length > 80 && "..."}`}
            </Text>
          ) : (
            description
          )}
        </DescriptionItem>
      )}
    </HeroEventCardRoot>
  );
};
