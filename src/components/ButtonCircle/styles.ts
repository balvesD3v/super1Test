import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;

  &:hover {
    opacity: 0.8;
  }
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f5f0eb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`

export const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    font-size: 14px;
    color: #666;
  }
`