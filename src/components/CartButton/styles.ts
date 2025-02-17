import styled from "styled-components";

export const Button = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f57c00;
  color: #f57c00;
  border-radius: 50%;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(245, 124, 0, 0.1);
  }
`;
