import img from "/assets/Frame.svg"
import logoUC from "/assets/logoUC.svg"
import progress from "/assets/progress.png"
import close from "/assets/close.png"
import whiteArrow from "/assets/white arrow right.png"
import { FiMapPin, FiUser, FiShoppingCart } from "react-icons/fi";
import { BottomBar, Container, ContainerButton, Details, MiddleBar, Overlay, Products, Sidebar, TopBar } from "./styles.ts"
import { SearchBar } from "../SearchBar/index.tsx"
import { ButtonCircle } from "../ButtonCircle/index.tsx"
import { useState } from "react";
import { CartProduct } from "../CartProduct/index.tsx";
import { CartCEP } from "../CartCEP/index.tsx";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <Container>
        <img src={img} alt="" className="img" />

        <SearchBar />

        <ContainerButton>
          <ButtonCircle icon={<FiMapPin size={22} color="#f47920" />} title="Onde" subtitle="você está?" />
          <ButtonCircle icon={<FiUser size={22} color="#f47920" />} title="Faça login" subtitle="ou cadastre-se" />
          <ButtonCircle icon={<FiShoppingCart size={22} color="#f47920" />} onClick={toggleSidebar} />
        </ContainerButton>
      </Container>

      {isSidebarOpen && <Overlay onClick={toggleSidebar} />}
      <Sidebar className={isSidebarOpen ? "open" : ""}>
        <TopBar>
          <img src={logoUC} alt="" />
          <img src={progress} alt="" />
          <button className="close-btn" onClick={toggleSidebar}>
            <img src={close} alt="" />
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
              <span>total</span>
              <span>R$ 439,90</span>
            </div>
          </div>

          <button className="nextButton">
            <span className="next">
              Prosseguir
            </span>
            <img src={whiteArrow} alt="" />
          </button>
        </BottomBar>

      </Sidebar>

    </>
  )
}
