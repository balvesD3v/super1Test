import { useEffect, useState } from "react";
import img from "/assets/Frame.svg";
import { FiMapPin, FiUser, FiShoppingCart } from "react-icons/fi";
import { Container, ContainerButton } from "./styles.ts";
import { SearchBar } from "../SearchBar/index.tsx";
import { ButtonCircle } from "../ButtonCircle/index.tsx";
import { NavigationBar } from "../NavigationBar/index.tsx";
import { HeaderMobile } from "../HeaderMobile/index.tsx";
import { CartSidebar } from "../CartSidebar/index.tsx";

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCepModalOpen, setIsCepModalOpen] = useState<boolean>(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleCepModal = () => {
    setIsCepModalOpen(!isCepModalOpen);
  };

  const toggleEmailModal = () => {
    setIsEmailModalOpen(!isEmailModalOpen);
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
    <Container>
      <img src={img} alt="Logo" className="img" />

      <SearchBar />

      <ContainerButton>
        <ButtonCircle icon={<FiMapPin size={22} color="#f47920" />} title="Onde" subtitle="você está?" onClick={toggleCepModal} />
        <ButtonCircle icon={<FiUser size={22} color="#f47920" />} title="Faça login" subtitle="ou cadastre-se" onClick={toggleEmailModal} />
        <ButtonCircle icon={<FiShoppingCart size={22} color="#f47920" />} onClick={toggleCart} />
      </ContainerButton>

      <NavigationBar />
      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleCart} />
    </Container>

  );
};
