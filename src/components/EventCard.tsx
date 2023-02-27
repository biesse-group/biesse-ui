import { FC, PropsWithChildren } from "react";
import styled, { useTheme } from "styled-components";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";

export interface EventCardProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Title locate on top of the card
   */
  title?: string;
  /**
   * Starting date of the event
   */
  startDate: Date;
  /**
   * Ending date of the event
   */
  endDate: Date;
  /**
   * Description located under the title
   */
  description?: string | JSX.Element;
  /**
   * Link component overlay on the left.
   * Should be transparent.
   */
  link?: JSX.Element;
  testId?: string;
}

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  background-color: ${(props) => props.theme.color.lightGray};
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  border-top-right-radius: ${(props) => props.theme.card.borderRadius};
`;

const EventCardMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 22px;
`;

const CardTitle = styled(Title)`
  margin-bottom: 11px;
`;

const DateSubtitle = styled(Text)`
  font-style: italic;

  margin-bottom: 27px;
`;

const DescriptionWrapper = styled(Text)`
  margin-bottom: 24px;
`;

const DateLinkIcon = styled(Icon)`
  margin-top: 50px;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

const DateLinkWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.primary};
  width: 85px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0px 20px;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  text-align: center;

  > h2 {
    margin-bottom: 0px;
    line-height: 40px;
  }

  &:hover {
    ${DateLinkIcon} {
      opacity: 1;
    }
  }
`;

const LinkWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 1;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
  cursor: pointer;
`;

export const EventCard: FC<PropsWithChildren<EventCardProps>> = ({
  className,
  testId,
  title,
  startDate,
  endDate,
  description,
  children,
  link,
}) => {
  const theme = useTheme();

  const dateText = `${startDate.getDate()} ${startDate.toLocaleString("it-IT", {
    month: "long",
  })} ${startDate.getFullYear()} / ${endDate.getDate()} ${endDate.toLocaleString("it-IT", {
    month: "long",
  })} ${endDate.getFullYear()}`;

  return (
    <EventCardRoot className={className} data-testid={testId}>
      <DateLinkWrapper>
        <LinkWrapper>{link}</LinkWrapper>
        <Title variant="H2" color="light">{`${startDate.getDate()}`}</Title>
        <Title variant="H2" color="light">{`${startDate.getMonth()}`}</Title>
        <Text size="md" color="light">{`${startDate.getFullYear()}`}</Text>
        <DateLinkIcon name="arrow-right" color={theme.color.white} size="23px" />
      </DateLinkWrapper>

      <EventCardMainWrapper>
        <CardTitle variant="H4" color="primary">
          {title}
        </CardTitle>
        <DateSubtitle size="sm">{dateText}</DateSubtitle>
        <DescriptionWrapper>
          {typeof description === "string" ? <Text size="md">{description}</Text> : description}
        </DescriptionWrapper>
        {children}
      </EventCardMainWrapper>
    </EventCardRoot>
  );
};
