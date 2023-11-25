import { StyleProps } from "..";

export function Separator({ style, className }: StyleProps) {
  return (
    <hr style={{ margin: 0, padding: 0, ...style }} className={className} />
  );
}
