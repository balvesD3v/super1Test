import styled from "styled-components";
import 'swiper/swiper-bundle.css';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow-x: auto;
`;

export const SwiperContainer = styled.div`
  width: 100%;

  .swiper-wrapper {
    display: flex;
    align-items: stretch;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: auto;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 250px; 
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-top: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 420px;
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
  word-wrap: break-word;
  overflow-wrap: break-word; 

  h3 {
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 6px;
    white-space: normal; 
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #3F3F3F;
  margin: 4px 0;

  @media (max-width: 768px) {
    margin: 0;
  }
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

  @media (max-width: 768px) {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
`;

export const Seller = styled.p`
  position: absolute;
  font-size: 12px;
  color: #616161;
  bottom: 0;
  max-width: 100%;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 90%; 
  }
`;
