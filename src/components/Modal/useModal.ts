import { useCallback, useEffect, useRef, useState } from "react";

export interface UseModalProps {
  defaultIsOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function useModal({ onOpen, onClose, defaultIsOpen }: UseModalProps) {
  const [isOpen, setIsOpen] = useState(Boolean(defaultIsOpen));
  const wasOpen = useRef(isOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    wasOpen.current = true;
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (onOpen && isOpen) {
      onOpen();
    } else if (onClose && !isOpen && wasOpen.current) {
      onClose();
    }
  }, [onOpen, onClose, isOpen]);

  return {
    isOpen,
    open,
    close,
  };
}
