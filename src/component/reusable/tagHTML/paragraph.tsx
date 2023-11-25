import { StyleProps } from "..";

export function Paragraph({ style, children }: StyleProps) {
  return (
    <p
      style={{
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "130%",
        letterSpacing: "1px",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
