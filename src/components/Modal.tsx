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
import { FC, PropsWithChildren, useState } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../styles";
import { IconButton } from "./IconButton";

export type ModalProps = {
  className?: string;
  testId?: string;
  renderTrigger: (
    props: { ref: (node: any | null) => void; onClick: () => void } & Record<string, unknown>
  ) => JSX.Element;
};

const StyledOverlay = styled(FloatingOverlay)`
  background-color: ${(props) => props.theme.color.modalBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
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
  className,
  testId,
  children,
  renderTrigger,
}) => {
  const [open, setOpen] = useState(false);

  const { refs, context } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);

  const headingId = useId();
  const descriptionId = useId();

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
            >
              <StyledOverlay className="Dialog-overlay" lockScroll>
                <FloatingFocusManager context={context}>
                  <div
                    ref={refs.setFloating}
                    className={className}
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
                  </div>
                </FloatingFocusManager>
              </StyledOverlay>
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};
