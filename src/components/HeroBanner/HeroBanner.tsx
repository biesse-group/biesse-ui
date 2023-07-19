import { type FC, type PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { Text } from "~components/Text";
import { Title } from "~components/Title";
import { borderRadius, mqUntil } from "~styles";

export interface HeroBannerProps extends BaseProps {
  /**
   * Banner background image
   */
  image: React.ReactNode;
  /**
   * Banner title
   */
  title: string;
  /**
   * Banner description
   */
  description: React.ReactNode;
  /**
   * Optional breadcrumb component on top of title
   */
  breadcrumb?: React.ReactNode;
  className?: string;
}

const Root = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};

  ${mqUntil(
    "md",
    css`
      height: 600px;
    `
  )}
`;

const Banner = styled.div<{ $hasBreadcrumb?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 600px;
  height: 500px;
  padding: ${(props) => (props.$hasBreadcrumb ? 35 : 65)}px 60px 45px 120px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font.regular.body.lg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  ${(props) => borderRadius(props.theme.card.borderRadius)}

  ${mqUntil(
    "md",
    css`
      width: 400px;
      height: auto;
      min-height: 400px;
      padding: 36px 17px 36px 25px;
      gap: 20px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      width: 265px;
      padding: 27px 13px 27px 24px;
    `
  )}
`;

const BannerTitle = styled(Title)`
  word-wrap: break-word;
  margin-bottom: 0;
  max-width: 100%;
`;

const ChildrenContainer = styled.div`
  margin-top: auto;
`;

export const HeroBanner: FC<PropsWithChildren<HeroBannerProps>> = ({
  image,
  title,
  description,
  children,
  breadcrumb,
  ...props
}) => {
  return (
    <Root {...props}>
      {image}
      <Banner $hasBreadcrumb={!!breadcrumb}>
        {breadcrumb}
        <BannerTitle variant="h1" size="lg" uppercase>
          {title}
        </BannerTitle>

        {typeof description === "string" ? (
          <Text tag="p" size="lg">
            {description}
          </Text>
        ) : (
          description
        )}
        {children && <ChildrenContainer>{children}</ChildrenContainer>}
      </Banner>
    </Root>
  );
};
