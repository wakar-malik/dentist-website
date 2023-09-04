import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ModalOverlay({ children, onCloseModal }) {
  return (
    <div className={styles.modalOverlay}>
      <Button className={styles.closeModalBtn} onClick={onCloseModal}>
        <AiOutlineCloseCircle style={{ fontSize: "1.7rem", fontWeight: 900 }} />
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
