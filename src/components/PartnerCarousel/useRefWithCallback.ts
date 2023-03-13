import { RefObject, useCallback, useRef } from "react";

const useRefWithCallback = <Type>(): [RefObject<Type>, (node: Type) => void] => {
  const ref = useRef<Type | null>(null);
  const setRef = useCallback((node: Type) => {
    ref.current = node;
  }, []);

  return [ref, setRef];
};

export default useRefWithCallback;
