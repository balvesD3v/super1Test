import styled from "styled-components";

const bgImage = "https://cdn.pixabay.com/photo/2025/02/13/14/09/14-09-35-57_960_720.png"

export const Container = styled.div`
  width: 1100px;
  height: 450px;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 85px;
  padding: 40px 50px;

  span {
    color: #fff;
    font-family: "Source Sans 3", serif;
    font-size: 30pt;
  }
`

export const Products = styled.div`
  margin-top: 30px;
`
