import img from "/assets/Frame.svg";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Container, Logo, MenuButton, CartButton, Overlay } from "./styles.ts";
import { DepartamentsListMobile } from "../DepartamentsMobileList/index.tsx";
import { CartSidebar } from "../CartSidebar/index.tsx";

export const HeaderMobile = () => {
  const [isDepartamentsListOpen, setIsDepartamentsListOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleDepartamentsList = () => {
    setIsDepartamentsListOpen(!isDepartamentsListOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Container>
        <MenuButton onClick={toggleDepartamentsList}>
          <FiMenu size={24} color="#f47920" />
        </MenuButton>

        <Logo src={img} alt="Logo" />

        <CartButton onClick={toggleCart}>
          <FiShoppingCart size={24} color="#f47920" />
        </CartButton>
      </Container>

      {isDepartamentsListOpen && <Overlay onClick={toggleDepartamentsList} />}
      <DepartamentsListMobile isOpen={isDepartamentsListOpen} toggleDepartamentsList={toggleDepartamentsList} />

      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCart} />
    </>
  );
};
