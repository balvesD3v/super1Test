import img from "/assets/Frame.svg";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Container, Logo, MenuButton, CartButton, Overlay } from "./styles.ts";
import { DepartamentsListMobile } from "../DepartamentsMobileList/index.tsx";

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
      <DepartamentsListMobile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    </>
  );
};
