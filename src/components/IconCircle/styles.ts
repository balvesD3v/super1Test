import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer; 
  width: 100px;
`;

export const IconWrapper = styled.div`
  width: 96px;
  height: 96px;
  background-color: #f8f2eb; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  img {
    width: 48px;
    height: 48px;
    transition: filter 0.3s ease-in-out;
  }

  ${Container}:hover & {
    background-color: #F47920; 
    
    img {
      filter: brightness(100) saturate(100%);
    }
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: "Source Sans 3", serif;
  color: #444;
  text-align: center;
  transition: font-weight 0.3s ease-in-out;
  white-space: pre-line; 

  ${Container}:hover & {
    font-weight: 600;
  }
`;
