import { StyleProps } from "..";

export function Footer({ style, className, children }: StyleProps) {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "12px",
        textAlign: "center",
        ...style,
      }}
      className={className}
    >
      {children}
    </footer>
  );
}
