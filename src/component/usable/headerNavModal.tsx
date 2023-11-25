import { Modal, StyleProps } from "..";

interface HeaderNavModalProps extends StyleProps {
  isModalOpen?: boolean;
  onClose?: () => void;
  title?: string;
}
export function HeaderNavModal({
  isModalOpen,
  onClose,
  title,
  children,
}: HeaderNavModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title={title}
      position="right"
      children={children}
    />
  );
}
