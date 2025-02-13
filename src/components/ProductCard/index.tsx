import { products } from "../../api/products"
import { Container } from "./styles";

export const ProductCard = () => {
  return (
    <Container>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.imageUrl} alt="" />
        </div>
      ))}
    </Container>
  );
}
