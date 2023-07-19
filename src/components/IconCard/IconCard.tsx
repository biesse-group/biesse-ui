import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Icon, type IconName } from "~components/Icon";
import { Text } from "~components/Text";
import type { TitleProps } from "~components/Title";
import { Title } from "~components/Title";
import { mqUntil } from "~styles";

export interface IconCardProps extends BaseProps {
  /**
   * An icon from icons set or an external JSX element
   */
  icon: IconName | React.ReactElement | null;
  /**
   * The card title
   */
  title: React.ReactNode;
  /**
   * Card title tag, default is `h3`
   */
  titleTag?: TitleProps["variant"];
  /**
   * The card title
   */
  subtitle: React.ReactNode;
  /**
   * Card subtitle tag, default is `h4`
   */
  subtitleTag?: TitleProps["variant"];
  /**
   * Whether the component change its layout to horizontal
   * in mobile or stays the same
   */
  wrapOnMobile?: boolean;
  /**
   * The card description (JSX element is accepted)
   */
  description: React.ReactNode;
  /**
   * Actions like buttons, etc *(optional)*
   */
  action?: React.ReactNode;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div<{ $wrapOnMobile?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $wrapOnMobile }) =>
    $wrapOnMobile &&
    mqUntil(
      "md",
      css`
        flex-direction: row;
        align-items: center;
        margin-bottom: 15px;
      `
    )}
`;

const Body = styled.div<{ $wrapOnMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${({ $wrapOnMobile }) =>
    $wrapOnMobile &&
    mqUntil(
      "md",
      css`
        padding-left: 40px;
      `
    )}
`;

const IconContainer = styled.div<{ $wrapOnMobile?: boolean }>`
  margin-bottom: 14px;
  color: ${(props) => props.theme.color.primary};

  ${({ $wrapOnMobile }) =>
    $wrapOnMobile &&
    mqUntil(
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
  titleTag = "h3",
  subtitle,
  subtitleTag = "h4",
  description,
  action,
  wrapOnMobile,
  ...props
}) => {
  return (
    <Root {...props}>
      <Heading $wrapOnMobile={wrapOnMobile}>
        <IconContainer $wrapOnMobile={wrapOnMobile}>
          {typeof icon === "string" ? <Icon name={icon} size="40px" /> : icon}
        </IconContainer>
        <StyledTitle variant={titleTag} size="sm" color="primary" uppercase>
          {title}
        </StyledTitle>
        {subtitle && (
          <StyledTitle variant={subtitleTag} size="xs" color="primary">
            {subtitle}
          </StyledTitle>
        )}
      </Heading>
      <Body $wrapOnMobile={wrapOnMobile}>
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
