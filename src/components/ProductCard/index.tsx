import { products } from "../../api/products";
import { Card, Price, Container, Image, Details, Discount, InstallmentsAndPix, Seller } from "./styles";

export const ProductCard = () => {
  return (
    <Container>
      {products.map((product, index) => (
        <Card key={index}>
          <Image src={product.imageUrl} alt={product.name} />
          <Details>
            <h3>{product.name}</h3>

            {product.originalPrice && product.discountedPrice ? (
              <Discount>
                <span className="old-price">R$ {product.originalPrice.toFixed(2)}</span>
                <span className="discount">{product.discount}</span>
              </Discount>
            ) : null}

            <Price>R$ {(product.discountedPrice || product.price || product.startingPrice)?.toFixed(2)}</Price>

            <InstallmentsAndPix>
              {product.installment && <span className="info-text">{product.installment}</span>}
              {product.pixPrice && <span className="pix">ou R$ {product.pixPrice.toFixed(2)} no pix</span>}
            </InstallmentsAndPix>

            <Seller className="seller">Vendido por <u>{product.seller}</u></Seller>
          </Details>
        </Card>
      ))}
    </Container>
  );
};
