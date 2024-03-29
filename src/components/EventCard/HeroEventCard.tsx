import { type FC } from "react";
import styled, { css } from "styled-components";

import { Icon } from "~components/Icon";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { useUniqueDates } from "~hooks/useUniqueDates";
import { borderRadius } from "~styles";
import { mqUntil } from "~styles/media-queries";

import { type EventCardProps } from "./eventCardProps";

const HeroEventCardRoot = styled.div`
  position: relative;
  width: auto;
  max-width: 400px;
  height: auto;
  display: inline-grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "date-subgrid title"
    "description description";
  background-color: ${(props) => props.theme.color.white};
  box-shadow: ${(props) => props.theme.eventCard.heroBoxShadow};
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  ${(props) => borderRadius(props.theme.card.borderRadius)}

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
  grid-template-rows: auto auto;
  grid-template-columns: 56px auto;
  column-gap: 4px;
  grid-template-areas:
    "start-DD start-MMYY"
    "end-DD end-MMYY";
  padding: 12px 8px 12px 0;
  min-height: 80px;
  background-color: ${(props) => props.theme.color.lightGray};
  text-transform: uppercase;
`;

const DayStyledText = styled(Text)`
  font-size: 32px;
  line-height: 28px;
  justify-self: end;
`;

const MonthYearStyledText = styled(Text)`
  font-size: 17px;
  line-height: 18px;
  letter-spacing: 1px;
`;

const StartDateDay = styled(DayStyledText)`
  grid-area: start-DD;
  align-self: end;
  justify-self: end;
`;

const StartDateMonthYear = styled(MonthYearStyledText)`
  grid-area: start-MMYY;
  align-self: end;
  margin-bottom: 5px;
`;

const EndDateDay = styled(DayStyledText)`
  grid-area: end-DD;
  justify-self: end;
`;
const EndDateMonthYear = styled(MonthYearStyledText)`
  grid-area: end-MMYY;
`;

const DescriptionItem = styled.div`
  grid-area: description;
  padding: 12px 36px 12px 60px;
  background-color: ${(props) => props.theme.color.primary};
`;

const TitleWrapper = styled.div`
  grid-area: title;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding-right: 36px;
`;

const StyledTitle = styled(Title)`
  line-height: 26px;
  text-transform: uppercase;
  font-size: 20px;
  padding: 12px 10px 12px 15px;
  margin: 0;
`;

const StyledIcon = styled(Icon)`
  flex: 0 0 30px;
`;

export const HeroEventCard: FC<Omit<EventCardProps, "variant">> = ({
  testId,
  title,
  titleTag = "h3",
  startDate,
  endDate,
  description,
  location,
  ...props
}) => {
  const uniqueDates = useUniqueDates(startDate, endDate);

  return (
    <HeroEventCardRoot data-testid={testId} {...props}>
      <DateSubgrid>
        <StartDateDay color="primary" weight="bold">{`${startDate.format("DD")}`}</StartDateDay>
        <StartDateMonthYear color="dark">
          {`${startDate.format("MMM")}`}
          <Text weight="bold">{`${startDate.format("YY")}`}</Text>
        </StartDateMonthYear>
        {endDate && uniqueDates.length > 1 && (
          <>
            <EndDateDay color="primary" weight="bold">{`${endDate.format("DD")}`}</EndDateDay>
            <EndDateMonthYear color="dark">
              {`${endDate.format("MMM")}`}
              <Text weight="bold">{`${endDate.format("YY")}`}</Text>
            </EndDateMonthYear>
          </>
        )}
      </DateSubgrid>
      <TitleWrapper>
        <StyledTitle variant={titleTag} color="primary">
          {title}
        </StyledTitle>
        <StyledIcon name="chevron-right" color="primary" size="30px" />
      </TitleWrapper>
      {description && (
        <DescriptionItem>
          {typeof description === "string" ? (
            <Text size="sm" color="light" weight="book">
              {description}
            </Text>
          ) : (
            description
          )}
        </DescriptionItem>
      )}
    </HeroEventCardRoot>
  );
};
