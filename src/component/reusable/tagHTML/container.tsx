import { StyleProps } from "..";

export function Container({ style, className, children }: StyleProps) {
  return (
    <div
      style={{
        margin: "0px 36px",
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
