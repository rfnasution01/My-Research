import { StyleProps } from "..";

export function Heading6({ style, children }: StyleProps) {
  return (
    <h6
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "0.67rem",
        fontWeight: 300,
        lineHeight: "130%",
        letterSpacing: "1px",
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </h6>
  );
}
