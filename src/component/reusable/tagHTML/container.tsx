import { StyleProps } from "..";

export function Container({ style, children }: StyleProps) {
  return (
    <div
      style={{
        margin: "0px 36px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
