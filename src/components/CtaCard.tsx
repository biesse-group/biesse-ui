import { FC } from "react";
import styled, { css } from "styled-components";

import { borderRadius, mqUntil } from "../styles";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: 20px;
  ${mqUntil(
    "sm",
    css`
      top: 20px;
    `
  )}

  display: flex;
`;

const StyledIcon = styled(Icon)`
  opacity: 0;
  transition: opacity 0.2s ease-out;
  align-self: center;

  ${mqUntil(
    "sm",
    css`
      align-self: start;
    `
  )}
`;

const Root = styled.div<Pick<CtaCardProps, "variant">>`
  position: relative;
  ${(props) => borderRadius(props.theme.card.borderRadius)}
  display: flex;
  ${(props) =>
    props.variant === "full-image" &&
    css`
      justify-content: center;
    `}
  height: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.lightGray};
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};
    ${StyledIcon} {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 45%;
`;

const TextWrapper = styled.div<Pick<CtaCardProps, "variant">>`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.variant === "full-image" &&
    css`
      justify-content: center;
    `}
  padding: 20px 50px 20px 24px;

  ${mqUntil(
    "md",
    css`
      justify-content: center;
    `
  )}

  ${(props) =>
    props.variant === "full-image" &&
    mqUntil(
      "md",
      css`
        display: none;
      `
    )}
`;

const StyledTitle = styled(Title)`
  margin-bottom: 14px;

  ${mqUntil(
    "md",
    css`
      font-size: 30px;
      margin-bottom: 0px;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      font-size: 20px;
    `
  )}
`;

const StyledDescription = styled(Text)`
  line-height: 20px;
  ${mqUntil(
    "md",
    css`
      display: none;
    `
  )}
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

export type CtaCardProps = {
  /** Card title */
  title: string;
  /**
   * Card description
   */
  description?: string | JSX.Element;
  /**
   * Card actions (buttons, etc.)
   */
  renderLink?: () => JSX.Element;
  /**
   * Card image (on body right)
   */
  image?: JSX.Element;
  /**
   * Card variant.
   * If full-image is chosen, text and description will not appear
   */
  variant: "full-image" | "with-title";
  testId?: string;
};

export const CtaCard: FC<CtaCardProps> = ({
  title,
  description,
  image,
  variant,
  renderLink,
  testId,
  ...props
}) => {
  return (
    <Root data-testid={testId} variant={variant} {...props}>
      {renderLink && <LinkWrapper>{renderLink()}</LinkWrapper>}
      {image && <ImageWrapper>{image}</ImageWrapper>}
      {(title || description) && (
        <TextWrapper variant={variant}>
          {title && variant === "with-title" && (
            <StyledTitle variant="H4" color="primary" uppercase>
              {title}
            </StyledTitle>
          )}
          {description && <StyledDescription color="dark">{description}</StyledDescription>}
        </TextWrapper>
      )}
      <IconWrapper>
        <StyledIcon name="arrow-right" size="20px" color="primary" />
      </IconWrapper>
    </Root>
  );
};
