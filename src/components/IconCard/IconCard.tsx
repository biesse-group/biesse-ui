import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Icon, type IconName } from "~components/Icon";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { mqUntil } from "~styles";

export interface IconCardProps extends BaseProps {
  /**
   * An icon from icons set or an external JSX element
   */
  icon: IconName | JSX.Element;
  /**
   * The card title
   */
  title: string | JSX.Element;
  /**
   * The card title
   */
  subTitle: string | JSX.Element;
  /**
   * The card description (JSX element is accepted)
   */
  description: string | JSX.Element;
  /**
   * Actions like buttons, etc *(optional)*
   */
  action?: JSX.Element;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${mqUntil(
    "md",
    css`
      flex-direction: row;
      align-items: center;
      margin-bottom: 15px;
    `
  )}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${mqUntil(
    "md",
    css`
      padding-left: 40px;
    `
  )}
`;

const IconContainer = styled.div`
  margin-bottom: 14px;
  color: ${(props) => props.theme.color.primary};

  ${mqUntil(
    "md",
    css`
      margin-right: 10px;
      margin-bottom: 0;
    `
  )}
`;

const StyledTitle = styled(Title)`
  margin: 0px 0px 12px 0px;
`;

const StyledText = styled(Text)`
  margin-bottom: 20px;
`;

export const IconCard: FC<IconCardProps> = ({
  icon,
  title,
  subTitle,
  description,
  action,
  ...props
}) => {
  return (
    <Root {...props}>
      <Heading>
        <IconContainer>
          {typeof icon === "string" ? <Icon name={icon} size="40px" /> : icon}
        </IconContainer>
        <StyledTitle variant="H5" color="primary" uppercase>
          {title}
        </StyledTitle>
        <StyledTitle variant="H6" color="primary">
          {subTitle}
        </StyledTitle>
      </Heading>
      <Body>
        {typeof description === "string" ? (
          <StyledText tag="p">{description}</StyledText>
        ) : (
          description
        )}
        <div>{action}</div>
      </Body>
    </Root>
  );
};
