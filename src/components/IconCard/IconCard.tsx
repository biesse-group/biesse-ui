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
  icon: IconName | JSX.Element;
  /**
   * The card title
   */
  title: string | JSX.Element;
  /**
   * default is H2
   */
  titleTag?: TitleProps["variant"];
  /**
   * The card title
   */
  subtitle: string | JSX.Element;
  /**
   * default is H3
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
  titleTag,
  subtitle,
  subtitleTag,
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
        <StyledTitle variant={titleTag ?? "h2"} size="sm" color="primary" uppercase>
          {title}
        </StyledTitle>
        {subtitle && (
          <StyledTitle variant={subtitleTag ?? "h3"} size="xs" color="primary">
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
