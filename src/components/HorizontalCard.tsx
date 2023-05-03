import { FC } from "react";
import styled, { css } from "styled-components";

import { borderRadius, mqUntil } from "../styles";
import { Icon, IconName } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";

const CardContent = styled.div`
  display: flex;
  padding: 45px 25px;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
`;

const CardUpperContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const CardTitle = styled(Title)`
  margin-bottom: 29px;
`;

const CardIconWrapper = styled.div`
  margin-bottom: 36px;
  color: ${(props) => props.theme.color.primary};
`;

const CardActions = styled.div`
  margin-top: 30px;
`;

const CardImage = styled.div`
  flex: 0 0 300px;
  overflow: hidden;

  ${mqUntil(
    "sm",
    css`
      display: none;
    `
  )}
`;

const CardImageInner = styled.div`
  transform: scale(1);
  transition: transform 0.5s ease-out;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => borderRadius(theme.card.borderRadius)}
  background-color: ${({ theme }) => theme.color.lightGray};
  display: inline-flex;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};

    ${CardImageInner} {
      transform: scale(1.25);
    }
  }
`;

type HorizontalCardProps = {
  /** Card title */
  title: string;
  /** Card icon (above title) */
  icon?: IconName | JSX.Element;
  /**
   * Card description
   */
  description?: string | JSX.Element;
  /**
   * Card actions (buttons, etc.)
   */
  actions?: JSX.Element;
  /**
   * Card image (on body right)
   */
  image?: JSX.Element;
  testId?: string;
};

export const HorizontalCard: FC<HorizontalCardProps> = ({
  icon,
  title,
  description,
  actions,
  image,
  testId,
  ...props
}) => {
  return (
    <CardContainer data-testid={testId} {...props}>
      <CardContent>
        <CardUpperContent>
          {icon && (
            <CardIconWrapper>
              {typeof icon === "string" ? <Icon name={icon} color="primary" /> : icon}
            </CardIconWrapper>
          )}
          <CardTitle variant="H5" color="primary" uppercase>
            {title}
          </CardTitle>
          {typeof description === "string" ? <Text>{description}</Text> : description}
        </CardUpperContent>
        <CardActions>{actions}</CardActions>
      </CardContent>
      {image && (
        <CardImage>
          <CardImageInner>{image}</CardImageInner>
        </CardImage>
      )}
    </CardContainer>
  );
};
