import { StyleProps } from "..";

export function Body({ style, className, children }: StyleProps) {
  return (
    <body
      style={{
        padding: 0,
        margin: 0,
        minHeight: "95vh",
        backgroundColor: "#121212",
        color: "#fff",
        width: "100%",
        fontFamily: "sans-serif",
        ...style,
      }}
      className={className}
    >
      {children}
    </body>
  );
}
