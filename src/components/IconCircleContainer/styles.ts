import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SwiperContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;
