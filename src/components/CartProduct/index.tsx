import { useState } from 'react'
import { CartButton } from '../CartButton'
import { CartContainer, Container, Details, ImageContainer } from './styles'
import { cartProducts } from "../../api/cartProduct";
import deleteImg from "/assets/delete.svg"

export const CartProduct = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(() => {
    const initialState: { [key: number]: number } = {};
    cartProducts.forEach((product) => {
      initialState[product.id] = 1;
    });
    return initialState;
  });

  const handleRemove = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] ?? 1) - 1, 0),
    }));
  };

  const handleAdd = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1,
    }));
  };

  return (
    <CartContainer>
      {cartProducts.map((product) => (
        <Container key={product.id}>
          <ImageContainer>
            <img src={product.imageUrl} alt={product.name} />
          </ImageContainer>

          <Details>
            <div className='textAndDelete'>
              <div className='text'>
                <div className='innerText'>
                  <span className='produtName'>{product.name}</span>
                  <span className='availability'>{product.availability}</span>
                  <span className='detail'>{product.detail}</span>
                </div>
                <div>
                  <img src={deleteImg} alt="Remover" />
                </div>
              </div>
              <div className='priceAndInput'>
                <div className='input'>
                  <CartButton onClick={() => handleRemove(product.id)} type='-' />
                  <span>{quantities[product.id]}</span>
                  <CartButton onClick={() => handleAdd(product.id)} type='+' />
                </div>
                <div className='price'>
                  <s className='originalPrice'>R$ {product.originalPrice?.toFixed(2)}</s>
                  <span>R$ {product.price?.toFixed(2) || product.discountedPrice?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </Details>
        </Container>
      ))}
    </CartContainer>
  );
};
