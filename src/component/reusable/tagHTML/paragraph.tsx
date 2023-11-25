import { StyleProps } from "..";

export function Paragraph({ style, className, children }: StyleProps) {
  return (
    <p
      style={{
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "130%",
        letterSpacing: "1px",
        wordWrap: "break-word",
        ...style,
      }}
      className={className}
    >
      {children}
    </p>
  );
}
