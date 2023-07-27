import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Icon, type IconName } from "~components/Icon";
import { Text } from "~components/Text";
import { Title, type TitleProps } from "~components/Title";
import { borderRadius, mqUntil } from "~styles";

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
  margin-bottom: 30px;

  ${mqUntil(
    "md",
    css`
      margin-bottom: 20px;
    `
  )}
`;

const CardIconWrapper = styled.div`
  margin-bottom: 36px;
  color: ${(props) => props.theme.color.primary};

  ${mqUntil(
    "md",
    css`
      margin-bottom: 24px;
    `
  )}
`;

const CardActions = styled.div`
  margin-top: auto;
  padding-top: 30px;
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

export interface HorizontalCardProps extends BaseProps {
  /** Card title */
  title: React.ReactNode;
  /**
   * Card title tag, default is `h3`
   */
  titleTag?: TitleProps["variant"];
  /** Card icon (above title) */
  icon?: IconName | React.ReactElement | null;
  /**
   * Card description
   */
  description?: React.ReactNode;
  /**
   * Card actions (buttons, etc.)
   */
  actions?: React.ReactNode;
  /**
   * Card image (on body right)
   */
  image?: React.ReactNode;
  testId?: string;
}

export const HorizontalCard: FC<HorizontalCardProps> = ({
  icon,
  title,
  titleTag = "h3",
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
          <CardTitle variant={titleTag} size="sm" color="primary" uppercase>
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
