import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { borderRadius } from "../styles";
import { StripThreeCols, StripThreeColsProps } from "./StripThreeCols";

const CardImageInner = styled.div`
  display: flex;
  justify-content: center;
  transform: scale(1);
  transition: transform 0.5s ease-out;
  width: 100%;
  height: 100%;
`;

const CardImageWrapper = styled.div`
  ${(props) => borderRadius(props.theme.card.borderRadius)}
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    ${CardImageInner} {
      transform: scale(1.25);
    }
  }
`;

export interface ImageGalleryProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Custom images render function
   */
  images: StripThreeColsProps["items"];
}

export const ImageGallery: FC<PropsWithChildren<ImageGalleryProps>> = ({ className, images }) => {
  return (
    <StripThreeCols
      tabletBehavior="maintain-proportion"
      mobileBehavior="scroll"
      variant="1-1-1"
      items={
        images.map((image, index) => {
          if (!image) {
            return undefined;
          }
          return (
            <CardImageWrapper key={index}>
              <CardImageInner>{image}</CardImageInner>
            </CardImageWrapper>
          );
        }) as [JSX.Element, (JSX.Element | undefined)?, (JSX.Element | undefined)?]
      }
    />
  );
};
