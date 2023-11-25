import { StyleProps } from "..";

export function Section({ style, children }: StyleProps) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        margin: 0,
        padding: 0,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
