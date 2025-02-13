import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 370px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  padding-bottom: 10px;
  position: relative;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 0 12px;
  font-size: 14px;
  color: #333;
  

  h3 {
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

export const Price = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #3F3F3F;
  margin: 4px 0;
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .old-price {
    text-decoration: line-through;
    color: #888;
    font-size: 13px;
  }

  .discount {
    color: #CC0A12;
    padding: 2px 6px;
    font-size: 12px;
    border-radius: 4px;
  }
`;

export const InstallmentsAndPix = styled.div`
  display: flex;
  flex-direction: column;

  .pix {
    font-size: 14px;
    color: #737373;
  }

  .info-text {
    font-size: 14px;
    color: #737373;
  }
`

export const Seller = styled.p`
  position: absolute;
  bottom: 0;

  font-size: 12px;
  color: #666;
  margin-top: 6px;

`