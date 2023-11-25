import { X } from "lucide-react";
import { Division, Heading2, Separator, StyleProps } from "..";
import "./index.css";

interface ModalProps extends StyleProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  position?: "left" | "center" | "right";
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  position,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <Division
      className={
        position === "center"
          ? "modal-overlay modal-overlay-center"
          : position === "right"
          ? "modal-overlay modal-overlay-right"
          : position === "left"
          ? "modal-overlay modal-overlay-left"
          : "modal-overlay"
      }
    >
      <Division
        className={
          position === "center"
            ? "modal-content modal-content-center"
            : position === "right"
            ? "modal-content modal-content-right"
            : position === "left"
            ? "modal-content modal-content-left"
            : "modal-content"
        }
      >
        <Division
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: position === "center" ? "space-between" : "center",
            padding: "8px 16px",
          }}
        >
          {position === "center" && <Heading2>{title}</Heading2>}

          <Division
            style={{ cursor: "pointer" }}
            action={onClose}
            className="modal-close"
          >
            <X />
          </Division>
        </Division>

        {position === "center" && <Separator />}

        <Division
          style={{
            padding: "8px 16px",
            height: "100%",
          }}
        >
          {children}
        </Division>
      </Division>
    </Division>
  );
}
