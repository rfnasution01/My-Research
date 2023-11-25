import { StyleProps } from "..";

export function Heading1({ style, children }: StyleProps) {
  return (
    <h1
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "130%",
        letterSpacing: "1px",
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </h1>
  );
}
