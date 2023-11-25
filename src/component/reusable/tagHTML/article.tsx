import { StyleProps } from "..";

export function Article({ style, className, children }: StyleProps) {
  return (
    <article style={{ ...style }} className={className}>
      {children}
    </article>
  );
}
