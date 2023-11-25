import { StyleProps } from "..";
import "./index.css";

export function Button({ style, children }: StyleProps) {
  return (
    <button
      style={{
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        cursor: "pointer",
        transition: "backgroundColor 0.3s",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
