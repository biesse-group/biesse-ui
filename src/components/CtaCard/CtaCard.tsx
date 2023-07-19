import { type FC } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Button } from "~components/Button";
import { Icon } from "~components/Icon";
import { Text } from "~components/Text";
import { Title, type TitleProps } from "~components/Title";

import { borderRadius, mqUntil } from "../../styles";

const StyledIcon = styled(Icon)`
  opacity: 0;
  transition: opacity 0.2s ease-out;
  position: absolute;
  height: 100%;
  right: 20px;
  ${mqUntil(
    "sm",
    css`
      top: 20px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      align-self: start;
    `
  )}
`;

const CtaButton = styled(Button)``;

const Root = styled.div<Pick<CtaCardProps, "variant">>`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  height: 100%;
  width: 100%;

  ${(props) => borderRadius(props.theme.card.borderRadius)}
  background-color: ${({ theme }) => theme.color.lightGray};
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.card.boxShadow};

    ${(props) =>
      !!props.onClick &&
      css`
        ${StyledIcon} {
          opacity: 1;
        }
      `}

    ${CtaButton} {
      transform: translateX(0.5rem);
    }
  }
`;

const ImageWrapper = styled.div<{ $withTitle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 30%;

  ${(props) =>
    mqUntil(
      "md",
      css`
        flex: 0 0 ${props.$withTitle ? "40%" : "100%"};
      `
    )}
`;

const TextWrapper = styled.div<Pick<CtaCardProps, "variant"> & { $withButton?: boolean }>`
  overflow-y: hidden;
  padding: 20px 50px 20px 24px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  ${(props) =>
    props.$withButton &&
    css`
      padding-bottom: 10px;
    `}

  ${(props) =>
    props.variant === "full-image" &&
    css`
      justify-content: center;
    `}

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

const ButtonContainer = styled.div`
  padding-top: 15px;
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export interface CtaCardProps extends BaseProps {
  /**
   * Card title
   */
  title: React.ReactNode;
  /**
   * Title heading tag, default is `h3`
   */
  titleTag?: TitleProps["variant"];
  /**
   * Card description
   */
  description?: React.ReactNode;
  /**
   * Card click action
   */
  onClick?: () => void;
  /**
   * Card image (on body right)
   */
  image?: React.ReactNode;
  /**
   * Card variant (with `full-image`, text and description will not appear)
   */
  variant: "full-image" | "with-title";
  /**
   * Whether display a primary naked small button with the provided label and the `chevron-right` icon
   */
  buttonLabel?: string;
  testId?: string;
}

export const CtaCard: FC<CtaCardProps> = ({
  title,
  titleTag = "h3",
  description,
  image,
  variant,
  testId,
  buttonLabel,
  ...props
}) => {
  return (
    <Root data-testid={testId} variant={variant} {...props}>
      {image && <ImageWrapper $withTitle={variant === "with-title"}>{image}</ImageWrapper>}
      {(title ?? description) && (
        <TextWrapper variant={variant} $withButton={!!buttonLabel}>
          {title && variant === "with-title" && (
            <StyledTitle variant={titleTag} size="md" color="primary" uppercase>
              {title}
            </StyledTitle>
          )}
          {description && <StyledDescription color="dark">{description}</StyledDescription>}
          {buttonLabel && (
            <ButtonContainer>
              <CtaButton variant="primary-naked" rightIcon="chevron-right" size="small">
                {buttonLabel}
              </CtaButton>
            </ButtonContainer>
          )}
        </TextWrapper>
      )}
    </Root>
  );
};
