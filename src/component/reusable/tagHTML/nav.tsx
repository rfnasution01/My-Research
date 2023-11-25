import { StyleProps } from "..";

export function Nav({ style, className, children }: StyleProps) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      className={className}
    >
      {children}
    </nav>
  );
}
