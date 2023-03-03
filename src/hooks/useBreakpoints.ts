import { useCallback, useEffect, useState } from "react";
import { DefaultTheme, useTheme } from "styled-components";

import { getKeys } from "../utils";

type Breakpoints = Record<keyof DefaultTheme["breakpoints"], boolean>;

export function useBreakpoints() {
  const theme = useTheme();

  const calculateBreakpoints = useCallback(() => {
    return getKeys(theme.breakpoints).reduce(
      (acc, bpKey) => ({
        ...acc,
        [bpKey]: window.innerWidth >= theme.breakpoints[bpKey],
      }),
      {} as Breakpoints
    );
  }, [theme.breakpoints]);

  const [breakpoints, setBreakpoints] = useState<Breakpoints>(calculateBreakpoints());

  useEffect(() => {
    const resizeHandler = () => {
      setBreakpoints(calculateBreakpoints());
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  return breakpoints;
}
