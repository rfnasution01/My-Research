import { StyleProps } from "..";

export function Header({ style, className, children }: StyleProps) {
  return (
    <header
      style={{
        backgroundColor: "#121212",
        boxShadow: "0 2px 5px #133C55",
        padding: "16px",
        color: "#fff",
        ...style,
      }}
      className={className}
    >
      {children}
    </header>
  );
}
