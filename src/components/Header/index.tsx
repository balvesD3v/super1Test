import { useEffect, useState } from "react";
import img from "/assets/Frame.svg";
import logoUC from "/assets/logoUC.svg";
import progress from "/assets/progress.png";
import close from "/assets/close.png";
import whiteArrow from "/assets/white arrow right.png";
import { FiMapPin, FiUser, FiShoppingCart } from "react-icons/fi";
import { BottomBar, Container, ContainerButton, Details, MiddleBar, Overlay, Products, Sidebar, TopBar } from "./styles.ts";
import { SearchBar } from "../SearchBar/index.tsx";
import { ButtonCircle } from "../ButtonCircle/index.tsx";
import { CartProduct } from "../CartProduct/index.tsx";
import { CartCEP } from "../CartCEP/index.tsx";
import { NavigationBar } from "../NavigationBar/index.tsx";
import { HeaderMobile } from "../HeaderMobile/index.tsx";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <HeaderMobile />;
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

        <NavigationBar />
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
            <span className="next">Prosseguir</span>
            <img src={whiteArrow} alt="" />
          </button>
        </BottomBar>
      </Sidebar>
    </>
  );
};
