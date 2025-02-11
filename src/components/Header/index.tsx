import { Container } from "./styles.ts"
import img from "../../assets/Frame.svg"
import { SearchBar } from "../SearchBar/index.tsx"

export const Header = () => {
  return (
    <Container>
      <img src={img} alt="" />

      < SearchBar />
    </Container>
  )
}
