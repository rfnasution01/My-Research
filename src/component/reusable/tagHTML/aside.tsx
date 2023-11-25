import { StyleProps } from "..";

export function Aside({ style, children }: StyleProps) {
  return <aside style={{ ...style }}>{children}</aside>;
}
