import { StyleProps } from "..";

export function Main({ style, children }: StyleProps) {
  return (
    <main
      style={{
        padding: "24px",
        ...style,
      }}
    >
      {children}
    </main>
  );
}
