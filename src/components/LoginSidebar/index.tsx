import { MiddleBar, Sidebar } from "./styles.ts";
import logoUC from "/assets/logoUC.svg";
import close from "/assets/close.png";
import { InputWithButton } from "../InputWithButton/index.tsx";
import { FiSearch } from "react-icons/fi";

interface LoginSideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const LoginSideBar = ({ isOpen, toggleSidebar }: LoginSideBarProps) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar} />}

      <Sidebar className={isOpen ? "open" : ""}>
        <div className="logoButton">
          <img src={logoUC} alt="Logo UC" />
          <button className="close-btn" onClick={toggleSidebar}>
            <img src={close} alt="Fechar" />
          </button>
        </div>

        <MiddleBar>
          <span className="text"><strong>Faça seu login</strong></span>
          <span className="itens">Ou cadastre-se</span>

          <InputWithButton icon={<FiSearch />} placeholder="Insira seu e-mail" type="email" />
        </MiddleBar>
      </Sidebar>
    </>
  );
};
