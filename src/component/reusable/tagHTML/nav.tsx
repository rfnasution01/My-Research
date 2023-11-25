import { StyleProps } from "..";

export function Nav({ style, children }: StyleProps) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </nav>
  );
}
