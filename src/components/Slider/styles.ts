import styled from "styled-components";

export const CustomPrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -15px;
  z-index: 10;
  background: #F47920;
  border: none;
  width: 28px;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); 

  img {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background: #d8661b;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.35); 
  }
`;

export const CustomNextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -15px;
  z-index: 10;
  background: #F47920;
  border: none;
  width: 28px;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  img {
    width: 15px;
    height: 15px;
  }

  &:hover {
    background: #d8661b;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.35);
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;

  &:hover {
    ${CustomPrevButton}, ${CustomNextButton} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 768px) {
    ${CustomPrevButton}, ${CustomNextButton} {
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none;
    }
  }
`;
