import { FC, PropsWithChildren } from "react";
import { useTheme } from "styled-components";

export const InputDecorator: FC<PropsWithChildren<{ shadow?: "dark" | "light" }>> = ({
  shadow,
  children,
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: shadow === "light" ? theme.color.lightGray : theme.color.primary,
        padding: "30px",
      }}
    >
      <div style={{ maxWidth: 300 }}>{children}</div>
    </div>
  );
};
