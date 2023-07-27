import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { IconButton } from "~components/IconButton";
import { mqUntil } from "~styles";

export interface ModalProps extends BaseProps {
  testId?: string;
  isOpen: boolean;
  close: () => void;
}

const StyledOverlay = styled(FloatingOverlay)`
  background-color: ${(props) => props.theme.color.modalBackground};
  display: flex;
  z-index: 10000;
  overflow: hidden;
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

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  z-index: 100000;
`;

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  testId,
  children,
  isOpen,
  close,
  ...props
}) => {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: close,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  const headingId = useId();
  const descriptionId = useId();

  return (
    <FloatingPortal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          >
            <StyledOverlay className="Dialog-overlay" lockScroll>
              <FloatingFocusManager context={context}>
                <ModalWrapper
                  ref={refs.setFloating}
                  data-testid={testId}
                  aria-labelledby={headingId}
                  aria-describedby={descriptionId}
                  {...getFloatingProps()}
                >
                  <StyledCloseButton
                    aria-label="close"
                    variant="primary-inverted"
                    icon="close"
                    onClick={close}
                  />
                  {children}
                </ModalWrapper>
              </FloatingFocusManager>
            </StyledOverlay>
          </motion.div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
};
