import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 200px; 
  background-size: cover;
  background-image: url("/assets/sessão cliente unimed natal (1).svg");
  background-position: center;
  margin: 0 auto 40px; 
  padding: 40px 50px;
  border-radius: 5px;

  .title {
    color: #fff;
    font-family: "Source Sans 3", serif;
    font-size: 30pt;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    margin: 0; 

    .title {
      font-size: 18pt;
    }
  }
`;

export const Products = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap; 
  padding: 0 5px;
  height: 400px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
`;
