import { StyleProps } from "..";

interface ImageProps extends StyleProps {
  action?: () => void;
  width?: number;
  height?: number;
  src?: string;
}

export function Image({
  src,
  width,
  height,
  style,
  className,
  action,
}: ImageProps) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      style={{ ...style }}
      onClick={action}
      className={className}
    />
  );
}
