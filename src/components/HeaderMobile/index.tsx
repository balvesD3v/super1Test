import img from "/assets/Frame.svg";
import { FiMapPin, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { useState } from "react";
import { Container, Logo, MenuButton, CartButton, Overlay, Location, LocationModal } from "./styles.ts";
import { DepartamentsListMobile } from "../DepartamentsMobileList/index.tsx";
import { CartSidebar } from "../CartSidebar/index.tsx";
import { ButtonCircle } from "../ButtonCircle/index.tsx";
import { LoginSideBar } from "../LoginSidebar/index.tsx";
import { InputWithButton } from "../InputWithButton/index.tsx";

export const HeaderMobile = () => {
  const [isDepartamentsListOpen, setIsDepartamentsListOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

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
    if (!isLocationOpen) {
      setShowModal(true);
      setTimeout(() => setIsLocationOpen(true), 10);
    } else {
      setIsLocationOpen(false);
      setTimeout(() => setShowModal(false), 300);
    }
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

      {showModal && (
        <LocationModal className={isLocationOpen ? "open" : "closed"}>
          <InputWithButton />
        </LocationModal>
      )}
      {isDepartamentsListOpen && <Overlay onClick={toggleDepartamentsList} />}
      <DepartamentsListMobile isOpen={isDepartamentsListOpen} toggleDepartamentsList={toggleDepartamentsList} />

      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCart} />
      <LoginSideBar isOpen={isLoginOpen} toggleSidebar={toggleLogin} />
    </>
  );
};
