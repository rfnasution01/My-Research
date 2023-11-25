import { StyleProps } from "..";

export function Main({ style, className, children }: StyleProps) {
  return (
    <main
      style={{
        padding: "24px",
        ...style,
      }}
      className={className}
    >
      {children}
    </main>
  );
}
