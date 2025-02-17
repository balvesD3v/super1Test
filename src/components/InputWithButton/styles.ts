import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 15px;
  font-size: 16px;
  color: #888;
  outline: none;

  &::placeholder {
    color: #b0a8a0;
  }
`;

export const Button = styled.button`
  background: #f47920;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background: #e2681b;
  }
`;
