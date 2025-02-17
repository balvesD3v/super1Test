import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
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
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e2681b;
  }
`;