import { StyleProps } from "..";

export function Heading3({ style, children }: StyleProps) {
  return (
    <h3
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "1.17rem",
        fontWeight: 500,
        lineHeight: "130%",
        letterSpacing: "1px",
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </h3>
  );
}
