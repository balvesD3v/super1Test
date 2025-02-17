import { useState, useEffect } from "react";
import { products } from "../../api/products";
import { Card, Price, Container, SwiperContainer, Image, Details, Discount, InstallmentsAndPix, Seller } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

export const ProductCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Verifica ao carregar a página
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <SwiperContainer>
      <Swiper spaceBetween={16} slidesPerView={"auto"}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Image src={product.imageUrl} alt={product.name} />
              <Details>
                <h3>{product.name}</h3>

                {product.originalPrice && product.discountedPrice && (
                  <Discount>
                    <span className="old-price">R$ {product.originalPrice.toFixed(2)}</span>
                    <span className="discount">{product.discount}</span>
                  </Discount>
                )}

                <Price>R$ {(product.discountedPrice || product.price || product.startingPrice)?.toFixed(2)}</Price>

                <InstallmentsAndPix>
                  {product.installment && <span>{product.installment}</span>}
                  {product.pixPrice && <span className="pix">ou R$ {product.pixPrice.toFixed(2)} no pix</span>}
                </InstallmentsAndPix>

                <Seller>Vendido por <u>{product.seller}</u></Seller>
              </Details>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  ) : (
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
