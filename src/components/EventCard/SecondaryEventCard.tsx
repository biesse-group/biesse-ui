import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { borderRadius } from "../../styles";
import { Text } from "../Text";
import { Title } from "../Title";
import { EventCardProps } from "./eventCardProps";

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.lightGray};
  transition: all 0.2s ease-out;
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

const DateSubtitle = styled(Text)`
  font-style: italic;
  margin-bottom: 14px;
`;

const ActionWrapper = styled.div`
  padding: 14px 15px 20px 20px;
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
        <CardTitle variant="H4" color="primary" uppercase>
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
