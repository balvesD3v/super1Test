import { TopBar, MiddleBar, Details, Products, BottomBar, Sidebar } from "./styles.ts";
import { CartProduct } from "../CartProduct/index.tsx";
import { CartCEP } from "../CartCEP/index.tsx";
import logoUC from "/assets/logoUC.svg";
import progress from "/assets/progress.png";
import close from "/assets/close.png";
import whiteArrow from "/assets/white arrow right.png";

interface CartSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const CartSidebar = ({ isOpen, toggleSidebar }: CartSidebarProps) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar} />}

      <Sidebar className={isOpen ? "open" : ""}>
        <TopBar>
          <img src={logoUC} alt="Logo UC" />
          <img src={progress} alt="Progress" />
          <button className="close-btn" onClick={toggleSidebar}>
            <img src={close} alt="Fechar" />
          </button>
        </TopBar>

        <MiddleBar>
          <Details>
            <span className="text">Carrinho</span>
            <span className="itens">(7 itens)</span>
          </Details>

          <Products>
            <CartProduct />
          </Products>
        </MiddleBar>

        <BottomBar>
          <div>
            <CartCEP />
            <div className="total">
              <span>Total</span>
              <span>R$ 439,90</span>
            </div>
          </div>

          <button className="nextButton">
            <span className="next">Prosseguir</span>
            <img src={whiteArrow} alt="Seta para direita" />
          </button>
        </BottomBar>
      </Sidebar>
    </>
  );
};
