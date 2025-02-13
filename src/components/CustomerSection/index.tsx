import { ProductCard } from "../ProductCard"
import { Container, Products } from "./styles"

export const CustomerSection = () => {
  return (
    <Container>
      <span>Descontos cliente <strong>Unimed Natal</strong></span>

      <Products>
        <ProductCard />
      </Products>
    </Container>
  )
}
