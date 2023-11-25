import { StyleProps } from "..";

export function Article({ style, children }: StyleProps) {
  return <article style={{ ...style }}>{children}</article>;
}
