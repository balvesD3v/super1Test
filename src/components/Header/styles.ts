import { styled } from "styled-components"

export const Container = styled.header`
  background-color: #eae0d5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 122px;
  gap: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px; 
    background-color: #ff8000; 
  }
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: -500px;
  width: 425px;
  max-height: 100%;
  background: #FAF7F4;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1001;

  &.open {
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px; 
    background-color: #ff8000; 
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
`

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  width: 320px; 
`;

export const MiddleBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 25px;

  
  overflow-y: auto; 
  scrollbar-width: thin;
  scrollbar-color: #ff8000 #f5f5f5;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff8000;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;

  .text {
    color: #F47920;
    font-weight: bold;
    font-size: 30px;
  }

  .itens {
    color: #737373;
    font-size: 14px;
  }
`

export const BottomBar = styled.div`
  box-shadow: 10px -10px 15px rgba(0, 0, 0, 0.2);

  .nextButton {
    width: 100%;
    height: 60px;
    background-color: #F47920;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #e2681b; 
    }

    .next {
      font-weight: bold;
      font-size: 18px;
      color: white;
    }

    img {
      transition: transform 0.3s ease-in-out;
    }

    &:hover img {
      transform: translateX(5px);
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`