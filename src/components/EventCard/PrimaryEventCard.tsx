import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { borderRadius } from "../../styles";
import { mqUntil } from "../../styles/media-queries";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { Title } from "../Title";
import { EventCardProps } from "./eventCardProps";

const EventCardRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 85px auto;
  background-color: ${(props) => props.theme.color.lightGray};
  transition: all 0.2s ease-out;
  ${(props) => borderRadius(props.theme.card.borderRadius)}

  :hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};
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
  font-style: italic;
  margin-bottom: 27px;

  ${mqUntil(
    "sm",
    css`
      display: flex;
      flex-direction: column;
    `
  )}
`;

const DateLinkIcon = styled(Icon)`
  opacity: 0;
  transition: opacity 0.2s ease-out;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  ${mqUntil(
    "md",
    css`
      opacity: 1;
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

  ${mqUntil(
    "sm",
    css`
      grid-area: 1/ 1;
    `
  )}

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
  cursor: pointer;
`;

const ChildWrapper = styled.div`
  grid-area: 2 / 2;
  padding: 28px 15px 20px 20px;

  ${mqUntil(
    "sm",
    css`
      grid-area: 2/ 1 / span 1 / span 2;
    `
  )}
`;

const DateDay = styled(Title)`
  margin-bottom: 0px;
  line-height: 40px;

  ${mqUntil(
    "sm",
    css`
      font-size: 40px;
    `
  )}
`;

export const PrimaryEventCard: FC<PropsWithChildren<Omit<EventCardProps, "variant">>> = ({
  className,
  testId,
  title,
  startDate,
  endDate,
  description,
  descriptionMaxCharacters,
  children,
  renderLink,
  ...props
}) => {
  const formattedStartDate = startDate.format("DD MMMM YYYY");
  const formattedEndDate = endDate.format("DD MMMM YYYY");

  return (
    <EventCardRoot className={className} data-testid={testId} {...props}>
      <DateLinkWrapper>
        {renderLink && <LinkWrapper>{renderLink()}</LinkWrapper>}
        <DateDay variant="H2">{`${startDate.format("DD")}`}</DateDay>
        <Text size="md" weight="medium">
          {`${startDate.format("MMMYY")}`.toUpperCase()}
        </Text>
        <DateDay variant="H2">{`${endDate.format("MM")}`}</DateDay>
        <Text size="md" weight="medium">
          {`${endDate.format("MMMYY")}`.toUpperCase()}
        </Text>
        <DateLinkIcon name="arrow-right" color="white" size="23px" />
      </DateLinkWrapper>

      <EventCardMainWrapper>
        <CardTitle variant="H4" color="primary" uppercase>
          {title}
        </CardTitle>
        <DateSubtitle size="sm">
          <span>{formattedStartDate}</span>
          <DateSeparator>/</DateSeparator>
          <span>{formattedEndDate}</span>
        </DateSubtitle>
        <Text>
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
        </Text>
      </EventCardMainWrapper>
      <ChildWrapper>{children}</ChildWrapper>
    </EventCardRoot>
  );
};
