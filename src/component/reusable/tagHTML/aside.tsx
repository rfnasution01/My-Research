import { StyleProps } from "..";

export function Aside({ style, className, children }: StyleProps) {
  return (
    <aside style={{ ...style }} className={className}>
      {children}
    </aside>
  );
}
