import { useCallback, useEffect, useState } from "react";

export interface UseModalProps {
  defaultIsOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function useModal(props?: UseModalProps) {
  const { onOpen, onClose, defaultIsOpen } = props ?? {};
  const [isOpen, setIsOpen] = useState(Boolean(defaultIsOpen));
  const [wasOpen, setWasOpen] = useState(Boolean(defaultIsOpen));

  const open = useCallback(() => {
    setIsOpen(true);
    setWasOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (onOpen && isOpen) {
      onOpen();
    } else if (onClose && !isOpen && wasOpen) {
      onClose();
    }
  }, [onOpen, onClose, isOpen, wasOpen]);

  return {
    isOpen,
    open,
    close,
  };
}
