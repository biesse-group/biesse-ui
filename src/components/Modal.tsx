import { AnimatePresence, motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles";
import { IconButton } from "./IconButton";

export interface ModalProps {
  /**
   * Optional component class name
   */
  className?: string;
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

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.modalBackground};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ChildrenContainer = styled.div`
  z-index: 1;
`;

const StyledCloseButton = styled(IconButton)`
  position: absolute;
  top: 75px;
  right: 90px;
  z-index: 2;

  ${mqUntil(
    "sm",
    css`
      top: 20px;
      right: 20px;
    `
  )}
`;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  testId,
  isShown,
  onCloseAction,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isShown && (
        <Overlay
          data-testid={testId}
          onClick={onCloseAction}
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledCloseButton
            aria-label="close"
            variant="light"
            icon="close"
            onClick={onCloseAction}
          />
          <ChildrenContainer {...props} onClick={(e) => e.stopPropagation()}></ChildrenContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
