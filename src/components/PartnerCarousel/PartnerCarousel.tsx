import { motion } from "framer-motion";
import { type FC } from "react";
import styled, { css } from "styled-components";

import { Text } from "~components/Text";
import { useRefWithCallback } from "~hooks";
import { mqUntil } from "~styles/media-queries";

export interface PartnerCarouselProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Partners carousel title
   */
  title?: string;
  /**
   * List of partner items
   */
  partners: JSX.Element[];
  testId?: string;
}

const CHILD_MARGIN_LEFT = 94;
const CHILD_MARGIN_LEFT_SM = 20;

const LOGO_WIDTH = 146;
const LOGO_WIDTH_SM = 90;

const LOGO_MARGIN_RX = 94;
const LOGO_MARGIN_RX_SM = 40;

const getInnerScrollableWidth = (childrenNumber: number) =>
  childrenNumber * (LOGO_WIDTH + LOGO_MARGIN_RX) + CHILD_MARGIN_LEFT;

const getInnerScrollableWidthSm = (childrenNumber: number) =>
  childrenNumber * (LOGO_WIDTH_SM + LOGO_MARGIN_RX_SM) + CHILD_MARGIN_LEFT_SM;

const ProductCarouselRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.lightGray};
  padding: 40px 0px;

  ${mqUntil(
    "sm",
    css`
      padding: 23px 0px 38px 0px;
    `
  )}
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 ${CHILD_MARGIN_LEFT}px;
  margin-bottom: 20px;

  ${mqUntil(
    "sm",
    css`
      padding: 0 ${CHILD_MARGIN_LEFT_SM}px;
      margin-bottom: 18px;
    `
  )}
`;

const StyledText = styled(Text)`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xxl}px;
`;

const LogoListWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 88px;
`;

const ScrollConstraints = styled.div<{ itemsCount: number }>`
  width: max(
    ${(props) => getInnerScrollableWidth(props.itemsCount)}px,
    calc(2 * ${(props) => getInnerScrollableWidth(props.itemsCount)}px - 100%)
  );

  ${(props) =>
    mqUntil(
      "sm",
      css`
        width: max(
          ${getInnerScrollableWidthSm(props.itemsCount)}px,
          calc(2 * ${getInnerScrollableWidthSm(props.itemsCount)}px - 100%)
        );
      `
    )}

  position: absolute;
  left: min(0px, calc(0px - (${(props) => getInnerScrollableWidth(props.itemsCount)}px - 100%)));

  ${(props) =>
    mqUntil(
      "sm",
      css`
        left: min(0px, calc(0px - (${getInnerScrollableWidthSm(props.itemsCount)}px - 100%)));
      `
    )}
`;

const ScrollableContainer = styled(motion.div)<{ $itemsCount: number }>`
  position: absolute;
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;

  :active {
    cursor: grabbing;
  }

  left: max(0px, calc(100% - ${(props) => getInnerScrollableWidth(props.$itemsCount)}px));

  ${(props) =>
    mqUntil(
      "sm",
      css`
        left: max(0px, calc(100% - ${getInnerScrollableWidthSm(props.$itemsCount)}px));
      `
    )}
`;

const LogoWrapper = styled.div`
  min-width: ${LOGO_WIDTH}px;
  max-width: ${LOGO_WIDTH}px;

  ${mqUntil(
    "sm",
    css`
      min-width: ${LOGO_WIDTH_SM}px;
      max-width: ${LOGO_WIDTH_SM}px;
    `
  )}

  height: 88px;
  display: inline-flex;
  align-items: center;
  margin-right: ${LOGO_MARGIN_RX}px;

  :first-child {
    margin-left: ${CHILD_MARGIN_LEFT}px;
  }

  ${mqUntil(
    "sm",
    css`
      margin-right: ${LOGO_MARGIN_RX_SM}px;
      :first-child {
        margin-left: ${CHILD_MARGIN_LEFT_SM}px;
      }
    `
  )}

  filter: grayscale(1);
  opacity: 0.7;
  transition: filter 0.5s ease-out, opacity 0.5s ease-out;

  :hover {
    filter: unset;
    opacity: 1;

    > * {
      transition: filter 0.5s ease-out;
      filter: drop-shadow(0 0 20px rgba(123, 123, 123, 0.5));
    }
  }
`;

export const PartnerCarousel: FC<PartnerCarouselProps> = ({
  className,
  testId,
  partners,
  title,
  ...props
}) => {
  const [xScrollConstraints, setXScrollConstraints] = useRefWithCallback<HTMLDivElement>();

  return (
    <ProductCarouselRoot data-testid={testId} {...props}>
      <TitleWrapper>
        <StyledText size="xl" color="gray" weight="bold">
          {title}
        </StyledText>
      </TitleWrapper>
      <LogoListWrapper>
        <ScrollConstraints ref={setXScrollConstraints} itemsCount={partners.length}>
          <ScrollableContainer
            drag="x"
            dragConstraints={xScrollConstraints}
            dragElastic={0}
            dragMomentum={false}
            $itemsCount={partners.length}
          >
            {partners.map((partnerElement, index) => (
              <LogoWrapper key={index} className="LogoWrapper">
                {partnerElement}
              </LogoWrapper>
            ))}
          </ScrollableContainer>
        </ScrollConstraints>
      </LogoListWrapper>
    </ProductCarouselRoot>
  );
};
