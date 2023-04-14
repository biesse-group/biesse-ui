import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Button } from "./Button";

export interface ModalVideoPlayerProps {
  /**
   * Optional component class name
   */
  className?: string;
  url: string;
  /**
   * Video format, if none is passed mp4 is assumed
   */
  mimeType?: string;
  /**
   * Whether the video should be repeated in loop
   */
  loop?: boolean;
  /**
   * Whether the modal should be hidden or shown
   */
  isShown?: boolean;
  /**
   * Action issued when clicking outside the video or on the dedicated button
   * Should be wired to the isShown state
   */
  onCloseAction: () => void;
  testId?: string;
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
`;

const VideoPlayerRoot = styled.div`
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 10%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
`;

const StyledVideo = styled.video`
  width: 100%;
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  bottom: calc(90% + 10px);
  left: calc(90% + 10px);
  color: white;
`;

export const ModalVideoPlayer: FC<PropsWithChildren<ModalVideoPlayerProps>> = ({
  testId,
  url,
  mimeType,
  isShown,
  loop = true,
  onCloseAction,
  ...props
}) => {
  if (!isShown) {
    return null;
  }

  return (
    <Overlay onClick={onCloseAction}>
      <StyledCloseButton variant="primary-naked" leftIcon="close" onClick={onCloseAction} />
      <VideoPlayerRoot data-testid={testId} {...props} onClick={(e) => e.stopPropagation()}>
        <StyledVideo controls playsInline loop={loop}>
          <source src={url} type={mimeType || "video/mp4"} />
          Your browser does not support HTML video.
        </StyledVideo>
      </VideoPlayerRoot>
    </Overlay>
  );
};
