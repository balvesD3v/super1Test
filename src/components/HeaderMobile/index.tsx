import img from "/assets/Frame.svg";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Container, Logo, MenuButton, CartButton, Sidebar, Overlay } from "./styles.ts";

export const HeaderMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Container>
        <MenuButton onClick={toggleSidebar}>
          <FiMenu size={24} color="#f47920" />
        </MenuButton>

        <Logo src={img} alt="Logo" />

        <CartButton onClick={toggleSidebar}>
          <FiShoppingCart size={24} color="#f47920" />
        </CartButton>
      </Container>

      {isSidebarOpen && <Overlay onClick={toggleSidebar} />}
      <Sidebar className={isSidebarOpen ? "open" : ""}>
        <button className="close-btn" onClick={toggleSidebar}>X</button>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Minha Conta</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </nav>
      </Sidebar>
    </>
  );
};
