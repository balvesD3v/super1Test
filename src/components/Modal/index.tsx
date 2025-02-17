import { Container } from "./styles";
import { InputWithButton } from "../InputWithButton";
import { FiMapPin } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Container className={isOpen ? "open" : "closed"} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <InputWithButton icon={<FiMapPin />} placeholder="Digite seu CEP" type="cep" />
      </div>
    </Container>
  );
};
