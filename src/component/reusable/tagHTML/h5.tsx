import { StyleProps } from "..";

export function Heading5({ style, className, children }: StyleProps) {
  return (
    <h5
      style={{
        fontFamily: "sans-serif",
        fontStyle: "normal",
        fontSize: "0.83rem",
        fontWeight: 400,
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
    </h5>
  );
}
