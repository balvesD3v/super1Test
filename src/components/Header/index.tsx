import img from "../../assets/Frame.svg"
import { FiMapPin, FiUser, FiShoppingCart } from "react-icons/fi";
import { Container, ContainerButton } from "./styles.ts"
import { SearchBar } from "../SearchBar/index.tsx"
import { ButtonCircle } from "../ButtonCircle/index.tsx"

export const Header = () => {
  return (
    <Container>
      <img src={img} alt="" className="img" />

      <SearchBar />

      <ContainerButton>
        <ButtonCircle icon={<FiMapPin size={22} color="#f47920" />} title="Onde" subtitle="você está?" />
        <ButtonCircle icon={<FiUser size={22} color="#f47920" />} title="Faça login" subtitle="ou cadastre-se" />
        <ButtonCircle icon={<FiShoppingCart size={22} color="#f47920" />} />
      </ContainerButton>
    </Container>
  )
}
