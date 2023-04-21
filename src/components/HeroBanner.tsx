import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { borderRadius, mqUntil } from "../styles";
import { Text } from "./Text";
import { Title } from "./Title";

export type HeroBannerProps = {
  /**
   * Banner background image
   */
  image: JSX.Element;
  /**
   * Banner title
   */
  title: string;
  /**
   * Banner description
   */
  description: string | JSX.Element;
};

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

const Banner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 600px;
  height: 500px;
  padding: 65px 58px 65px 120px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font.regular.body.lg};
  ${(props) => borderRadius(props.theme.card.borderRadius)}

  ${mqUntil(
    "md",
    css`
      width: 400px;
      height: auto;
      min-height: 400px;
      padding: 36px 17px 36px 25px;
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
  margin-bottom: 40px;

  ${mqUntil(
    "sm",
    css`
      margin-bottom: 21px;
    `
  )}
`;

export const HeroBanner: FC<PropsWithChildren<HeroBannerProps>> = ({
  image,
  title,
  description,
  children,
}) => {
  return (
    <Root>
      {image}
      <Banner>
        <BannerTitle variant="H1" size="lg">
          {title}
        </BannerTitle>
        {typeof description === "string" ? (
          <Text tag="p" size="lg">
            {description}
          </Text>
        ) : (
          description
        )}
        {children}
      </Banner>
    </Root>
  );
};
