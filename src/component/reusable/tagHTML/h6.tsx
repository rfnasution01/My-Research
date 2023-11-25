import { StyleProps } from "..";

export function Heading6({ style, className, children }: StyleProps) {
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
        wordWrap: "break-word",
        ...style,
      }}
      className={className}
    >
      {children}
    </h6>
  );
}
