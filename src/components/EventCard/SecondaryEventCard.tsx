import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Text } from "../Text";
import { Title } from "../Title";
import { EventCardProps } from "./eventCardProps";

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${(props) => props.theme.color.lightGray};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};

  transition: all 0.2s linear;

  :hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: 0 0 20px 0 ${(props) => props.theme.eventCard.boxShadow};
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

const DateSubtitle = styled(Text)`
  font-style: italic;

  margin-bottom: 14px;
`;

const ActionWrapper = styled.div`
  padding: 0px 15px 20px 20px;
  position: relative;
`;

export const SecondaryEventCard: FC<PropsWithChildren<Omit<EventCardProps, "variant">>> = ({
  className,
  testId,
  title,
  startDate,
  endDate,
  description,
  descriptionMaxCharacters,
  renderLink,
  children,
  ...props
}) => {
  const dateText = `${startDate.format("DD MMMM YYYY")} / ${endDate.format("DD MMMM YYYY")}`;

  return (
    <EventCardRoot className={className} data-testid={testId} {...props}>
      <EventCardMainWrapper>
        <CardTitle variant="H4" color="primary">
          {title}
        </CardTitle>
        <DateSubtitle size="sm">{dateText}</DateSubtitle>
        {typeof description === "string" ? (
          <Text size="md">
            {descriptionMaxCharacters
              ? `${description.substring(0, descriptionMaxCharacters)}${
                  description.length > descriptionMaxCharacters && "..."
                }`
              : description}
          </Text>
        ) : (
          description
        )}
      </EventCardMainWrapper>
      <ActionWrapper>{children}</ActionWrapper>
    </EventCardRoot>
  );
};
