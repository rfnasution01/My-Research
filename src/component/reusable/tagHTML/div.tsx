import { StyleProps } from "..";

export function Division({ style, children }: StyleProps) {
  return <div style={{ ...style }}>{children}</div>;
}
