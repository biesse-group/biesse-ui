import { FC, PropsWithChildren } from "react";
import { useTheme } from "styled-components";

export const BackgroundDecorator: FC<PropsWithChildren<{ background?: "primary" | "light" }>> = ({
  background,
  children,
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: background === "primary" ? theme.color.primary : theme.color.lightGray,
        padding: "30px",
        height: "100vh",
      }}
    >
      <div style={{ maxWidth: 300 }}>{children}</div>
    </div>
  );
};
