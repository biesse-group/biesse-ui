import { type FC, type PropsWithChildren } from "react";
import styled from "styled-components";

import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { useUniqueDates } from "~hooks/useUniqueDates";
import { borderRadius } from "~styles";

import { type EventCardProps } from "./eventCardProps";

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.lightGray};
  transition: all 0.2s ease-out;
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  ${(props) => borderRadius(props.theme.card.borderRadius)}

  :hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};
  }
`;

const EventCardMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0px 22px;
`;

const CardTitle = styled(Title)`
  margin-bottom: 11px;
  font-size: 30px;
`;

const ActionWrapper = styled.div`
  padding: 14px 15px 20px 20px;
  position: relative;
`;

export const SecondaryEventCard: FC<PropsWithChildren<Omit<EventCardProps, "variant">>> = ({
  testId,
  title,
  titleTag = "h3",
  startDate,
  endDate,
  location,
  description,
  children,
  ...props
}) => {
  const dateText = useUniqueDates(startDate, endDate).join(" / ");

  return (
    <EventCardRoot data-testid={testId} {...props}>
      <EventCardMainWrapper>
        <CardTitle variant={titleTag} size="md" color="primary" uppercase>
          {title}
        </CardTitle>
        <div style={{ marginBottom: 10 }}>
          <Text size="sm" italic tag="p">
            {dateText}
          </Text>
          {location && (
            <Text size="sm" italic tag="p">
              {location}
            </Text>
          )}
        </div>
      </EventCardMainWrapper>
      <ActionWrapper>{children}</ActionWrapper>
    </EventCardRoot>
  );
};
