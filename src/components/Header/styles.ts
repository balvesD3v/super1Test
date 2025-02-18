import { styled } from "styled-components"

export const Container = styled.header`
  background-color: #eae0d5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 122px;
  gap: 50px;
  width: 100vw; 
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
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
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