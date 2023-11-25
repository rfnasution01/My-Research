import { StyleProps } from "..";

interface AnchorProps extends StyleProps {
  href?: string;
}
export function Anchor({ style, href, children }: AnchorProps) {
  return (
    <a
      href={href}
      style={{
        color: "#3498db",
        textDecoration: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
