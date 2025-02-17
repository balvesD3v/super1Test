import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.main`
  margin-top: 205px;

  @media (max-width: 768px) {
    margin-top: 50px; 
  }
`;
