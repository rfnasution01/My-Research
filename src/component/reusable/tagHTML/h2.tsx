import { StyleProps } from "..";

export function Heading2({ style, className, children }: StyleProps) {
  return (
    <h2
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "130%",
        letterSpacing: "1px",
        margin: 0,
        padding: 0,
        wordWrap: "break-word",
        ...style,
      }}
      className={className}
    >
      {children}
    </h2>
  );
}
