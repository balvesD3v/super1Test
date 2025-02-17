import img from "/assets/Frame.svg";
import { FiMapPin, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import { Container, Logo, MenuButton, CartButton, Overlay, Location } from "./styles.ts";
import { DepartamentsListMobile } from "../DepartamentsMobileList/index.tsx";
import { CartSidebar } from "../CartSidebar/index.tsx";
import { ButtonCircle } from "../ButtonCircle/index.tsx";
import { LoginSideBar } from "../LoginSidebar/index.tsx";
import { Modal } from "../Modal";

export const HeaderMobile = () => {
  const [isDepartamentsListOpen, setIsDepartamentsListOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);

  const toggleDepartamentsList = () => {
    setIsDepartamentsListOpen(!isDepartamentsListOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleLocation = () => {
    setIsLocationOpen((prev) => !prev);
  };

  return (
    <>
      <Container>
        <MenuButton onClick={toggleDepartamentsList}>
          <FiMenu size={24} color="#f47920" />
          <Logo src={img} alt="Logo" />
        </MenuButton>

        <CartButton>
          <ButtonCircle icon={<FiUser size={22} color="#f47920" />} onClick={toggleLogin} />
          <ButtonCircle icon={<FiShoppingCart size={24} color="#f47920" />} onClick={toggleCart} />
        </CartButton>
      </Container>

      <Location onClick={toggleLocation}>
        <FiMapPin size={18} color="#f47920" />
        <span className="WhereRu">
          <strong>Onde </strong>
          você está?
        </span>
      </Location>

      <Modal isOpen={isLocationOpen} onClose={toggleLocation} />

      {isDepartamentsListOpen && <Overlay onClick={toggleDepartamentsList} />}
      <DepartamentsListMobile isOpen={isDepartamentsListOpen} toggleDepartamentsList={toggleDepartamentsList} />

      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCart} />
      <LoginSideBar isOpen={isLoginOpen} toggleSidebar={toggleLogin} />
    </>
  );
};
