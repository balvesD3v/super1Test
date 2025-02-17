import styled from "styled-components";
const bgImage = "https://cdn.pixabay.com/photo/2025/02/13/14/09/14-09-35-57_960_720.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 200px; 
  background-size: cover;
  background-image: url(${bgImage});
  background-position: center;
  margin: 0 auto 40px; 
  padding: 40px 50px;
  background-color: green;

  .title {
    color: #fff;
    font-family: "Source Sans 3", serif;
    font-size: 30pt;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    background-color: red;
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
