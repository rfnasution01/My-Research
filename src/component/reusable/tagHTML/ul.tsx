import { StyleProps } from "..";

export function UnOrderedList({ style, className, children }: StyleProps) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        listStyleType: "none",
        padding: 0,
        margin: 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </ul>
  );
}
