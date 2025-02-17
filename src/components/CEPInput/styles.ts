import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  padding: 10px 15px;
  width: 360px;
  
  input {
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 16px;
    color: #666;
    
    &::placeholder {
      color: #aaa;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #f7931e;
    font-size: 18px;
  }
`;
