import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
`
export const Container = styled.div`
  display: flex;
  padding: 20px;
`

export const ImageContainer = styled.div`
  display: flex;
  align-self: center;
  width: 70px;
  height: 70px;
`

export const Details = styled.div`
  display: flex;

  .textAndDelete {
    display: flex;
    flex-direction: column;
  }

  .text {
    background-color: white;
    display: flex;
    padding: 20px;

    .innerText {
      display: flex;
      flex-direction: column;

      .produtName {
        width: 220px;
      }

      .detail {
        color: #737373;
        font-size: 14px;
        font-weight: 400;
      }

      .availability {
        color: #C02E34;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .priceAndInput {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;

    .input {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .price {
      font-size: 14px;
      font-weight: 600;
      display: flex;
      gap: 5px;

      .originalPrice {
        color: #737373;
        font-weight: 600;
      }
    }
  }
`