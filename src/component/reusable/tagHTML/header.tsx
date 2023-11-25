import { StyleProps } from "..";

export function Header({ style, children }: StyleProps) {
  return (
    <header
      style={{
        backgroundColor: "#121212",
        boxShadow: "0 2px 5px #3498db",
        padding: "16px",
        color: "#fff",
        ...style,
      }}
    >
      {children}
    </header>
  );
}
