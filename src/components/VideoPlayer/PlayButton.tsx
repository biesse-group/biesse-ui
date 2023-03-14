import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

import { Icon } from "../Icon";

export interface PlayButtonProps {
  isPlaying?: boolean;
  onClick?: () => void;
  testId?: string;
}

const PlayButtonRoot = styled(motion.div)`
  position: relative;
  display: flex;
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.color.white};
  border-radius: 50px;
  background-color: ${(props) => props.theme.color.primary};
  box-shadow: ${(props) => props.theme.videoPlayer.buttonBoxShadow};
  cursor: pointer;
  overflow: hidden;
`;

const InternalBorder = styled.div`
  height: 100%;
  width: 100%;
  border: 3px solid ${(props) => props.theme.color.white};
  opacity: 0.4;
  border-radius: 50px;
  z-index: 1;

  position: absolute;
`;

const StyledIcon = styled(Icon)`
  margin-left: 7px;
`;

export const PlayButton: FC<PlayButtonProps> = ({ testId, isPlaying, ...props }) => {
  return (
    <AnimatePresence>
      {!isPlaying && (
        <PlayButtonRoot
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid={testId}
          {...props}
        >
          <InternalBorder />
          <StyledIcon name="play" color="light" size="30px" />
        </PlayButtonRoot>
      )}
    </AnimatePresence>
  );
};
