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
import React, { type PropsWithChildren, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import type { BaseProps } from "~components/baseProps";
import { IconButton } from "~components/IconButton";
import { mqUntil } from "~styles";

export interface ModalProps extends BaseProps {
  testId?: string;
  onOpen?: () => void;
  onClose?: () => void;
  renderTrigger: (
    props: { ref: (node: any | null) => void; onClick: () => void } & Record<string, unknown>
  ) => React.ReactNode;
}

export interface ModalHandle {
  open: () => void;
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
`;

export const Modal = React.forwardRef<ModalHandle, PropsWithChildren<ModalProps>>(
  ({ testId, children, renderTrigger, onOpen, onClose, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const { refs, context } = useFloating({
      open,
      onOpenChange: setOpen,
    });

    useEffect(() => {
      if (onOpen && open) {
        onOpen();
      } else if (onClose && !open) {
        onClose();
      }
    }, [open, onOpen, onClose]);

    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

    const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);

    const headingId = useId();
    const descriptionId = useId();

    React.useImperativeHandle(ref, () => ({
      open() {
        setOpen(true);
      },
      close() {
        setOpen(false);
      },
    }));

    return (
      <>
        {renderTrigger({
          ref: refs.setReference,
          onClick: () => setOpen(true),
          ...getReferenceProps(),
        })}
        <FloatingPortal>
          <AnimatePresence>
            {open && (
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
                        onClick={() => setOpen(false)}
                      />
                      {children}
                    </ModalWrapper>
                  </FloatingFocusManager>
                </StyledOverlay>
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  }
);
