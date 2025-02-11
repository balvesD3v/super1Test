import { styled } from "styled-components"

export const Container = styled.header`
  background-color: #eae0d5;
  display: flex;

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

