import { motion } from "framer-motion";
import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Text } from "../Text";
import useRefWithCallback from "./useRefWithCallback";

export interface PartnerCarouselProps {
  /**
   * Optional component class name
   */
  className?: string;
  title?: string;
  partners: JSX.Element[];
  testId?: string;
}

const ProductCarouselRoot = styled.div`
  --child-margin-left: 94px;

  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
  padding: 40px 0px;

  ${mqUntil(
    "sm",
    css`
      --child-margin-left: 20px;

      padding: 23px 0px 38px 0px;
    `
  )}

  background-color: ${(props) => props.theme.color.lightGray};
`;

const StyledText = styled(Text)`
  margin-left: var(--child-margin-left);
  margin-bottom: 20px;

  ${mqUntil(
    "sm",
    css`
      margin-bottom: 18px;
    `
  )}
`;

const LogoListWrapper = styled.div`
  --logo-width: 146px;
  --logo-margin-right: 94px;

  ${mqUntil(
    "sm",
    css`
      --logo-width: 90px;
      --logo-margin-right: 40px;
    `
  )}

  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 88px;
`;

const ScrollConstraints = styled.div<{ childrenNumber: number }>`
  --inner-scrollable-width: calc(
    ${(props) => props.childrenNumber} * (var(--logo-width) + var(--logo-margin-right)) +
      var(--child-margin-left)
  );
  width: max(var(--inner-scrollable-width), calc(2 * var(--inner-scrollable-width) - 100%));

  position: absolute;
  left: min(0px, calc(0px - (var(--inner-scrollable-width) - 100%)));
`;

const ScrollableContainer = styled(motion.div)`
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;
  :active {
    cursor: grabbing;
  }

  position: absolute;
  left: max(0px, calc(100% - var(--inner-scrollable-width)));
`;

const LogoWrapper = styled.div`
  min-width: var(--logo-width);
  max-width: var(--logo-width);
  height: 88px;

  display: inline-flex;
  align-items: center;

  margin-right: var(--logo-margin-right);
  :first-child {
    margin-left: var(--child-margin-left);
  }
  filter: grayscale(1);
  opacity: 0.7;

  transition: filter 0.5s ease-out, opacity 0.5s ease-out;

  :hover {
    filter: unset;
    opacity: 1;
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
      <StyledText size="xl" color="gray" weight="bold">
        {title}
      </StyledText>
      <LogoListWrapper>
        <ScrollConstraints ref={setXScrollConstraints} childrenNumber={partners.length}>
          <ScrollableContainer
            drag="x"
            dragConstraints={xScrollConstraints}
            dragElastic={0}
            dragMomentum={false}
          >
            {partners.map((partnerElement, index) => (
              <LogoWrapper key={index}>{partnerElement}</LogoWrapper>
            ))}
          </ScrollableContainer>
        </ScrollConstraints>
      </LogoListWrapper>
    </ProductCarouselRoot>
  );
};
