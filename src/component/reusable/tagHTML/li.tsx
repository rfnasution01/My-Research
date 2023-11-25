import { StyleProps } from "..";
import "./index.css";

interface ListProps extends StyleProps {
  action?: () => void;
}

export function List({ style, children, action }: ListProps) {
  return (
    <li
      style={{
        display: "inline-block",
        padding: "4px 12px",
        ...style,
      }}
      onClick={action}
    >
      {children}
    </li>
  );
}
