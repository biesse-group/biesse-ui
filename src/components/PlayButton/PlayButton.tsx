import { AnimatePresence, motion } from "framer-motion";
import { type FC } from "react";
import styled from "styled-components";

import { Icon } from "~components/Icon";

export interface PlayButtonProps {
  isPlaying?: boolean;
  onClick?: () => void;
  testId?: string;
  variant?: "primary" | "inverted";
  shadow?: boolean;
  style?: React.CSSProperties;
}

const PlayButtonRoot = styled(motion.div)<Pick<PlayButtonProps, "shadow" | "variant">>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${(props) => props.theme.color.white};
  border-radius: 50px;
  background-color: ${(props) =>
    props.variant === "inverted" ? props.theme.color.white : props.theme.color.primary};
  box-shadow: ${(props) => (props.shadow ? props.theme.videoPlayer.buttonBoxShadow : "unset")};
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
  width: 80px;
  height: 80px;
`;

const InternalBorder = styled.div<Pick<PlayButtonProps, "variant">>`
  height: 100%;
  width: 100%;
  border: 3px solid
    ${(props) =>
      props.variant === "inverted" ? props.theme.color.primary : props.theme.color.white};
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
          <InternalBorder variant={props.variant} />
          <StyledIcon
            name="play"
            color={props.variant === "inverted" ? "primary" : "white"}
            size="30px"
          />
        </PlayButtonRoot>
      )}
    </AnimatePresence>
  );
};
