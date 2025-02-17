import { Container } from "./styles";
import { InputWithButton } from "../InputWithButton";
import { FiMapPin, FiMail } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: "default" | "cep" | "email";
}

export const Modal = ({ isOpen, onClose, type = "default" }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Container className={isOpen ? "open" : "closed"} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {type === "cep" && <InputWithButton icon={<FiMapPin />} placeholder="Digite seu CEP" type="cep" />}
        {type === "email" && <InputWithButton icon={<FiMail />} placeholder="Digite seu e-mail" type="email" />}
        {type === "default" && <InputWithButton icon={<FiMapPin />} placeholder="Digite aqui" type="default" />}
      </div>
    </Container>
  );
};
