import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { FaRegWindowClose } from "react-icons/fa";

function ModalOverlay({ children, onCloseModal }) {
  return (
    <div className={styles.modalOverlay}>
      <Button className={styles.closeModalBtn} onClick={onCloseModal}>
        <FaRegWindowClose style={{ fontSize: "1.7rem" }} />
      </Button>
      {children}
    </div>
  );
}

function ModalBackdrop({ onCloseModal }) {
  return <div className={styles.modalBackdrop} onClick={onCloseModal}></div>;
}

function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(
        <ModalOverlay onCloseModal={onClose}>{children}</ModalOverlay>,
        document.getElementById("modalRoot")
      )}
      {createPortal(
        <ModalBackdrop onCloseModal={onClose} />,
        document.getElementById("backdropRoot")
      )}
    </>
  );
}

export default Modal;
