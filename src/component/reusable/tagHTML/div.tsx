import { StyleProps } from "..";

interface DivisionProps extends StyleProps {
  action?: () => void;
}

export function Division({
  style,
  className,
  children,
  action,
}: DivisionProps) {
  return (
    <div style={{ ...style }} className={className} onClick={action}>
      {children}
    </div>
  );
}
