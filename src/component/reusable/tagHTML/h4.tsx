import { StyleProps } from "..";

export function Heading4({ style, children }: StyleProps) {
  return (
    <h4
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: "130%",
        letterSpacing: "1px",
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </h4>
  );
}
